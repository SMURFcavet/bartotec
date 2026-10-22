<?php
session_start();
if(@$_SESSION['logado']==1){
    header("Location:../Tela Principal/index.html");
}else{
     echo "<script>alert('Você não está logado');</script>";
    header("Location:login.html");
}
?>
