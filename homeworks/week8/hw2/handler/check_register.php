<?php
    session_start();
    require_once('conn.php');

    $stmt = $conn->prepare("SELECT * FROM zzly00_users WHERE username = ?;");
    $stmt->bind_param("s", $_POST['username']);
    $stmt->execute();
    $stmt->store_result();
    $row = $stmt->num_rows;

    if($row > 0){
        echo '帳號已存在';
        $stmt->close();
    }else{
        $stmt->close();
        $username = $_POST['username'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $nickname = $_POST['nickname'];
        $avatar = 'https://image.flaticon.com/icons/svg/188/188987.svg';
        
        $insertStmt = $conn->prepare("INSERT INTO zzly00_users (username, password, nickname, avatar) VALUES (?, ?, ?, ?)");
        $insertStmt->bind_param("ssss", $username, $password, $nickname, $avatar);
        
        if($insertStmt->execute()){
            $_SESSION['u_id'] = $conn->insert_id;      
            header("Location: ../index.php"); 
        }else{
            echo 'insert error';
        }
        $insertStmt->close();  
    }
    $conn->close();