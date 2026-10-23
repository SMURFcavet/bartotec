<?php
session_start();

$email = $_POST['email'];
$senha = $_POST['senha'];

$con = mysqli_connect('localhost', 'root', '', 'barto2026');

$sql = "SELECT * FROM cadastro WHERE email = '$email'";
$resultado = mysqli_query($con, $sql);

if (mysqli_num_rows($resultado) > 0) {
    $usuario = mysqli_fetch_assoc($resultado);

    if (password_verify($senha, $usuario['senha'])) {
        $_SESSION['logado'] = 1;
        $_SESSION['id_cadastro'] = $usuario['id_cadastro'];

        header("Location: login2.php");
        exit;
    }
}

$_SESSION['logado'] = 0;
    echo "<script>alert('Email ou senha incorretos');window.location.href = 'login.html';</script>";
?>
