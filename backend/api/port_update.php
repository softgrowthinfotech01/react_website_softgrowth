<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$file = "../data.json";
$data = json_decode(file_get_contents($file), true);

$id = $_POST["id"];
$title = $_POST["title"];
$desc = $_POST["description"];

// find item
foreach ($data as $index => $item) {
    if ($item["id"] == $id) {

        // old image
        $oldImage = $item["image"];
        $newImage = $oldImage;

        // if new file uploaded
        if (!empty($_FILES["image"]["name"])) {
            $imgName = time() . "_" . $_FILES["image"]["name"];
            $imgPath = "../uploads/" . $imgName;

            if (move_uploaded_file($_FILES["image"]["tmp_name"], $imgPath)) {

                // delete old
                if ($oldImage && file_exists("../uploads/" . $oldImage)) {
                    unlink("../uploads/" . $oldImage);
                }

                $newImage = $imgName;
            }
        }

        // update values
        $data[$index]["title"] = $title;
        $data[$index]["description"] = $desc;
        $data[$index]["image"] = $newImage;

        // Save JSON
        file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

        echo json_encode(["status" => true, "msg" => "Updated successfully"]);
        exit;
    }
}

echo json_encode(["status" => false, "msg" => "Update failed"]);
?>
