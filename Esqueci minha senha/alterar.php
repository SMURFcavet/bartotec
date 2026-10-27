<?php

$id_cadastro = $_POST['id_cadastro'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$senha_confirme = $_POST['senha_confirme'];

$con = mysqli_connect('localhost', 'root', '', 'barto2026');

if ($senha != $senha_confirme) {

    echo "<script>alert('As senhas não são iguais');window.location.href = 'Esqueci_senha.html';</script>";

} else {

    mysqli_query($con, "UPDATE cadastro SET email='$email', senha='$senha', senha_confirme='$senha_confirme' WHERE id_cadastro='$id_cadastro'");

    header("Location: ../Tela login/login.html");
}

?>
