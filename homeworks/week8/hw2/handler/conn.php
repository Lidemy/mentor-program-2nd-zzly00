<?php
    $servername = '';
    $username = '';
    $password = '';
    $dbname = '';

    $conn = new mysqli($servername, $username, $password, $dbname);
    mysqli_query($conn, 'SET NAMES UTF8');
    $conn->query("SET time_zone = '+08:00'");