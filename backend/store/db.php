<?php
    $host = "localhost";
    $user = "root";
    $pw = "c_MfVWJG/R.ZQT-J";
    $dbName = "shoopen_db";

    /* MySQL 접속 */
    $conn = new mysqli($host, $user, $pw, $dbName);
    
    /* DB 연결 확인 */
    if (mysqli_error($conn)) {
        echo "MySQL 접속 실패!!", "<br>";
        echo "오류 원인:", mysqli_error();
        exit();
    }
    echo "MySQL 접속 성공!!";
    
    mysqli_close($conn);
?>