<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

session_start();

// Pobierz dane przesłane z React
$postData = json_decode(file_get_contents("php://input"));

$username = $postData->username;
$password = $postData->password;

// Tutaj dodaj kod do sprawdzenia danych logowania w bazie danych
// Przykładowe sprawdzenie (uwzględnij bezpieczeństwo!):
if ($username === 'example' && $password === 'password') {
    $_SESSION['user'] = "pozdro";
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Nieprawidłowe dane logowania']);
}
?>