<?php
$string = file_get_contents("contacte.json");
$contacte = json_decode($string, true);


if (isset($_POST['id']) && $_POST['id'] != ""){

    $id = $_GET["id"];

    for ($i = 0; $i < count($contacte); $i++) {
        $contact = &$contacte[$i];
        if ($contact["id"] == $id) {
            $contact["firstName"] = $_GET["firstName"];
            $contact["lastName"] = $_GET["lastName"];
            $contact["phone"] = $_GET["phone"];
        }
    }
} else {
    $idStr = file_get_contents("last.contact.id");
    $id = intval($idStr);
    $id++;
    file_put_contents("last.contact.id", $id);

    $newPerson = array(
        "id" => $id,
        "firstName" => $_GET["firstName"],
        "lastName" => $_GET["lastName"],
        "phone" => $_GET["phone"]
    );

    $contacte[] = $newPerson;
}

$string = json_encode($contacte);
file_put_contents("contacte.json", $string);
header('Location: ../');

?>