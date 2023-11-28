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
$stmt->close();

$row = $result->fetch_assoc();
$id = (int)$row['id'];


if (isset($_POST['post_id']) && isset($_SESSION['user'])) {
    $post_id = $_POST['post_id'];
    $user_id = (int)$row['id'];


    $stmt_check_like = $conn->prepare("SELECT * FROM likes WHERE user_id = ? AND post_id = ?");
    $stmt_check_like->bind_param("ii", $user_id, $post_id);
    $stmt_check_like->execute();
    $result_check_like = $stmt_check_like->get_result();

    if ($result_check_like->num_rows == 0) {
        $stmt_add_like = $conn->prepare("INSERT INTO likes (user_id, post_id) VALUES (?, ?)");
        $stmt_add_like->bind_param("ii", $user_id, $post_id);
        $stmt_add_like->execute();
        $stmt_add_like->close();

        echo json_encode(array('success' => true, 'message' => 'Post liked successfully.'));
    } else {
        $stmt_remove_like = $conn->prepare("DELETE FROM likes WHERE user_id = ? AND post_id = ?");
        $stmt_remove_like->bind_param("ii", $user_id, $post_id);
        $stmt_remove_like->execute();
        $stmt_remove_like->close();

        echo json_encode(array('success' => true, 'message' => 'Post unliked successfully.'));
    }

    $stmt_check_like->close();
} else {
    echo json_encode(array('success' => false, 'message' => 'Invalid request.'));
}

$conn->close();
