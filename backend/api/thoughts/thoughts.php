<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

//  create folder to upload images
if(!file_exists("/uploads")) {
    mkdir("/uploads", 0777, true);
}

// read form data

$name = $_POST['name'] ?? '';
$position = $_POST['current_position'] ?? '' ;
$company = $_POST['title'] ?? '' ;
$review = $_POST['review'] ?? '' ;

if(!$name|| !$position || !$company || !$review){
    echo json_encode(["status" => false, "message" => "Missing fields"]);
    exit();
}

// image  upload
$imagename = null;
if(isset($_FILES['image'])){
    $ext = pathinfo($_FILES['image']['name'],PATHINFO_EXTENSION);
    $imagename = time()."-". rand(1000, 9999). ".". $ext;
    move_uploaded_file($_FILES['image']['tmp_name'], "uploads/" . $imagename);
}

// load existing data to see if data is already exist
$file = "./data.json";
$dataArray = [];

if(file_exists($file)){
    $jsonContent = file_get_contents($file);
    $dataArray = json_decode($jsonContent, true);
    if(!is_array($dataArray)) $dataArray = [];
}

// store data in a variable
$record = [
    "id" => uniqid(),
    'name' => $name,
    'position' => $position,
    'company' => $company,
    'review' => $review,
    'image' => $imagename
];

// array submit

$dataArray[] = $record;

// save in json file
file_put_contents($file, json_encode($dataArray, JSON_PRETTY_PRINT));

echo json_encode([
    "status" => true,
    "message" => "data Saved successfully",
    "data" => $record
]);


?>