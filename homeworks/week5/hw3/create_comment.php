<?php
    require_once('conn.php');

    if(!isset($_COOKIE['u_id']) || $_COOKIE['u_id'] == 0){
        header('Location: login.php');
    }
    if(empty($_POST['content'])){
        header('Location: index.php');
    }

    if(isset($_COOKIE['u_id']) && isset($_POST['content']) && !empty($_POST['content'])){
        $u_id = $_COOKIE['u_id'];
        $content = $_POST['content'];
        $parent = $_POST['parent_id'];

        $insertSql = $conn->query('INSERT INTO zzly00_comments (u_id, content, parent_id) VALUES ("' . $u_id . '", "' . $content .'", "' . $parent . '")');
       
        if($insertSql == 'true'){
            header('Location: index.php');
        }else{
            echo 'Error: ' . $sql . '<br>' . $conn->error;
        }
    }