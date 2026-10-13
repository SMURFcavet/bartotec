<?php

$con = mysqli_connect('localhost', 'root', '', 'barto2026');

if (isset($_POST['email'])) {

    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $senha_confirme = $_POST['senha_confirme'];

    if ($senha != $senha_confirme) {

        echo "As senhas não são iguais.";

    } else {

        $busca = mysqli_query($con, "SELECT * FROM cadastro WHERE email='$email'");

        $resultado = mysqli_fetch_array($busca);

        if ($resultado) {

            mysqli_query($con, "UPDATE cadastro SET senha='$senha', senha_confirme='$senha_confirme' WHERE email='$email'");

    header("Location:login.html");

        } else {

            echo "E-mail não encontrado.";

        }
    }
}

?>

<center>

<form action="" method="POST">

    E-mail
    <input type="email" id="email"required placeholder="Digite seu e-mail" name="email" maxlength="50"/>
    <br>
    Senha
    <input type="password" placeholder="Digite sua nova senha" name="senha" required maxlength="10"/>
    <br>
    Confirmação Senha
    <input type="password" placeholder="Confirme sua nova senha" name="senha_confirme" required maxlength="10"/>
    <br>
    <input type="submit" value="Atualizar"/>

</form>

</center>
