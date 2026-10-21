<?php

$nome = $_POST['nome'];
$tel = $_POST['telefone'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$csenha = $_POST['senha2'];

$con = mysqli_connect('localhost', 'root', '', 'barto2026');

if ($senha != $csenha) {
    echo "<script>alert('As senhas não são iguais');window.location.href = 'tela_cadastro.html';</script>";
} else {

    $senha = password_hash($senha, PASSWORD_DEFAULT);

    $sql = "INSERT INTO cadastro (nome, telefone, email, senha, senha_confirme)
    VALUES (?, ?, ?, ?, ?)";

    $comando = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($comando, "sssss", $nome, $tel, $email, $senha, $senha);

    mysqli_stmt_execute($comando);

    header("Location:../Tela Login/login.php");
    exit;
}

?>
