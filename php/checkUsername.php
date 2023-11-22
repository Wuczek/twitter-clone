<?php
// Your database connection code here

// Get the nickname from the request
$nickname = $_POST['nickname'];

// Prepare and execute the query
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $nickname);
$stmt->execute();
$result = $stmt->get_result();

// Check if a user with the given username already exists
$exists = $result->num_rows > 0;

// Return the result as JSON
echo json_encode(["exists" => $exists]);

// Close the database connection
$stmt->close();
$conn->close();
?>
