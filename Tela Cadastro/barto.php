<?php

$nome = $_POST['nome'];
$tel = $_POST['telefone'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$csenha = $_POST['senha2'];

$con = mysqli_connect('localhost', 'root', '', 'barto2026');

if ($senha != $csenha) {
     echo "<script>alert('As senhas não são iguais');window.location.href = 'tela_cadastro.html';</script>";
} else if{

    $sql = "INSERT INTO cadastro
    (nome, telefone, email, senha, senha_confirme)
    VALUES
    ('$nome', '$tel', '$email', '$senha', '$csenha')";

    mysqli_query($con, $sql);
    }else if(mysqli_num_rows($resultado) > 0){
            echo "<script>alert('Esse email ou telefone já está cadastrado');window.location.href = 'tela_cadastro.html';</script>";
    }
    else{

header("Location:Location:../Tela Login/login.php");
}

?>
