<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
require("settings.php");

session_start();

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

if ($username === $row["username"] && password_verify($password, $row['password'])) {
    $_SESSION['user'] = "$username";
    echo json_encode(['success' => true, 'username' => $row['username'], 'role' => $row['role']]);
} else {
    echo json_encode(['success' => false]);
}
