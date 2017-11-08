<?php
$string = file_get_contents("contacte.json");
$contacte = json_decode($string, true);

if (isset($_GET["id"])) {

    $id = $_GET["id"];

    for ($i = 0; $i < count($contacte); $i++) {
        if ($contacte[$i]["id"] == $id) {
            array_splice($contacte, $i, 1);
        }
    }
}

$string = json_encode($contacte);
file_put_contents("contacte.json", $string);
header('Location: ../');

?>