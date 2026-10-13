<?php
session_start();
if(@$_SESSION['logado']==1){
    ?>
    <h1>Tela inicial</h1>
    <?php
}else{
    header("Location:login.html");
}
?>
