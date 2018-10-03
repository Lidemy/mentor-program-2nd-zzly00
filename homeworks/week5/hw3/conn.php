<?php
    $servername = '166.62.28.131';
    $username = 'student2nd';
    $password = 'mentorstudent123';
    $dbname = 'mentor_program_db';

    $conn = new mysqli($servername, $username, $password, $dbname);
    mysqli_query($conn, 'SET NAMES UTF8');