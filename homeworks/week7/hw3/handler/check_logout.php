<?php
    if(isset($_COOKIE['uc_id'])){
        setcookie('uc_id', "", time()-3600*24, '/');
        header("Location: ../logout.php");
    }
    exit;