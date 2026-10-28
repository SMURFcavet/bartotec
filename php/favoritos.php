<?php

    session_start();

    if($_SERVER['REQUEST_METHOD'] === 'POST')
    {

        if (($_SESSION['logado'] ?? 0) != 1)
        {
            header("Location:../Tela login/login.html");
            exit();
        }

        $id_cadastro = $_SESSION['id_cadastro'];

        $ambiente = $_POST["ambiente"];

        $imagem = $_POST["imagem"];

        $titulo = $_POST["titulo"];

        $estilo = $_POST["estilo"];

        $pagina = $_POST["pagina"];


        $con = mysqli_connect('localhost', 'root', '', 'barto2026');

        if (!$con)
        {
            die("Erro na conexão: " . mysqli_connect_error());
        }

        $busca = mysqli_query($con, "SELECT * FROM favoritos WHERE id_cadastro = $id_cadastro AND ambiente = '$ambiente'");

        if (mysqli_num_rows($busca) > 0)
        {
            $delete = mysqli_query($con, "DELETE FROM favoritos WHERE id_cadastro = $id_cadastro AND ambiente = '$ambiente'");

            if ($delete === true)
            {
                echo "Favorito removido com sucesso";
            }

            else
            {
                echo "Erro ao remover o favorito";
            }
        }

        else
        {
            $result = mysqli_query($con, "INSERT INTO favoritos(id_cadastro, ambiente, imagem, titulo, estilo, pagina  )
            VALUES ($id_cadastro, '$ambiente', '$imagem', '$titulo', '$estilo', '$pagina' ) ");

            if ($result === true)
            {
                echo "Favorito salvo com sucesso";
            }

            else
            {
                echo "Erro ao salvar o favorito";
            }
        }
    }

    if ($_SERVER['REQUEST_METHOD'] === 'GET')
    {
        if (($_SESSION['logado'] ?? 0) != 1)
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

        $busca = mysqli_query($con, "SELECT * FROM favoritos WHERE id_cadastro = $id_cadastro");

        $favoritos = [];

        while ($linha = mysqli_fetch_assoc($busca))
        {
            $favoritos[] = $linha;
        }

        echo json_encode($favoritos);
    }


        

       

    

?>