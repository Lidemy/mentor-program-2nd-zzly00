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
        $content = htmlspecialchars($_POST['content'], ENT_QUOTES, 'utf-8');
        $parent = $_POST['parent_id'];

        $querySql = $conn->query("SELECT * FROM zzly00_users_certificate WHERE uc_id = '$uc_id' AND status = 1;");
        $row = $querySql->fetch_assoc();

        if($querySql->num_rows > 0){
            $u_id = $row['u_id'];
            $insertSql = $conn->query("INSERT INTO zzly00_comments (u_id, content, parent_id) VALUES ('$u_id', '$content', '$parent');");       
            if($insertSql == 'true'){
                header('Location: ../index.php');
            }else{
                echo 'Error: ' . $sql . '<br>' . $conn->error;
            }
        }else{
            setcookie('uc_id', "", time()-3600*24);
            header('Location: ../logout.php');
        }
    }