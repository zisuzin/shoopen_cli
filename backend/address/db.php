<?php
function db_get_pdo()
{
    $host = 'localhost';
    $port = '3306';
    $dbname = 'shoopen_db';
    $charset = 'utf8';
    $username = 'php3min';
    $db_pw = "1234";
    $dsn = "mysql:host=$host;port=$port;dbname=$dbname;charset=$charset";
    $pdo = new PDO($dsn, $username, $db_pw);
    return $pdo;
}