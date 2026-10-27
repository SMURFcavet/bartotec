<?php

    session_start();

        if (($_SESSION['logado'] ?? 0) != 1)
        {
            header("Location:../Tela login/login.html");
            exit();
        }

        $id_cadastro = $_SESSION['id_cadastro'];

        $resultQuiz = $_POST["estilo_result"];

        $con = mysqli_connect('localhost', 'root', '', 'barto2026');

        if (!$con)
        {
            die("Erro na conexão: " . mysqli_connect_error());
        }

        $consultaQuiz = mysqli_query($con, "SELECT estilo_result FROM quiz WHERE id_cadastro = $id_cadastro");

        $result = mysqli_query($con, "INSERT INTO quiz(id_cadastro, estilo_result) VALUES ($id_cadastro, '$resultQuiz') ON DUPLICATE KEY UPDATE estilo_result = '$resultQuiz' ");

        if ($result === true)
        {
            echo "Resultado salvo com sucesso";
        }

        else
        {
            echo "Erro ao salvar o resultado";
        }

       

    

?>