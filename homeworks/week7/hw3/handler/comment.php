<?php
    require_once('conn.php');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // 查詢
    $sql = '
        SELECT c1.c_id AS c_id, c1.u_id AS u_id, uc1.uc_id AS uc_id, c1.content AS content
        , c1.create_time AS create_time, u1.avatar AS avatar, u1.nickname AS nickname
        , c2.c_id AS s_c_id, c2.u_id AS s_u_id, uc2.uc_id AS s_uc_id, c2.content AS s_content
        , c2.create_time AS s_create_time, u2.avatar AS s_avatar, u2.nickname AS s_nickname
        FROM zzly00_comments c1
        LEFT JOIN zzly00_users u1 ON c1.u_id = u1.u_id
        LEFT JOIN (SELECT * FROM zzly00_comments WHERE status = 1) c2 ON c1.c_id = c2.parent_id
        LEFT JOIN (SELECT * FROM zzly00_users_certificate WHERE status = 1) uc1 ON c1.u_id = uc1.u_id
        LEFT JOIN zzly00_users u2 ON c2.u_id = u2.u_id
        LEFT JOIN (SELECT * FROM zzly00_users_certificate WHERE status = 1) uc2 ON c2.u_id = uc2.u_id
        WHERE c1.parent_id = 0 AND c1.status = 1
        ORDER BY c1.create_time DESC, c2.create_time DESC
    ';
    $result = $conn->query($sql);

    $comment_list = array();

    $comment_id = 0;
   
    $comment_index = -1;
    $subcomment_index = -1;

    while($row = $result->fetch_assoc()){
        if($comment_id != $row['c_id']){
            $comment_index++;
            $comment_id = $row['c_id'];

            if(isset($_COOKIE['uc_id'])){
                $comment_self_status = $row['uc_id'] == $_COOKIE['uc_id'] ? true : false;
            }else{
                $comment_self_status = false;
            }

            $comment_list[$comment_index]['comment_id'] = $row['c_id'];
            $comment_list[$comment_index]['comment_avatar'] = $row['avatar'];
            $comment_list[$comment_index]['comment_nickname'] = htmlspecialchars($row['nickname'], ENT_QUOTES, 'utf-8');
            $comment_list[$comment_index]['comment_content'] = htmlspecialchars($row['content'], ENT_QUOTES, 'utf-8');
            $comment_list[$comment_index]['comment_create_time'] = $row['create_time'];
            $comment_list[$comment_index]['comment_self_status'] = $comment_self_status;
            $comment_list[$comment_index]['subcomment'] = array();
        }
        $subcomment_id = 0;
        if($subcomment_id != $row['s_c_id']){
            $subcomment_index = -1;
            $subcomment_index++;
            $subcomment_id = $row['s_c_id'];

            if(isset($_COOKIE['uc_id'])){
                $self_status = $row['s_uc_id'] == $_COOKIE['uc_id'] ? true : false;
            }else{
                $self_status = false;
            }
            $comment_sub = $row['u_id'] === $row['s_u_id'] ? true : false;

            $subcomment = array(
                            'subcomment_id' => $row['s_c_id'],
                            'subcomment_avatar' => $row['s_avatar'],
                            'subcomment_nickname' => htmlspecialchars($row['s_nickname'], ENT_QUOTES, 'utf-8'),
                            'subcomment_content' => htmlspecialchars($row['s_content'], ENT_QUOTES, 'utf-8'),
                            'subcomment_create_time' => $row['s_create_time'],
                            'subcomment_self_status' => $self_status,
                            'subcomment_comment_sub' => $comment_sub
                        );
            
            array_push($comment_list[$comment_index]['subcomment'], $subcomment);
        }
    }
   
    echo json_encode($comment_list);
    $conn->close();
