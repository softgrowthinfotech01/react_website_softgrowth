<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

$file = __DIR__ . "/data.json";

if (!file_exists($file)) {
    echo json_encode([
        "status" => false,
        "data" => []
    ]);
    exit;
}

$content = file_get_contents($file);
$content = preg_replace('/^\xEF\xBB\xBF/', '', $content); // remove BOM

$data = json_decode($content, true);

echo json_encode([
    "status" => true,
    "data" => $data
]);
exit;
