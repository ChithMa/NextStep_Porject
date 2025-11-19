<?php
session_start();
require_once "../config/db.php";

// Verify coordinator login
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'coordinator') {
    http_response_code(403);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

// Get filter type from request
$filter = $_GET['filter'] ?? 'all';

header('Content-Type: application/json');

try {
    if ($filter === 'interns') {
        // Fetch students who are in industry_placements table
        $stmt = $pdo->prepare("
            SELECT DISTINCT s.id, s.first_name, s.last_name, s.degree, s.user_id
            FROM students s
            INNER JOIN industry_placements ip ON s.id = ip.student_id
            ORDER BY s.first_name, s.last_name
        ");
        $stmt->execute();
    } else if ($filter === 'non-interns') {
        // Fetch students who are NOT in industry_placements table
        $stmt = $pdo->prepare("
            SELECT s.id, s.first_name, s.last_name, s.degree, s.user_id
            FROM students s
            LEFT JOIN industry_placements ip ON s.id = ip.student_id
            WHERE ip.student_id IS NULL
            ORDER BY s.first_name, s.last_name
        ");
        $stmt->execute();
    } else {
        // Fetch all students
        $stmt = $pdo->prepare("
            SELECT s.id, s.first_name, s.last_name, s.degree, s.user_id
            FROM students s
            ORDER BY s.first_name, s.last_name
        ");
        $stmt->execute();
    }
    
    $students = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode(['success' => true, 'students' => $students]);
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}

