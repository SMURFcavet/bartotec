<?php
session_start();
$email = $_POST['email'];
$senha = $_POST['senha'];
$con = mysqli_connect('localhost','root','','barto2026');
$busca= mysqli_query($con,"SELECT*FROM cadastro WHERE email='$email' and senha='$senha'");
$contagem=mysqli_num_rows($busca);

if($contagem >0){
    $usuario = mysqli_fetch_assoc($busca);
    $_SESSION['logado']=1;
    $_SESSION['id_cadastro'] = $usuario['id_cadastro'];
    header("Location:login2.php");
}else{
    $_SESSION['logado']=0;
    header("Location:login.html");
}
?>
