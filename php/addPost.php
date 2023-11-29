<?php
require 'settings.php';

session_start();

$conn = new mysqli(DBSERVER, DBLOGIN, DBPASSWORD, DBNAME);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
$stmt->bind_param("s", $_SESSION['user']);
$stmt->execute();
$result = $stmt->get_result();

$row = $result->fetch_assoc();
$id = (int)$row['id'];

$stmt = $conn->prepare("SELECT id FROM categories WHERE category = ?");
$stmt->bind_param("s", $_POST['category']);
$stmt->execute();
$result = $stmt->get_result();

$row = $result->fetch_assoc();
$category_id = (int)$row['id'];

$post = $_POST['post'];
$title = $_POST['title'];

$stmt = $conn->prepare("INSERT INTO posts (content, user_id, category_id, title) VALUES (?, ?, ?, ?)");
$stmt->bind_param("siis", $post, $id, $category_id, $title);
$stmt->execute();
$stmt->close();

echo json_encode(['success' => true]);
