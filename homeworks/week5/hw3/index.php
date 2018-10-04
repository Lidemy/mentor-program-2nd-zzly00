<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>week5 hw2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="title">留言板</h1>
            <div class="button logout">登出</div>
        </div>
        <div class="comment-list">   
<?php
    require_once('conn.php');
    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    if(!isset($_COOKIE['u_id']) || $_COOKIE['u_id'] == 0){
?>
            <div class="comment comment-login">
                <a href="login.php" class="button--lg">登入留言</a>
            </div>
<?php
    }else{
        $userSql = 'SELECT * FROM zzly00_users WHERE u_id =' . $_COOKIE['u_id'];
        $userResult = $conn->query($userSql);
        $userRow=$userResult->fetch_assoc();   
?>
            <form class="comment create" action="create_comment.php" method="POST">
                <div class="comment__user">
                    <div class="avatar"><img src="<?php echo $userRow['avatar']?>" alt="avatar"></div>
                    <div class="user__info">
                        <div class="nickname"><?php echo $userRow['nickname']?></div>
                    </div>
                </div>
                <input type="hidden" name="parent_id" value="0">
                <textarea name="content" class="comment__textarea" placeholder="留言內容"></textarea>
                <input type="submit" class="button createbutton" value="留言">
            </form>
<?php
    }

    $sql = 'SELECT * FROM zzly00_comments WHERE parent_id = 0';
    $result = $conn->query($sql);
    $rowAmount = $result->num_rows; //總筆數
    $per = 10; //每頁幾筆
    $pages = ceil($rowAmount / $per); //總頁數

    if(!isset($_GET["page"])){
        $page=1;
    }else{
        $page = intval($_GET["page"]);
    }
    
    $resultPageSql = '
        SELECT c_id, zzly00_comments.u_id, avatar, nickname, content, zzly00_comments.create_time FROM zzly00_comments
        LEFT JOIN zzly00_users ON zzly00_comments.u_id = zzly00_users.u_id
        WHERE parent_id = 0 ORDER BY create_time DESC
        LIMIT ' . ($page-1)*$per . ', ' . $per;
    $resultPage = $conn->query($resultPageSql);

    if($rowAmount>0){
        while($row=$resultPage->fetch_assoc()){
?>
            <div class="comment">
                <div class="comment__user">
                    <div class="avatar"><img src="<?php echo $row['avatar']?>" alt="avatar"></div>
                    <div class="user__info">
                        <div class="nickname"><?php echo $row['nickname']?></div>
                        <div class="time"><?php echo $row['create_time']?></div>
                    </div>
                </div>
                <div class="comment__content"><?php echo $row['content']?></div>
                <div class="sub-list">
<?php
    if(!isset($_COOKIE['u_id']) || $_COOKIE['u_id'] == 0){    
?>
                <div class="sub-create">
                    <div class="link"><a href="login.php" alt="login">登入留言</a></div>
                </div>
<?
    }else{
?>
                <form class="sub-create" action="create_comment.php" method="POST">
                    <div class="sub-create__user-info">
                    <div class="sub-avatar"><img src="<?php echo $userRow['avatar']?>" alt="avatar"></div>
                        <div class="sub-nickname"><?php echo $userRow['nickname']?></div>
                    </div>
                    <div class="sub-create__textarea">
                        <input type="hidden" name="parent_id" value="<? echo $row['c_id'] ?>">
                        <textarea name="content" class="sub__textarea" placeholder="留言內容"></textarea>
                        <input type="submit" class="button createbutton" value="留言">
                    </div>
                </form>
<?php 
    }
        $subSql = '
            SELECT c_id, zzly00_comments.u_id, avatar, nickname, content, zzly00_comments.create_time FROM zzly00_comments
            LEFT JOIN zzly00_users ON zzly00_comments.u_id = zzly00_users.u_id
            WHERE parent_id = ' . $row['c_id'] . '
            ORDER BY create_time DESC
        ';
        $subResult = $conn->query($subSql);
        if($subResult->num_rows>0){
            while($subRow=$subResult->fetch_assoc()){
?>
                    <div class="sub">
                        <div class="sub__user">
                            <div class="sub-avatar"><img src="<?php echo $subRow['avatar']?>" alt="avatar"></div>
                            <div class="sub-user__info">
                                <div class="sub-nickname"><?php echo $subRow['nickname']?></div>
                                <div class="sub-time"><?php echo $subRow['create_time']?></div>   
                            </div>
                        </div>
                        <div class="sub__content"><?php echo $subRow['content']?></div>
                    </div>          
<?php
                }
            }
?>
                </div>
            </div>
<?php
        }
    }
?>
        </div>
        <div class="pages">
            <a href="javascript:void(0)" class="page last page--disable">&#60;</a>
<?php
    for($i=1; $i<=$pages; $i++){
?>
            <a href=?page=<?php echo $i ?> class="page"><?php echo $i ?></a>
<?php
    } 
?>
            <a href=?page=2 class="page next">&#62;</a>
        </div>
    </div>
    <script type="text/javascript" src="./js/comment.js"></script>
    <script type="text/javascript" src="./js/logout.js"></script>
</body>
</html>