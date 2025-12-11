<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$file = "../data.json";  // your JSON database

// If file doesn't exist
if (!file_exists($file)) {
    echo json_encode(["status" => false, "message" => "Data file not found"]);
    exit;
}

// Read id from GET
if (!isset($_GET['id'])) {
    echo json_encode(["status" => false, "message" => "ID is required"]);
    exit;
}

$id = $_GET['id'];

// Read current JSON data
$jsonData = file_get_contents($file);
$data = json_decode($jsonData, true);

// If JSON is invalid
if (!is_array($data)) {
    echo json_encode(["status" => false, "message" => "Invalid JSON"]);
    exit;
}

// Filter out the deleted record
$updatedData = array_filter($data, function ($item) use ($id) {
    return $item['id'] != $id;
});

// Re-index array (optional but recommended)
$updatedData = array_values($updatedData);

// Save updated JSON
file_put_contents($file, json_encode($updatedData, JSON_PRETTY_PRINT));

// Response back to React
echo json_encode([
    "status" => true,
    "message" => "Record deleted successfully",
    "data" => $updatedData
]);
?>
