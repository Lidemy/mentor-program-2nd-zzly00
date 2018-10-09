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
        $stmt->close();
        $username = $_POST['username'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $nickname = $_POST['nickname'];
        $avatar = $_POST['avatar'];

        $insertSql = $conn->query("INSERT INTO zzly00_users (username, password, nickname, avatar) VALUES ('$username', '$password', '$nickname', '$avatar')");
        if($insertSql === true){
            $uc_id = uniqid();
            $u_id = $conn->insert_id;
            $insertSql = $conn->query("INSERT INTO zzly00_users_certificate (uc_id, u_id) VALUES ('$uc_id', $u_id);");
            
            setcookie('uc_id', $uc_id, time()+3600*24, '/');
            echo 'success';
        }else{
            echo 'insert error';
        }
    }