<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include "../config/database.php";

$stmt = $pdo->prepare("SELECT id, name, email FROM users");
$stmt->execute();
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode([
    "status" => true,
    "users" => $data
]);
