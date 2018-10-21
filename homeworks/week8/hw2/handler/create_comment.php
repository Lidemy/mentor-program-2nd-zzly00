<?php
    session_start();
    require_once('conn.php');

    if(!isset($_SESSION['u_id'])){
        header('Location: ../login.php');
    }
    if(empty($_POST['content'])){
        header('Location: ../index.php');
    }

    if(isset($_SESSION['u_id']) && isset($_POST['content']) && !empty($_POST['content'])){
        $u_id = $_SESSION['u_id'];
        $content = htmlspecialchars($_POST['content'], ENT_QUOTES, 'utf-8');
        $parent = $_POST['parent_id'];

        $insertStmt = $conn->prepare("INSERT INTO zzly00_comments (u_id, content, parent_id) VALUES (?, ?, ?);");   
        $insertStmt->bind_param("isi", $u_id, $content, $parent);
        
        if($insertStmt->execute()){
            header('Location: ../index.php');
        }else{
            echo 'Error: ' . $sql . '<br>' . $conn->error;
        }
    }else{
        header('Location: check_logout.php');
    }