<?php
$host = "localhost";
$user = "root";
$pw = "@t8z8Zrm/0e4b8oR";
$dbName = "shoopen_db";

/* MySQL 접속 */
$db = mysqli_connect($host, $user, $pw, $dbName);

/* DB 연결 확인 */
if ($db) {
    echo "DB 접속 성공!";
}