<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>week7 hw3</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://bootswatch.com/4/superhero/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="index.php">留言板</a>
    </nav>
    <div class="card bg-dark mb-3 container--md" style="max-width: 45rem;">
        <h1 class="card-header">登入</h1>
        <div class="card-body">
            <form>
                <fieldset>
                    <div class="form-group has-danger">
                        <label for="username">帳號</label>
                        <input type="text" class="form-control" name="username" maxlength="20" placeholder="請輸入帳號">
                        <div class="invalid-feedback">必填</div>
                    </div>
                    <div class="form-group has-danger">
                        <label for="password">密碼</label>
                        <input type="password" class="form-control" name="password" maxlength="20" placeholder="請輸入密碼">
                        <div class="invalid-feedback">必填</div>
                    </div>
                    <div class="row justify-content-center">
                        <button type="button" class="btn btn-primary">登入</button>
                    </div>
                </fieldset>
                <div class="row align-items-center flex-column other-link">
                    <a href="register.php">還不是會員？我要註冊</a>
                    <a href="index.php">不登入，看留言版</a>
                </div>
            </form>
        </div>
    </div>
    <footer id="footer">
        <div class="container">
            <div class="row">
                <div class="col-10">
                    <p>Mentor-Program Week7 Homework3. Made by <a href="https://github.com/Lidemy/mentor-program-2nd-zzly00">Lin <i class="fab fa-github"></i></a>.</p>
                    <p>Based on <a href="https://getbootstrap.com" rel="nofollow" target="_blank">Bootstrap</a> & <a href="https://bootswatch.com/superhero/" rel="nofollow" target="_blank">Bootswatch - Thomas Park</a>. Icons from <a href="https://www.flaticon.com/" rel="nofollow" target="_blank">Flaticon</a> & <a href="http://fontawesome.io/" rel="nofollow" target="_blank">Font Awesome</a>. Web fonts from <a href="https://fonts.google.com/" rel="nofollow" target="_blank">Google</a>.</p>
                </div>
            </div>
        </div>
    </footer>
    
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/login.js"></script>
</body>
</html>