<?php
require 'settings.php';

session_start();

$conn = new mysqli(DBSERVER, DBLOGIN, DBPASSWORD, DBNAME);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SESSION['user'] != 'Admin') {
    echo json_encode(['success' => false]);
    exit();
}

$post_id = $_POST['post_id'];

$stmtLikes = $conn->prepare("DELETE FROM likes WHERE post_id = ?");
$stmtLikes->bind_param("i", $post_id);
$stmtLikes->execute();
$stmtLikes->close();

$stmt = $conn->prepare("DELETE FROM posts WHERE id = ?");
$stmt->bind_param("i", $post_id);
$stmt->execute();
$stmt->close();
echo json_encode(['success' => true]);
