<?php 
    require_once('conn.php');

        $querySql = $conn->query('SELECT * FROM zzly00_users where username = "' . $_POST['username'] . '" and password = "' . $_POST['password'] . '"');
        $row = $querySql->fetch_assoc();

        if($querySql->num_rows > 0){
            setcookie('u_id', $row['u_id'], time()+3600*24);
            echo 'success';
        }else {
            echo 'error';
        }