<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Create uploads folder if not exists
if (!file_exists("../uploads")) {
    mkdir("../uploads", 0777, true);
}

// Read JSON or normal form data
$title = $_POST['title'] ?? '';
$description = $_POST['description'] ?? '';

if (!$title || !$description) {
    echo json_encode(["status" => false, "message" => "Missing fields"]);
    exit;
}

// Handle Image Upload
$imageName = null;
if (isset($_FILES["image"])) {
    $ext = pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION);
    $imageName = time() . "_" . rand(1000, 9999) . "." . $ext;
    move_uploaded_file($_FILES["image"]["tmp_name"], "../uploads/" . $imageName);
}

// Load existing JSON data
$file = "../data.json";
$dataArray = [];

if (file_exists($file)) {
    $jsonContent = file_get_contents($file);
    $dataArray = json_decode($jsonContent, true);
    if (!is_array($dataArray)) $dataArray = [];
}

// Prepare new record
$newRecord = [
    "id" => uniqid(),
    "title" => $title,
    "description" => $description,
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
