<?php
    require 'settings.php';

    $conn = new mysqli(DBSERVER, DBLOGIN, DBPASSWORD, DBNAME);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $stmt->bind_param("s", $_SESSION['user']);
    $stmt->execute();

    $row = $result->fetch_assoc();

    $post = $_POST['post'];

    $stmt = $conn->prepare("INSERT INTO post (content, owner_id) VALUES (?, ?)");
    $stmt->bind_param("si", $post, $row);
    $stmt->execute();
    $stmt->close();
?>