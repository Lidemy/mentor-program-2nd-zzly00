<?php
    require_once('conn.php');

    if(empty($_POST['nickname']) || empty($_POST['content'])){
        header('Location: index.php');
    }

    if(isset($_POST['nickname']) && isset($_POST['content'])){
        $nickname = $_POST['nickname'];
        $content = $_POST['content'];
        $parent = $_POST['parent_id'];

        // hw2作業先將nickname存進u_id中，以取得真正的nickname，因此頁面上要輸入u_id
        $insertSql = $conn->query('INSERT INTO comments (u_id, content, parent_id) VALUES ("' . $_POST['nickname'] . '", "' . $_POST['content'] .'", "' . $_POST['parent_id'] . '")');
       
        if($insertSql == 'true'){
            header('Location: comment.php');
        }else{
            echo 'Error: ' . $sql . '<br>' . $conn->error;
        }
    }
?>