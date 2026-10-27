<?php

    session_start();

        if (!($_SESSION['logado'] == 1))
        {
            header("Location:../Tela login/login.html");
            exit();
        }

        $id_cadastro = $_SESSION['id_cadastro'];

        $con = mysqli_connect('localhost', 'root', '', 'barto2026');

        if (!$con)
        {
            die("Erro na conexão: " . mysqli_connect_error());
        }

        $dadosUser = mysqli_query($con, "SELECT email, telefone, senha, nome FROM cadastro WHERE id_cadastro = $id_cadastro");

        $feedback = mysqli_query($con, "SELECT quantidade_coracao FROM feedback WHERE id_cadastro = $id_cadastro");

        $resultadoQuiz = mysqli_query($con, "SELECT estilo_result FROM quiz WHERE id_cadastro = $id_cadastro");

        $usuario = mysqli_fetch_assoc($dadosUser);

        $dadoFeedback = mysqli_fetch_assoc($feedback);

        $dadoQuiz = mysqli_fetch_assoc($resultadoQuiz);

        if ( $dadoFeedback !== null )
        {
             $usuario['quantidade_coracao'] = $dadoFeedback['quantidade_coracao'];

        }

        else
        {
            $usuario['quantidade_coracao'] = null;

        }

        if ($dadoQuiz !== null)
        {
            $usuario['estilo_result'] = $dadoQuiz['estilo_result'];

        }

        else
        {
            $usuario['estilo_result'] = null;
            
        }

         echo json_encode($usuario);

       

    

?>