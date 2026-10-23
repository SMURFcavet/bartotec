<?php
session_start();

$email = $_POST['email'];
$senha = $_POST['senha'];

$con = mysqli_connect('localhost', 'root', '', 'barto2026');

$sql = "SELECT * FROM cadastro WHERE email = ?";
$comando = mysqli_prepare($con, $sql);

mysqli_stmt_bind_param($comando, "s", $email);
mysqli_stmt_execute($comando);

$busca = mysqli_stmt_get_result($comando);

if (mysqli_num_rows($busca) > 0) {

    $usuario = mysqli_fetch_assoc($busca);

    if (password_verify($senha, $usuario['senha'])) {

        $_SESSION['logado'] = 1;
        $_SESSION['id_cadastro'] = $usuario['id_cadastro'];

        header("Location:login2.php");
        exit;

    }
}

$_SESSION['logado'] = 0;
    echo "<script>alert('Você não tem conta ');window.location.href = 'login.html';</script>";

exit;

?>
