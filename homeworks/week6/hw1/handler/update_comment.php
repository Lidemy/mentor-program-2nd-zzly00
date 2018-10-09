<?php
    require_once('conn.php');
    // 編輯
    if(isset($_POST['c_id']) && isset($_POST['content'])){
        $c_id = $_POST['c_id'];
        $stmt = $conn->prepare("SELECT * FROM zzly00_comments WHERE c_id = ?;");
        $stmt->bind_param("s", $c_id);
        $stmt->execute();
        $stmt->store_result();
        $row = $stmt->num_rows;

        if($row > 0){
            $content = htmlspecialchars($_POST['content'], ENT_QUOTES, 'utf-8');
            $update_time = date("Y-m-d H:i");
            $updateSql = $conn->query("UPDATE zzly00_comments SET content = '$content', update_time = '$update_time' WHERE c_id = $c_id;");
            echo 'success';
        }
    }

    // 刪除
    if(isset($_POST['c_id']) && !isset($_POST['content'])){
        $c_id = $_POST['c_id'];
        $stmt = $conn->prepare("SELECT * FROM zzly00_comments WHERE c_id = ?;");
        $stmt->bind_param("s", $c_id);
        $stmt->execute();
        $stmt->store_result();
        $row = $stmt->num_rows;

        if($row > 0){
            $update_time = date("Y-m-d H:i");
            $updateSql = $conn->query("UPDATE zzly00_comments SET status = 0, update_time = '$update_time' WHERE c_id = $c_id;");
            echo 'success';
        }
    }
    $stmt->close();