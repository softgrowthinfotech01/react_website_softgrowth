<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$file = "../data.json";

if (!file_exists($file)) {
    echo json_encode(["error" => "File not found"]);
    exit;
}

$data = json_decode(file_get_contents($file), true);
$id = $_GET["id"];

foreach ($data as $item) {
    if ($item["id"] == $id) {
        echo json_encode($item);
        exit;
    }
}

echo json_encode(["error" => "Record not found"]);
?>
