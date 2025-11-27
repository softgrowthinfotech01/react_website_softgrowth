<?php

$host = "localhost";
$dbname = "your_database";
$username = "root";
$password = "";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    // Enable errors
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Enable prepared statements
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

} catch (PDOException $e) {
    die(json_encode([
        "status" => false,
        "message" => "Database connection failed",
        "error" => $e->getMessage()
    ]));
}
