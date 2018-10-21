<?php
    $servername = '';
    $username = '';
    $password = '';
    $dbname = '';

    $conn = new mysqli($servername, $username, $password, $dbname);
    mysqli_query($conn, 'SET NAMES UTF8');
    $conn->query('SET time_zone = "+08:00"');

    $conn->autocommit(FALSE);
    $conn->begin_transaction();
    $stmt = $conn->prepare('SELECT amount FROM zzly00_products WHERE p_id = 1 for update');
    $stmt->execute();
    $result = $stmt->get_result();
    if($result->num_rows > 0){
        $row = $result->fetch_assoc();
        echo 'amount: '.$row['amount'];

        if($row['amount'] > 0){
            $stmt = $conn->prepare('UPDATE zzly00_products SET amount = amount - 1 WHERE p_id = 1;');
            if($stmt->execute()){
                echo '購買成功';
            }
        }
    }
$conn->commit();
$conn->close();