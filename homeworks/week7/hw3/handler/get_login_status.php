<?php
    require_once('conn.php');
    $stmt = $conn->prepare("SELECT nickname, avatar FROM zzly00_users_certificate uc LEFT JOIN zzly00_users u ON uc.u_id = u.u_id WHERE uc_id=? AND uc.status=1;");
    $stmt->bind_param("s", $_COOKIE['uc_id']);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if($result->num_rows > 0){
        $data[] = array(
            'nickname' => $row['nickname'],
            'avatar' => $row['avatar']
        );
        echo json_encode($data);
        $stmt->close();
    }else{
        echo 'error';
    }