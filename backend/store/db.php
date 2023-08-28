<?php
    $host = "localhost";
    $user = "root";
    $pw = "c_MfVWJG/R.ZQT-J";
    $dbName = "shoopen_db";

    /* MySQL 접속 */
    $conn = new mysqli($host, $user, $pw, $dbName);
    
    /* DB 연결 확인 */
    if ( $conn ) {
        echo "MySQL 접속 성공!!";
    }
    else {
        echo "MySQL 접속 실패!!";
        echo "오류 원인 : " , mysqli_connect_error();
        exit();
    }
    while($row = mysqli_fetch_array($conn)) {
    echo $row['idx'], $row['name'], $row['sido'], $row['gugun'], $row['det'], $row['lat'], $row['lng'], $row['tel']; 
    } 
    mysqli_close($conn);
?>