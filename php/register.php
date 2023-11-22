<?php
    require "settings.php";

    $conn = new mysqli(DBSERVER, DBLOGIN, DBPASSWORD, DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

    $username = $_POST['username'];  // Change this line
    $hashedPassword = $_POST['hashedPassword'];  // Change this line

    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $hashedPassword);
    $stmt->execute();
    $stmt->close();

?>