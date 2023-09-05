<?php
$host = "localhost";
$user = "root";
$pw = "@t8z8Zrm/0e4b8oR";
$dbName = "shoopen_db";

/* MySQL 접속 */
$con = new mysqli($host, $user, $pw, $dbName);

/* 테이블 저장 데이터 모두 조회 */
$sql = "SELECT * FROM stores";

/* DB 쿼리 수행 */
$ret = mysqli_query($con, $sql);

/* DB 연결 확인 */
if ($ret) {
    echo "테이블 조회 성공!<br>";
    echo "튜플 수:", mysqli_num_rows($ret);

    /* 쿼리 결과 처리 및 객체에 담기 */
    $data = array();
    while ($row = mysqli_fetch_assoc($ret)) {
        $item = array(
            "idx" => $row['idx'],
            "name" => $row['name'],
            "sido" => $row['sido'],
            "gugun" => $row['gugun'],
            "det" => $row['det'],
            "lat" => $row['lat'],
            "lng" => $row['lng'],
            "tel" => $row['tel']
        );

        $data[] = $item;
    }

    // JSON 형식으로 출력
    echo json_encode($data);
} else {
    echo "테이블 조회 실패!!";
    echo "오류 원인 : ", mysqli_error();
    exit();
}
?>
