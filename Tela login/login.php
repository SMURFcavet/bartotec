<?php
session_start();
$email = $_POST['email'];
$senha = $_POST['senha'];
$con = mysqli_connect('localhost','root','','barto2026');
$busca= mysqli_query($con,"SELECT*FROM cadastro WHERE email='$email' and senha='$senha'");
$contagem=mysqli_num_rows($busca);
if($contagem >0){
    $usuario = mysqli_fetch_assoc($busca);
    $_SESSION['id_cadastro'] = $usuario['id_cadastro'];
    $_SESSION['logado']=1;
    header("Location:login2.php");
}else{
    $_SESSION['logado']=0;
    echo "<script>alert('Email ou senha incorretos, ou usuário não cadastrado');window.location.href = 'login.html';</script>";
}
?>
