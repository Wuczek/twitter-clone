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

    $post = $_POST['post'];

    $stmt = $conn->prepare("INSERT INTO posts (content, owner_id) VALUES (?, ?)");
    $stmt->bind_param("si", $post, $id);
    $stmt->execute();
    $stmt->close();

    echo json_encode(['success' => true]);
?>