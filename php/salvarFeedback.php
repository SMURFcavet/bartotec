<?php

session_start();

function mostrarAlerta($mensagem, $pagina)
{
    // Permite retornar apenas para arquivos do próprio projeto.
    $pagina = str_replace('\\', '/', (string) $pagina);
    $caminho = realpath(__DIR__ . '/../' . $pagina);
    $raiz = realpath(__DIR__ . '/..') . DIRECTORY_SEPARATOR;
    if (!$caminho || strpos($caminho, $raiz) !== 0 || !is_file($caminho)) {
        $pagina = 'Tela Principal/index.html';
    }
    $mensagemJs = json_encode($mensagem, JSON_UNESCAPED_UNICODE | JSON_HEX_TAG | JSON_HEX_QUOT | JSON_HEX_APOS);
    $destinoJs = json_encode('../' . $pagina, JSON_UNESCAPED_UNICODE | JSON_HEX_TAG | JSON_HEX_QUOT | JSON_HEX_APOS);
    echo "<script>alert($mensagemJs); window.location.href = $destinoJs;</script>";
    exit();
}

if($_SERVER['REQUEST_METHOD'] === 'POST')
{
    if (($_SESSION['logado'] ?? 0) != 1)
    {
        header("Location:../Tela login/login.html");
        exit();
    }

    $id_cadastro = $_SESSION['id_cadastro'];

    $quantidade_coracao = $_POST["quantidade_coracao"];

    $pagina_origem = $_POST["pagina_origem"];

    if ( $quantidade_coracao < 0 || $quantidade_coracao > 4 || 
    filter_var($quantidade_coracao, FILTER_VALIDATE_INT) === false )
    {
        echo "Quantidade indisponível";
    }

    else
    {
        $con = mysqli_connect('localhost', 'root', '', 'barto2026');

        if (!$con)
        {
            die("Erro na conexão: " . mysqli_connect_error());
        }

        else
        {
            $verificar = mysqli_query($con, "SELECT id_feedback FROM feedback WHERE id_cadastro = $id_cadastro");

            if (mysqli_num_rows($verificar) > 0)
            {
                mostrarAlerta("Você já enviou seu feedback!", $pagina_origem);
            }

            $sql = " insert into feedback ( id_cadastro, quantidade_coracao )
            values ( $id_cadastro, $quantidade_coracao ); ";

            $resultado = mysqli_query($con, $sql);

            if ($resultado)
            {
                mostrarAlerta("Feedback enviado com sucesso!", $pagina_origem);
            }

            else
            {
                echo "Erro ao salvar o Feedback: " . mysqli_error($con);
            }

            mysqli_close($con);

        }

    }

}

?>