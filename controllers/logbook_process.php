<?php
session_start();
require_once "../config/db.php";

header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    exit;
}

$user_id = $_SESSION['user_id'];

// Get Student ID
$stmt = $pdo->prepare("SELECT id FROM students WHERE user_id = ?");
$stmt->execute([$user_id]);
$student = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$student) {
    echo json_encode(['success' => false, 'message' => 'Student not found']);
    exit;
}
$student_id = $student['id'];

$action = $_POST['action'] ?? '';

try {
    if ($action === 'save_week') {
        $month = $_POST['month_number'];
        $week = $_POST['week_number'];
        $activities = $_POST['activities'];
        $technical = $_POST['technical_skills'];
        $soft = $_POST['soft_skills'];
        $trainings = $_POST['trainings'];

        $sql = "INSERT INTO logbook_entries (student_id, month_number, week_number, activities, technical_skills, soft_skills, trainings)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                activities = VALUES(activities),
                technical_skills = VALUES(technical_skills),
                soft_skills = VALUES(soft_skills),
                trainings = VALUES(trainings)";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$student_id, $month, $week, $activities, $technical, $soft, $trainings]);

        echo json_encode(['success' => true, 'message' => 'Entry saved successfully', 'data' => [
            'activities' => $activities,
            'technical_skills' => $technical,
            'soft_skills' => $soft,
            'trainings' => $trainings
        ]]);

    } elseif ($action === 'clear_week') {
        $month = $_POST['month_number'];
        $week = $_POST['week_number'];

        $stmt = $pdo->prepare("DELETE FROM logbook_entries WHERE student_id = ? AND month_number = ? AND week_number = ?");
        $stmt->execute([$student_id, $month, $week]);

        echo json_encode(['success' => true, 'message' => 'Entry cleared']);

    } elseif ($action === 'get_month_data') {
        // Fetch all entries for a specific month
        $month = $_POST['month_number'];
        $stmt = $pdo->prepare("SELECT * FROM logbook_entries WHERE student_id = ? AND month_number = ? ORDER BY week_number ASC");
        $stmt->execute([$student_id, $month]);
        $entries = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Fetch approval status
        $stmtStatus = $pdo->prepare("SELECT * FROM logbook_monthly_reviews WHERE student_id = ? AND month_number = ?");
        $stmtStatus->execute([$student_id, $month]);
        $status = $stmtStatus->fetch(PDO::FETCH_ASSOC);

        echo json_encode(['success' => true, 'entries' => $entries, 'status' => $status]);

    } elseif ($action === 'submit_month') {
        $month = $_POST['month_number'];
        
        // precise requirements: 4 columns and 4 rows (weeks) filled.
        // Check if all 4 weeks exist
        $stmt = $pdo->prepare("SELECT COUNT(*) FROM logbook_entries WHERE student_id = ? AND month_number = ?");
        $stmt->execute([$student_id, $month]);
        $count = $stmt->fetchColumn();

        if ($count < 4) {
             echo json_encode(['success' => false, 'message' => 'Please complete all 4 weeks before submitting.']);
             exit;
        }

        // Get placement info for mentor email
        $stmtPlacement = $pdo->prepare("SELECT mentor_email, mentor_name FROM industry_placements WHERE student_id = ?");
        $stmtPlacement->execute([$student_id]);
        $placement = $stmtPlacement->fetch(PDO::FETCH_ASSOC);

        if (!$placement) {
            echo json_encode(['success' => false, 'message' => 'Internal Error: Placement not found']);
            exit;
        }

        $token = bin2hex(random_bytes(32)); 
        
        $sql = "INSERT INTO logbook_monthly_reviews (student_id, month_number, status, submitted_date, approval_token)
                VALUES (?, ?, 'submitted', CURDATE(), ?)
                ON DUPLICATE KEY UPDATE
                status = 'submitted', submitted_date = CURDATE(), approval_token = VALUES(approval_token)";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$student_id, $month, $token]);

        // 1. Fetch Log Entries for Email Body
        $stmtLogs = $pdo->prepare("SELECT * FROM logbook_entries WHERE student_id = ? AND month_number = ? ORDER BY week_number ASC");
        $stmtLogs->execute([$student_id, $month]);
        $logs = $stmtLogs->fetchAll(PDO::FETCH_ASSOC);

        // Fetch Student Name
        $stmtName = $pdo->prepare("SELECT first_name, last_name FROM students WHERE id = ?");
        $stmtName->execute([$student_id]);
        $studInfo = $stmtName->fetch(PDO::FETCH_ASSOC);
        $studentName = $studInfo['first_name'] . ' ' . $studInfo['last_name'];

        // 2. Generate Links (Dynamic Host)
        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
        $host = $_SERVER['HTTP_HOST']; 
        $baseUrl = "$protocol://$host/NXTStep/views/mentor_action.php?token=$token";
        
        $approveLink = "$baseUrl&action=approve";
        $rejectLink = "$baseUrl&action=reject";

        // 3. Build HTML Body
        $emailBody = "
        <h2>Logbook Approval Request - Month $month</h2>
        <p><strong>Student:</strong> $studentName</p>
        <p>Please review the weekly activities below:</p>
        <table border='1' cellpadding='10' cellspacing='0' style='border-collapse: collapse; width: 100%;'>
            <thead>
                <tr style='background-color: #f2f2f2;'>
                    <th>Week</th>
                    <th>Activities</th>
                    <th>Technical Skills</th>
                    <th>Soft Skills</th>
                    <th>Trainings</th>
                </tr>
            </thead>
            <tbody>";
        
        foreach ($logs as $log) {
            $emailBody .= "
            <tr>
                <td>Week {$log['week_number']}</td>
                <td>" . nl2br(htmlspecialchars($log['activities'])) . "</td>
                <td>" . nl2br(htmlspecialchars($log['technical_skills'])) . "</td>
                <td>" . nl2br(htmlspecialchars($log['soft_skills'])) . "</td>
                <td>" . nl2br(htmlspecialchars($log['trainings'])) . "</td>
            </tr>";
        }
        
        $emailBody .= "
            </tbody>
        </table>
        <br>
        <p>Please click one of the actions below:</p>
        <p>
            <a href='$approveLink' style='background-color: green; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;'>Approve</a>
            &nbsp;&nbsp;
            <a href='$rejectLink' style='background-color: red; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;'>Reject</a>
        </p>";

        // 4. Send Email via PHPMailer
        $emailSent = sendEmailPHPMailer(
            $placement['mentor_email'], 
            $placement['mentor_name'], 
            "Logbook Approval Request: $studentName (Month $month)", 
            $emailBody
        );

        if ($emailSent) {
            echo json_encode(['success' => true, 'message' => 'Submitted successfully! Email sent to mentor.']);
        } else {
            echo json_encode(['success' => true, 'message' => 'Submitted, but failed to send email. Ensure API Key is configured.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid action']);
    }

} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}


// -------------------------------------------------------------
// HELPER: Send Email via PHPMailer
// -------------------------------------------------------------
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

function sendEmailPHPMailer($toEmail, $toName, $subject, $htmlContent) {
    // Try to load Composer's autoloader
    if (file_exists('../vendor/autoload.php')) {
        require_once '../vendor/autoload.php';
    } else {
        // Fallback: Check if user has manual PHPMailer in a typical location or we can't send
        // You might need to adjust this path if you downloaded PHPMailer manually
        if (file_exists('../PHPMailer/src/PHPMailer.php')) {
            require_once '../PHPMailer/src/Exception.php';
            require_once '../PHPMailer/src/PHPMailer.php';
            require_once '../PHPMailer/src/SMTP.php';
        } else {
            // Cannot find library
            error_log("PHPMailer library not found. Please install via composer or download to ../PHPMailer");
            return false;
        }
    }

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.mailersend.net';                       // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'MS_6ixxhE@test-r83ql3pmrjxgzw1j.mlsender.net';                 // SMTP username
        $mail->Password   = 'mssp.oyGeTAK.k68zxl2d8o34j905.4rzIPGe';                    // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption
        $mail->Port       = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom('MS_6ixxhE@test-r83ql3pmrjxgzw1j.mlsender.net', 'NXTStep System');
        $mail->addAddress($toEmail, $toName);     // Add a recipient

        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = $htmlContent;

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
        return false;
    }
}
