<?php
    require 'settings.php';
    session_start();

    $conn = new mysqli(DBSERVER, DBLOGIN, DBPASSWORD, DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $_SESSION['user']);
    $stmt->execute();
    $result = $stmt->get_result();

    $row = $result->fetch_assoc();

    if(isset($_SESSION['user'])) {
        echo json_encode(['success' => true, 'username' => $_SESSION['user'], 'role' => $row['role']]);
    } else {
        echo json_encode(['success' => false]);
    }


    
?>