<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Odbierz dane
$data = json_decode(file_get_contents('php://input'), true);

// Przetwórz dane (zmień na wielkie litery)
$inputValue = strtoupper($data['input']);

// Odpowiedz
$responseData = ['processedData' => $inputValue];
echo json_encode($responseData);
?>