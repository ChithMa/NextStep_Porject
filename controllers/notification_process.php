<?php
session_start();
require_once "../config/db.php";

if (!isset($_SESSION['user_id'])) exit;

$action = $_POST['action'] ?? '';
$user_id = $_SESSION['user_id'];

if ($action === 'mark_read') {
    $id = $_POST['id'];
    $stmt = $pdo->prepare("UPDATE notifications SET is_read = 1 WHERE id = ? AND user_id = ?");
    $stmt->execute([$id, $user_id]);
} elseif ($action === 'mark_all_read') {
    $stmt = $pdo->prepare("UPDATE notifications SET is_read = 1 WHERE user_id = ?");
    $stmt->execute([$user_id]);
}
