<?php

class Post{
    public $poster_id;
    public $content;

    public function __construct($poster_id, $content) {
        $this->poster_id = $poster_id;
        $this->content = $content;
    }

    public function getPost() {
        $responseData = ['processedData' => $this->poster_id . " napisał: " . $this->content];
        echo json_encode($responseData);
    }

    public function addPost($conn) {
        $stmt = $conn->prepare("INSERT INTO posts (id, content) VALUES (?, ?)");
        $stmt->bind_param("is", $this->poster_id, $this->content);
        $stmt->execute();   
        $stmt->close();
    }
}

?>