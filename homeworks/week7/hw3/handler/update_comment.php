<?php
    require_once('conn.php');
    // 編輯
    if(isset($_POST['c_id']) && isset($_POST['content'])){
        $stmt = $conn->prepare("SELECT * FROM zzly00_comments C 
            LEFT JOIN zzly00_users_certificate UC ON C.u_id = UC.u_id
            WHERE C.c_id = ? AND UC.uc_id = ? AND UC.status = ?;");
        $c_id = $_POST['c_id'];
        $uc_id = $_COOKIE['uc_id'];
        $status = 1;
        $stmt->bind_param("isi", $c_id, $uc_id, $status);
        $stmt->execute();
        $stmt->store_result();
        $row = $stmt->num_rows;

        if($row > 0){
            $content = htmlspecialchars($_POST['content'], ENT_QUOTES, 'utf-8');
            $update_time = date("Y-m-d H:i");
            $updateStmt = $conn->prepare("UPDATE zzly00_comments SET content = ?, update_time = ? WHERE c_id = ?;");
            $updateStmt->bind_param("ssi", $content, $update_time, $c_id);
            $updateStmt->execute();
            echo 'success';
        }
    }

    // 刪除
    if(isset($_POST['c_id']) && !isset($_POST['content'])){
        $stmt = $conn->prepare("SELECT * FROM zzly00_comments C 
            LEFT JOIN zzly00_users_certificate UC ON C.u_id = UC.u_id
            WHERE C.c_id = ? AND UC.uc_id = ? AND UC.status = ?;");
        $c_id = $_POST['c_id'];
        $uc_id = $_COOKIE['uc_id'];
        $status = 1;
        $stmt->bind_param("isi", $c_id, $uc_id, $status);
        $stmt->execute();
        $stmt->store_result();
        $row = $stmt->num_rows;

        if($row > 0){
            $update_time = date("Y-m-d H:i");
            $updateStmt = $conn->prepare("UPDATE zzly00_comments SET status = 0, update_time = ? WHERE c_id = ?;");
            $updateStmt->bind_param("si", $update_time, $c_id);
            $updateStmt->execute();
            echo 'success';
        }
    }
    $stmt->close();