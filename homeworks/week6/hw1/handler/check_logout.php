<?php
    if(isset($_POST['uc_id'])){
        setcookie('uc_id', "", time()-3600*24, '/');
        echo 'success';
    }