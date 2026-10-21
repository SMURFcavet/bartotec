<?php
session_start();
if(@$_SESSION['logado']==1){
    header("Location:../Tela Principal/index.html");
}else{
    header("Location:login.html");
}
?>
