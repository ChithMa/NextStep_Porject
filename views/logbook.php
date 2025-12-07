<?php
session_start();
require_once '../config/db.php';

// Check Auth
if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.php");
    exit;
}

// Get Student Info
$stmt = $pdo->prepare("SELECT id, first_name, last_name FROM students WHERE user_id = ?");
$stmt->execute([$_SESSION['user_id']]);
$student = $stmt->fetch(PDO::FETCH_ASSOC);
$student_id = $student['id'];

// Check Placement
$stmt = $pdo->prepare("SELECT * FROM industry_placements WHERE student_id = ?");
$stmt->execute([$student_id]);
$placement = $stmt->fetch(PDO::FETCH_ASSOC);

$has_placement = $placement ? true : false;
$months_list = [];

if ($has_placement) {
    try {
        $start = new DateTime($placement['start_date']);
        $end = new DateTime($placement['end_date']);
        
        // Calculate months carefully
        $current = clone $start;
        $month_count = 0;
        
        while ($current <= $end) {
            $month_count++;
            $months_list[] = [
                'number' => $month_count,
                'label' => $current->format('F Y') // e.g., "January 2024"
            ];
            $current->modify('+1 month');
        }
        // If the end date is extended beyond the loop (because +1 month jumps over), ensure we capture the range logic desired.
        // But for simply showing "Month 1, Month 2", basic count is fine. 
        // User request: "Based on the number months the buttons should be displayed as month1, month2, month3 etc."
        
        // Re-calculate simpler count if just number is needed, but date context is nice.
        // Let's stick to simple "Month 1", "Month 2" buttons as requested.
        
    } catch (Exception $e) {
        $months_list = [];
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logbook - NXTStep</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>
<body class="bg-gray-50 min-h-screen flex flex-col">

    <?php include '../includes/header.php'; ?>

    <div class="container mx-auto px-6 py-8 flex-grow">
        
        <!-- Page Header -->
        <div class="flex justify-between items-center mb-8">
            <div>
                <h1 class="text-3xl font-bold text-gray-800">Internship Logbook</h1>
                <p class="text-gray-500 mt-1">Manage your weekly activities and progress.</p>
            </div>
            <a href="logbook_history.php" class="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-medium shadow-md transition">
                <i class="fa-solid fa-clock-rotate-left mr-2"></i> View Logbook History
            </a>
        </div>

        <?php if (!$has_placement): ?>
            <!-- Access Denied State -->
            <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r shadow-md">
                <div class="flex items-center">
                    <i class="fa-solid fa-lock text-red-500 text-2xl mr-4"></i>
                    <div>
                        <h3 class="text-lg font-semibold text-red-700">Access Restricted</h3>
                        <p class="text-red-600">You must complete your <strong>Industry Placement Form</strong> successfully before accessing the logbook.</p>
                        <a href="industry_placement.php" class="inline-block mt-3 text-red-700 font-semibold hover:underline">Go to Placement Form &rarr;</a>
                    </div>
                </div>
            </div>
        <?php else: ?>

            <!-- Month Navigation (Tabs) -->
            <div class="bg-white rounded-t-xl shadow-sm border-b border-gray-200 px-2 pt-2 flex overflow-x-auto gap-2" id="monthTabs">
                <?php foreach ($months_list as $index => $m): ?>
                    <button 
                        onclick="loadMonth(<?= $m['number'] ?>)"
                        id="tab-btn-<?= $m['number'] ?>"
                        class="px-6 py-3 font-medium text-sm rounded-t-lg transition-colors border-t border-x border-transparent hover:bg-gray-50 text-gray-600 month-tab-btn">
                        Month <?= $m['number'] ?>
                    </button>
                <?php endforeach; ?>
            </div>

            <!-- Logbook Content Area -->
            <div class="bg-white shadow-md rounded-b-xl p-6 min-h-[400px]">
                
                <div id="loading" class="hidden text-center py-10">
                    <i class="fa-solid fa-circle-notch fa-spin text-4xl text-blue-500"></i>
                    <p class="text-gray-500 mt-4">Loading logbook data...</p>
                </div>

                <div id="monthContent" class="hidden">
                    <!-- Status Banner -->
                    <div id="statusBanner" class="hidden mb-6 p-4 rounded-lg border"></div>

                    <!-- The Table -->
                    <div class="overflow-x-auto border rounded-lg">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
                                    <th class="p-4 border-b font-semibold w-1/12">Week</th>
                                    <th class="p-4 border-b font-semibold w-3/12">Activities Carried Out</th>
                                    <th class="p-4 border-b font-semibold w-3/12">Technical Skills Developed</th>
                                    <th class="p-4 border-b font-semibold w-3/12">Soft Skills Developed</th>
                                    <th class="p-4 border-b font-semibold w-2/12">Trainings Received</th>
                                </tr>
                            </thead>
                            <tbody id="logbookTableBody" class="text-gray-600 text-sm">
                                <!-- Rows generated by JS -->
                            </tbody>
                        </table>
                    </div>

                    <!-- Action Area -->
                    <div class="mt-6 flex justify-end">
                        <button id="submitMonthBtn" onclick="submitMonth()" class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition flex items-center">
                            <i class="fa-solid fa-paper-plane mr-2"></i> Get Approval for Month <span id="currentMonthDisplay" class="ml-1"></span>
                        </button>
                    </div>
                </div>

                <!-- Empty State / Intro -->
                <div id="initialState" class="text-center py-20">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/folder-4006886-3309995.png" alt="Select Month" class="w-48 mx-auto opacity-50 mb-4">
                    <h3 class="text-xl font-semibold text-gray-700">Select a Month</h3>
                    <p class="text-gray-500">Click on a month tab above to view or edit your logbook entries.</p>
                </div>

            </div>

        <?php endif; ?>
    </div>

    <!-- Edit Entry Modal -->
    <div id="entryModal" class="fixed inset-0 bg-black/50 z-50 hidden flex items-center justify-center backdrop-blur-sm">
        <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl transform transition-all scale-100 p-6">
            <div class="flex justify-between items-center mb-6 border-b pb-4">
                <h3 class="text-xl font-bold text-gray-800">
                    <i class="fa-solid fa-pen-to-square text-blue-600 mr-2"></i> 
                    Add/Edit Entry: Week <span id="modalWeekNum"></span>
                </h3>
                <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            </div>
            
            <form id="logEntryForm">
                <input type="hidden" id="modalMonth" name="month_number">
                <input type="hidden" id="modalWeek" name="week_number">

                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1">Activities Carried Out</label>
                        <textarea name="activities" id="inp_activities" rows="3" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border p-2"></textarea>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Technical Skills</label>
                            <textarea name="technical_skills" id="inp_technical" rows="2" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border p-2"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Soft Skills</label>
                            <textarea name="soft_skills" id="inp_soft" rows="2" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border p-2"></textarea>
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1">Trainings Received/Attended</label>
                        <textarea name="trainings" id="inp_trainings" rows="2" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border p-2"></textarea>
                    </div>
                </div>

                <div class="mt-8 flex justify-between items-center pt-4 border-t">
                    <button type="button" onclick="clearEntry()" class="text-red-500 font-semibold hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded transition">
                        <i class="fa-solid fa-trash mr-2"></i> Clear
                    </button>
                    <div class="flex gap-3">
                        <button type="button" onclick="closeModal()" class="px-5 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition">Cancel</button>
                        <button type="submit" class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition">
                            Save Draft
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!-- JS Logic -->
    <script>
    let currentData = {}; // Store fetched data
    let currentMonth = null;

    function loadMonth(month) {
        currentMonth = month;
        const displaySpan = document.getElementById('currentMonthDisplay');
        if (displaySpan) {
            displaySpan.innerText = month;
        }
        
        // Update Tabs UI
        document.querySelectorAll('.month-tab-btn').forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
            btn.classList.add('text-gray-600', 'hover:bg-gray-50');
        });
        const activeBtn = document.getElementById(`tab-btn-${month}`);
        activeBtn.classList.remove('text-gray-600', 'hover:bg-gray-50');
        activeBtn.classList.add('bg-blue-600', 'text-white', 'border-blue-600');

        // Show Content
        document.getElementById('initialState').classList.add('hidden');
        document.getElementById('monthContent').classList.add('hidden');
        document.getElementById('loading').classList.remove('hidden');

        // Fetch Data
        const formData = new FormData();
        formData.append('action', 'get_month_data');
        formData.append('month_number', month);

        fetch('../controllers/logbook_process.php', { method: 'POST', body: formData })
        .then(res => res.json())
        .then(data => {
            document.getElementById('loading').classList.add('hidden');
            document.getElementById('monthContent').classList.remove('hidden');
            
            if(data.success) {
                renderTable(data.entries, data.status);
            } else {
                alert("Error loading data: " + data.message);
            }
        });
    }

    function renderTable(entries, status) {
        const tbody = document.getElementById('logbookTableBody');
        tbody.innerHTML = '';
        currentData = {}; // Reset

        // Index entries by week for easy lookup
        entries.forEach(e => currentData[e.week_number] = e);

        const isSubmitted = status && (status.status === 'submitted' || status.status === 'approved');
        
        // Handle Banner
        const banner = document.getElementById('statusBanner');
        const submitBtn = document.getElementById('submitMonthBtn');
        
        banner.className = 'hidden mb-6 p-4 rounded-lg border flex items-center gap-3'; // reset
        
        // Reset/Restore Button Default State
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed', 'hidden');
        submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane mr-2"></i> Get Approval for Month <span id="currentMonthDisplay" class="ml-1">${currentMonth}</span>`;

        if(status) {
            banner.classList.remove('hidden');
            if(status.status === 'approved') {
                banner.classList.add('bg-green-50', 'border-green-200', 'text-green-800');
                banner.innerHTML = `<i class="fa-solid fa-circle-check text-green-600 text-xl"></i> <div><strong>Approved!</strong> This month's logbook has been approved by your mentor.</div>`;
                submitBtn.classList.add('hidden');
            } else if (status.status === 'submitted') {
                banner.classList.add('bg-yellow-50', 'border-yellow-200', 'text-yellow-800');
                banner.innerHTML = `<i class="fa-solid fa-clock text-yellow-600 text-xl"></i> <div><strong>Submitted.</strong> Awaiting mentor approval. You cannot make edits.</div>`;
                submitBtn.disabled = true;
                submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
                submitBtn.innerHTML = `<i class="fa-solid fa-clock mr-2"></i> Submitted for Review`;
            } else if (status.status === 'rejected') {
                banner.classList.add('bg-red-50', 'border-red-200', 'text-red-800');
                banner.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-red-600 text-xl"></i> <div><strong>Rejected.</strong> Rejection Reason: Requires more detail. Please update and resubmit.</div>`;
            } else {
                banner.classList.add('hidden');
            }
        } else {
             banner.classList.add('hidden');
        }

        // Render 4 weeks
        for (let i = 1; i <= 4; i++) {
            const entry = currentData[i];
            const hasEntry = !!entry;
            
            const btnLabel = hasEntry ? 
                `<span class="text-green-600"><i class="fa-solid fa-check-circle"></i> Week ${i}</span>` : 
                `Week ${i}`;
            
            const btnClass = hasEntry ? "bg-white border-green-300 text-green-700 hover:bg-green-50" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50";

            let rowHtml = `
            <tr class="border-b hover:bg-gray-50 transition">
                <td class="p-4 align-top">
                    <button onclick="openEntryModal(${i}, ${isSubmitted})" 
                        class="w-full py-2 px-3 border rounded-lg font-semibold shadow-sm text-center transition ${btnClass}">
                        ${btnLabel} <br>
                        <span class="text-xs font-normal text-gray-500">${hasEntry ? 'Edit' : 'Add'}</span>
                    </button>
                </td>
                <td class="p-4 align-top text-gray-600 whitespace-pre-line">${entry ? entry.activities : '<span class="text-gray-400 italic">No entry</span>'}</td>
                <td class="p-4 align-top text-gray-600 whitespace-pre-line">${entry ? entry.technical_skills : '<span class="text-gray-400 italic">-</span>'}</td>
                <td class="p-4 align-top text-gray-600 whitespace-pre-line">${entry ? entry.soft_skills : '<span class="text-gray-400 italic">-</span>'}</td>
                <td class="p-4 align-top text-gray-600 whitespace-pre-line">${entry ? entry.trainings : '<span class="text-gray-400 italic">-</span>'}</td>
            </tr>
            `;
            tbody.insertAdjacentHTML('beforeend', rowHtml);
        }
    }

    function openEntryModal(week, isReadOnly) {
        if(isReadOnly && !document.getElementById('statusBanner').innerHTML.includes('Rejected')) {
            // If submitted/approved, maybe just view? Or prevent opening?
            // "Logbook page must be inaccessible..." -> Actually usually read-only.
            // Let's allow opening but disable inputs if we want, or just alert.
            // For now, I'll return if submitted/approved.
            alert("Entry cannot be edited while submitted or approved.");
            return;
        }

        document.getElementById('modalWeekNum').innerText = week;
        document.getElementById('modalMonth').value = currentMonth;
        document.getElementById('modalWeek').value = week;

        // Populate fields
        const entry = currentData[week];
        document.getElementById('inp_activities').value = entry ? entry.activities : '';
        document.getElementById('inp_technical').value = entry ? entry.technical_skills : '';
        document.getElementById('inp_soft').value = entry ? entry.soft_skills : '';
        document.getElementById('inp_trainings').value = entry ? entry.trainings : '';

        document.getElementById('entryModal').classList.remove('hidden');
    }

    function closeModal() {
        document.getElementById('entryModal').classList.add('hidden');
    }

    document.getElementById('logEntryForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        formData.append('action', 'save_week');

        fetch('../controllers/logbook_process.php', { method: 'POST', body: formData })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                closeModal();
                loadMonth(currentMonth); // Reload
            } else {
                alert(data.message);
            }
        });
    });

    function clearEntry() {
        if(!confirm("Are you sure you want to clear this entry?")) return;
        
        const week = document.getElementById('modalWeek').value;
        const formData = new FormData();
        formData.append('action', 'clear_week');
        formData.append('month_number', currentMonth);
        formData.append('week_number', week);

        fetch('../controllers/logbook_process.php', { method: 'POST', body: formData })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                closeModal();
                loadMonth(currentMonth);
            }
        });
    }

    function submitMonth() {
        if(!confirm("Are you sure you want to submit Month " + currentMonth + " for approval? This action cannot be undone.")) return;

        const formData = new FormData();
        formData.append('action', 'submit_month');
        formData.append('month_number', currentMonth);

        fetch('../controllers/logbook_process.php', { method: 'POST', body: formData })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                alert(data.message);
                loadMonth(currentMonth); // Reload status
            } else {
                alert(data.message);
            }
        });
    }

    </script>

</body>
</html>
