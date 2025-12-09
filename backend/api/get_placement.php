<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$file = "../placement.json";

if (!file_exists($file)) {
    echo json_encode([]);
    exit;
}

$jsonContent = file_get_contents($file);
$data = json_decode($jsonContent, true);

echo json_encode($data);
?>
