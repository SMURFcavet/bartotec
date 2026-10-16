<?php

$nome = $_POST['nome'];
$tel = $_POST['telefone'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$csenha = $_POST['senha2'];

$con = mysqli_connect('localhost', 'root', '', 'barto2026');

if ($senha != $csenha) {
    echo "ERRO As senhas não são iguais!";
} else {

    $sql = "INSERT INTO cadastro (nome, telefone, email, senha, senha_confirme)
    VALUES ('$nome', '$tel', '$email', '$senha', '$csenha')";

    mysqli_query($con, $sql);

header("Location:../Tela Login/login.php");
}

?>
