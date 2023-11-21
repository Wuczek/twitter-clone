<?php
session_start();

// Sprawdź, czy sesja istnieje
if (isset($_SESSION['user'])) {
    echo "HURA!";
    echo "Zalogowany użytkownik: " . $_SESSION['user'];
} else {
    echo "Brak sesji";
}
?>