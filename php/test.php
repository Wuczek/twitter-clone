<?php
require 'settings.php';

session_start();

// Sprawdź, czy sesja istnieje
if (isset($_SESSION['user'])) {
    echo "HURA!";
    echo "Zalogowany użytkownik: " . $_SESSION['user'];
} else {
    echo "Brak sesji";
}

$conn = new mysqli(DBSERVER, DBLOGIN, DBPASSWORD, DBNAME);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $stmt->bind_param("s", $_SESSION['user']);
    $stmt->execute();
    $result = $stmt->get_result();

    $row = $result->fetch_assoc();

    echo $row['id'];
?>