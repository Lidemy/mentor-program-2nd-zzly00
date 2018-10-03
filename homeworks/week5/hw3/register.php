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
        <h1 class="title">註冊</h1>
        <form class="content" method="POST" action="register.php">
            <div class="error"></div>
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
            <div class="input--text nickname">
                    <input type="text" class="input" name="nickname">
                    <label class="input__placeholder">暱稱</label>
                    <span class="input__underline"></span>
                    <p class="input__alert"></p>
            </div>
            <div class="button">註冊</div>
            <div class="link"><a href="login.php">已有會員帳號，我要登入</a></div>
        </form>
    </div>
    <script type="text/javascript" src="./js/register.js"></script>
</body>
</html>