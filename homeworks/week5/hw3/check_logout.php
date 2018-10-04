<?php
    if(isset($_POST['u_id'])){
        setcookie('u_id', "", time()-3600*24);
        echo 'success';
    }