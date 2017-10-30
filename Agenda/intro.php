<h1>Hello</h1>

<?php

$nume = gethostname() . " / " . get_current_user();
echo $nume;

function add($a, $b){
    return $a + $b;
}

$r = add(2, 3);
echo "<br>";
echo $r;

?>

<h1>Tabla inmultirii</h1>
<form action="">
    <input type="number" name="number" >
    <button>Multiply</button>
</form>


<?php
echo "| ";
    for($i = 1; $i<=10; $i++){
        echo "<a href='?number=$i'>$i</a> |";
    }
?>

<table>
    <?php $numar = isset($_GET["number"]) ? $_GET["number"] : 1;
    for ($i = 1; $i <= 10; $i++) {
        $r = $numar * $i;
        echo "<tr><td>$i</td><td>* $numar = </td><td>$r</td></tr>";
    }
    ?>
</table>
