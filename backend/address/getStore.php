<?php
    include "db.php";

    $options = Array("fieldChar" => ',', "lineChar" => '\r\n', "linesToIgnore" => 1, "loadDataLocal" => true);
    $db->loadData("store", "./store.csv", $options);