<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Create uploads folder if not exists
if (!file_exists("../p_uploads")) {
    mkdir("../p_uploads", 0777, true);
}

// Read JSON or normal form data
$e_name = $_POST['e_name'] ?? '';
$c_name = $_POST['c_name'] ?? '';

if (!$e_name || !$c_name) {
    echo json_encode(["status" => false, "message" => "Missing fields"]);
    exit;
}

// Handle Image Upload
$imageName = null;
if (isset($_FILES["image"])) {
    $ext = pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION);
    $imageName = time() . "_" . rand(1000, 9999) . "." . $ext;
    move_uploaded_file($_FILES["image"]["tmp_name"], "../p_uploads/" . $imageName);
}

// Load existing JSON data
$file = "../placement.json";
$dataArray = [];

if (file_exists($file)) {
    $jsonContent = file_get_contents($file);
    $dataArray = json_decode($jsonContent, true);
    if (!is_array($dataArray)) $dataArray = [];
}

// Prepare new record
$newRecord = [
    "id" => uniqid(),
    "e_name" => $e_name,
    "c_name" => $c_name,
    "image" => $imageName
];

// Add to array
$dataArray[] = $newRecord;

// Save JSON
file_put_contents($file, json_encode($dataArray, JSON_PRETTY_PRINT));

echo json_encode([
    "status" => true,
    "message" => "Data saved successfully",
    "data" => $newRecord
]);
?>
