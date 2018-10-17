<?php
    require_once('conn.php');    
    if(!isset($_COOKIE['uc_id']) || $_COOKIE['uc_id'] == 0){
        header('Location: ../login.php');
    }
    if(empty($_POST['content'])){
        header('Location: ../index.php');
    }

    if(isset($_COOKIE['uc_id']) && isset($_POST['content']) && !empty($_POST['content'])){
        $uc_id = $_COOKIE['uc_id'];
        $content = $_POST['content'];
        $parent = $_POST['parent_id'];

        $stmt = $conn->prepare("SELECT * FROM zzly00_users_certificate WHERE uc_id = ? AND status = 1;");
        $stmt->bind_param('s', $uc_id);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();

        if($result->num_rows > 0){
            $stmt->close();
            $u_id = $row['u_id'];
            $insertStmt = $conn->prepare("INSERT INTO zzly00_comments (u_id, content, parent_id) VALUES (?, ?, ?);");
            $insertStmt->bind_param('isi', $u_id, $content, $parent);
            $content = $_POST['content'];
            $parent = $_POST['parent_id'];

            if($insertStmt->execute() == 'true'){
                echo 'success';     
            }else{
                echo 'Error: ' . '<br>' . $conn->error;
            }
        }else{
            setcookie('uc_id', "", time()-3600*24);
            header('Location: ../logout.php');
        }
        $insertStmt->close();
        $conn->close();
    }
    