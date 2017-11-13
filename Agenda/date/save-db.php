<?php
include "connect-db.php";

$firstName = $_GET["firstName"];
$lastNAme = $_GET["lastName"];
$phone = $_GET["phone"];

if (isset($_POST['id']) && $_POST['id'] != ""){
    $id = $_GET["id"];
    $sql = "UPDATE agenda SET first_name = '$firstName', last_name = '$lastNAme', phone = '$phone' WHERE id = $id";
} else { //add
    $sql = "INSERT INTO agenda (first_name, last_name, phone) VALUES ('$firstName', '$lastNAme', '$phone')";
}

$conn->query($sql);
$conn->close();
header('Location: ../');
?>