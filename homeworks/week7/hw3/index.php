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
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
            </ul>
        </div>
    </nav>
    <div class="container">
        <div class="comment__edit parent" data-num="0">
        </div>
        <div class="comment__list">
        </div>
        <div class="comment__page">
        </div>
    </div>
    <footer id="footer">
        <div class="container">
            <div class="row">
                <div class="col-10">
                    <p>Mentor-Program Week7 Homework3. Made by <a href="https://github.com/Lidemy/mentor-program-2nd-zzly00">Lin <i class="fab fa-github"></i></a>.</p>
                    <p>Based on <a href="https://getbootstrap.com" rel="nofollow" target="_blank">Bootstrap</a> & <a href="https://bootswatch.com/superhero/" rel="nofollow" target="_blank">Bootswatch - Thomas Park</a>. Icons from <a href="https://www.flaticon.com/" rel="nofollow" target="_blank">Flaticon</a> & <a href="http://fontawesome.io/" rel="nofollow" target="_blank">Font Awesome</a>. Web fonts from <a href="https://fonts.google.com/" rel="nofollow" target="_blank">Google</a>.</p>
                </div>
                <div class="col-2">
                    <a href="#top" class="float-right"><i class="far fa-arrow-alt-circle-up"></i></a>
                </div>
            </div>
        </div>
    </footer>
    
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script type="text/javascript" src="./js/comment.js"></script>
</body>
</html>