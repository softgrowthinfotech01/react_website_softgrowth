<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");

// JSON file path
$file = "../placement.json";

// Check file exists
if (!file_exists($file)) {
    echo json_encode([
        "status" => false,
        "message" => "Data file not found"
    ]);
    exit;
}

// Get ID (supports GET or POST)
$id = $_GET['id'] ?? $_POST['id'] ?? null;

if (!$id) {
    echo json_encode([
        "status" => false,
        "message" => "ID is required"
    ]);
    exit;
}

// Read JSON data
$jsonData = file_get_contents($file);
$data = json_decode($jsonData, true);

// Validate JSON
if (!is_array($data)) {
    echo json_encode([
        "status" => false,
        "message" => "Invalid JSON data"
    ]);
    exit;
}

$updatedData = [];
$recordFound = false;

foreach ($data as $item) {

    // Match record
    if ($item['id'] == $id) {
        $recordFound = true;

        // Delete image if exists & not empty
        if (!empty($item['image'])) {
            $imagePath = "../p_uploads/" . $item['image'];
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }

        continue; // Skip this record (delete)
    }

    $updatedData[] = $item;
}

// If ID not found
if (!$recordFound) {
    echo json_encode([
        "status" => false,
        "message" => "Record not found"
    ]);
    exit;
}

// Save updated JSON
file_put_contents(
    $file,
    json_encode($updatedData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
);

// Success response
echo json_encode([
    "status" => true,
    "message" => "Record deleted successfully",
    "data" => $updatedData
]);

?>