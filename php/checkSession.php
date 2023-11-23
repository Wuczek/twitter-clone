<?php
    include 'settings.php';

    session_start();
    if(isset($_SESSION['user'])) {
        $sessionInfo = array('user' => $_SESSION['user']);
        echo json_encode($sessionInfo);
    }
    
?>