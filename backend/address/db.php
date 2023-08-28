<?php
    $host = "localhost";
    $user = "root";
    $pw = "c_MfVWJG/R.ZQT-J";
    $dbName = "shoopen_db";

    /* MySQL 접속 */
    $conn = new mysqli($host, $user, $pw, $dbName);
    
    /* DB 연결 확인 */
    if($conn){ echo "접속 성공"."<br>"; }
    else{ die( '데이터베이스 접속 실패: ' . mysqli_error($conn) ); }
    
    mysqli_close($conn);
?>