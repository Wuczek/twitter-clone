<?php
    require("settings.php");

    session_start();

    $username = $_POST['username'];
    $hashedPassword = $_POST['hashedPassword'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $nickname);
    $stmt->execute();
    $result = $stmt->get_result();


    if ($username === $result["username"] && $hashedPassword === $result["password"]) {
        $_SESSION['user'] = $username;
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Nieprawidłowe dane logowania']);
    }
?>