<?php
    require_once('conn.php');

    $querySql = $conn->query('SELECT * FROM zzly00_users where username = "' . $_POST['username'] . '"');
    
    if($querySql->num_rows > 0){
        echo 'error';
    }else{
        $insertSql = $conn->query('INSERT INTO zzly00_users (username, password, nickname, avatar) VALUES ("' . $_POST['username'] . '", "' . $_POST['password'] .'", "' . $_POST['nickname'] .'", "' . $_POST['avatar'] . '")');
        if($insertSql === true){
            setcookie('u_id', $conn->insert_id, time()+3600*24);
            echo 'success';
        }else{
            echo 'insert error';
        }
    }