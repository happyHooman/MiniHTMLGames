<?php
include "connect-db.php";

$sql = "SELECT * FROM agenda";
$result = $conn->query($sql);

$contacte = array();
if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
//        echo "id: " . $row["id"] . " - " . $row["first_name"] . " " . $row["last_name"] . " " . $row["phone"] . "<br>";
        $contacte[] = array(
            "id" => $row["id"],
            "firstName" => $row["first_name"],
            "lastName" => $row["last_name"],
            "phone" => $row["phone"],
        );
    }
}
$conn->close();

echo json_encode($contacte, true);

?>