<?php 
    session_start();
    require_once('conn.php');
    $username = $_POST['username'];

    $stmt = $conn->prepare("SELECT u_id, password FROM zzly00_users where username = ?;");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();
    $row = $stmt->num_rows;
    $stmt->bind_result($u_id, $password);
    $stmt->fetch(); 
                    
    $passwordCheck = password_verify($_POST['password'], $password);

    if($row > 0 && $passwordCheck === true){     
        $_SESSION['u_id'] = $u_id;      
        header("Location: ../index.php"); 
    }else {
        echo 'error';
    }
    $stmt->close();
    $conn->close();