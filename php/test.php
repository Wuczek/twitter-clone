<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

session_start();

// Sprawdź, czy sesja istnieje
if (isset($_SESSION['user'])) {
    echo "HURA!";
    echo "Zalogowany użytkownik: " . $_SESSION['user'];
} else {
    echo "Brak sesji";
}
?>