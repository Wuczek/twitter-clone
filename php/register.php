<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    require "settings.php";

    $conn = new mysqli(DBSERVER, DBLOGIN, DBPASSWORD, DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

    // Odbierz dane
    $data = json_decode(file_get_contents('php://input'), true);

    $username = $data->username;
    $password = $data->hashedPassword;

    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $stmt->close();

?>