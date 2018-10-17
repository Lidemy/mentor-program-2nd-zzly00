<?php
    require_once('conn.php');

    $stmt = $conn->prepare("SELECT * FROM zzly00_users WHERE username = ?;");
    $stmt->bind_param("s", $_POST['username']);
    $stmt->execute();
    $stmt->store_result();
    $row = $stmt->num_rows;
    
    if($row > 0){
        echo 'error';
        $stmt->close();
    }else{  
        $username = $_POST['username'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $nickname = $_POST['nickname'];
        $avatar = $_POST['avatar'];

        $insertStmt = $conn->prepare("INSERT INTO zzly00_users (username, password, nickname, avatar) VALUES (?, ?, ?, ?);");
        $insertStmt->bind_param("ssss", $username, $password, $nickname, $avatar);

        if($insertStmt->execute() === true){
            $uc_id = uniqid();
            $u_id = $conn->insert_id;
            $insertStmt = $conn->prepare("INSERT INTO zzly00_users_certificate (uc_id, u_id) VALUES (?, ?);");
            $insertStmt->bind_param("si", $uc_id, $u_id);
            $insertStmt->execute();

            setcookie('uc_id', $uc_id, time()+3600*24, '/');
            echo 'success';
        }else{
            echo 'insert error';
        }
        $stmt->close();
    }