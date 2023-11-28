<?php
require "settings.php";

$conn = new mysqli(DBSERVER, DBLOGIN, DBPASSWORD, DBNAME);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

$row = $result->fetch_assoc();

if ($row > 0) {
    echo json_encode(['success' => false]);
} else {
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $hashedPassword);
    $stmt->execute();
    $stmt->close();

    echo json_encode(['success' => true]);
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
