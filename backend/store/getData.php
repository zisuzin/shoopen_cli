<?php
    include "db.php";

    $options = Array("fieldChar" => ';', "lineChar" => '\r\n', "linesToIgnore" => 1);
    $db->loadData("users", "/home/john/file.csv", $options);