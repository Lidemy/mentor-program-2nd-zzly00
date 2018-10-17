<?php 
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
            $uc_id = uniqid();            
            $updateStmt = $conn->prepare("UPDATE zzly00_users_certificate SET status = 0 WHERE u_id = ?;");
            $updateStmt->bind_param("i", $u_id);
            $updateStmt->execute();

            $insertStmt = $conn->prepare("INSERT INTO zzly00_users_certificate (uc_id, u_id) VALUES (?, ?);");
            $insertStmt->bind_param("si", $uc_id, $u_id);
            $insertStmt->execute();

            setcookie('uc_id', $uc_id, time()+3600*24, '/');
            echo 'success';
        }else {
            echo 'error';
        }
        $stmt->close();