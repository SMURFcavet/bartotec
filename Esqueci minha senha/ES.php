<?php

$con = mysqli_connect('localhost', 'root', '', 'barto2026');

if (isset($_POST['email'])) {

    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $senha_confirme = $_POST['senha_confirme'];

    if ($senha != $senha_confirme) {

        echo "<script>alert('As senhas não são iguais');window.location.href = 'Esqueci_senha.html';</script>";

    } else {

        $busca = mysqli_query($con, "SELECT * FROM cadastro WHERE email='$email'");

        $resultado = mysqli_fetch_array($busca);

        if ($resultado) {

            mysqli_query($con, "UPDATE cadastro SET senha='$senha', senha_confirme='$senha' WHERE email='$email'");

            header("Location:../Tela login/login.html");

        } else {

            $mensagem = "Email incorreto ou inexistente";
            echo "<script>alert('$mensagem'); window.location.href = 'Esqueci_senha.html';</script>";

        }
    }
}

?>
