<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Add Contact</title>
</head>
<body>

<?php
$string = file_get_contents("contacte.json");
$contacte = json_decode($string, true);

$idStr = file_get_contents("last.contact.id");
$id = intval($idStr);
$id++;
file_put_contents("last.contact.id",$id);

$newPerson = array(
    "id" => $id,
    "firstName" => $_GET["firstName"],
    "lastName" => $_GET["lastName"],
    "phone" => $_GET["phone"]
);

$contacte[] = $newPerson;
$string = json_encode($contacte);
file_put_contents("contacte.json", $string);
header('Location: ../');

?>

<h1>contact added</h1>

</body>
</html>