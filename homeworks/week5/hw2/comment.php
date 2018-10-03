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
        <h1 class="title">留言板</h1>
        <div class="comment-list">
            <form class="comment create" action="/week5/hw2/create_comment.php" method="POST">
                <div class="comment__user" data-comment-userid="1">
                    <div class="avatar"><img src="https://image.flaticon.com/icons/svg/188/188987.svg" alt="avatar"></div>
                    <div class="user__info">
                        <input name="nickname" type="text" class="nickname input" placeholder="暱稱">
                    </div>
                </div>
                <input type="hidden" name="parent_id" value="0">
                <textarea name="content" class="comment__textarea" placeholder="留言內容"></textarea>
                <input type="submit" class="button createbutton" value="留言">
            </form>
<?php
    require_once('conn.php');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = 'SELECT * FROM comments WHERE parent_id = 0';
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
        SELECT c_id, comments.u_id, avatar, nickname, content, comments.create_time FROM comments
        LEFT JOIN users ON comments.u_id = users.u_id
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
                <form class="sub-create" action="/week5/hw2/create_comment.php" method="POST">
                    <input name="nickname" type="text" class="nickname input" placeholder="暱稱">
                    <div class="sub-create__textarea">
                        <input type="hidden" name="parent_id" value="<? echo $row['c_id'] ?>">
                        <textarea name="content" class="sub__textarea" placeholder="留言內容"></textarea>
                        <input type="submit" class="button createbutton" value="留言">
                    </div>
                </form>
<?php 
        $subSql = '
            SELECT c_id, comments.u_id, avatar, nickname, content, comments.create_time FROM comments
            LEFT JOIN users ON comments.u_id = users.u_id
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
        if($page-3<$i && $i<$page+3){
?>
            <a href=?page=<?php echo $i ?> class="page"><?php echo $i ?></a>
<?php
        }
    } 
?>
            <a href=?page=2 class="page next">&#62;</a>
        </div>
    </div>
    <script type="text/javascript" src="comment.js"></script>
</body>
</html>