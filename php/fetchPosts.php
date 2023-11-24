<?php
    require 'settings.php';

    session_start();

    $conn = new mysqli(DBSERVER, DBLOGIN, DBPASSWORD, DBNAME);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $stmt = $conn->prepare("SELECT posts.id, posts.content, users.username FROM posts INNER JOIN users ON posts.user_id=users.id;");
    $stmt->execute();
    $result = $stmt->get_result();

    $row = $result->fetch_assoc();

    if ($result->num_rows >= 0) {
        $posts = array();
        do {
            $posts[] = $row;
        } while ($row = $result->fetch_assoc());
    }

    $stmt->close();

    echo json_encode($posts);

?>