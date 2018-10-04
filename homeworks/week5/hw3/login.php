<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>week5 hw2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
    <div class="container--md">
        <h1 class="title">登入</h1>
        <form class="content" method="POST" action="login.php">
            <div class="input--text username">
                <input type="text" class="input" name="username">
                <label class="input__placeholder">帳號</label>
                <span class="input__underline"></span>
                <p class="input__alert"></p>
            </div>
            <div class="input--text passward">
                <input type="password" class="input" name="password">
                <label class="input__placeholder">密碼</label>
                <span class="input__underline"></span>
                <p class="input__alert"></p>
            </div>
            <div class="button">登入</div>
            <div class="link"><a href="register.php">還不是會員？我要註冊</a></div>
        </form>
    </div>
    <script type="text/javascript" src="./js/login.js"></script>
</body>
</html>