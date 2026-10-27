
        const sobreNos = document.getElementById("sobreNos") 
        const comoFunciona = document.getElementById("comoFunciona")
        const politicaPrivacidade = document.getElementById("politicaPrivacidade")
        const centralAjuda = document.getElementById("centralAjuda")
        const faleConosco = document.getElementById("faleConosco")
        const feedback = document.getElementById("feedback")
        
        let senhaReal = ""

        const coracao = document.querySelectorAll(".feedbackImgAntes")

        function mostrarConteudo(conteudoClicado)
        {

            const elemento = document.getElementById(conteudoClicado);

            if (  elemento.style.display === "block" ) 
            {
                elemento.style.display = "none";


                if ( conteudoClicado == "feedback" )
            {
                botaoFeedback.style.display = "none";
            }

            return

            } 
            

            if ( conteudoClicado == "sobreNos" )
            {
                sobreNos.style.display = "block"
                comoFunciona.style.display = "none";
                politicaPrivacidade.style.display = "none";
                centralAjuda.style.display = "none";
                faleConosco.style.display = "none";
                feedback.style.display = "none";
                botaoFeedback.style.display = "none";
            }


            else if ( conteudoClicado == "comoFunciona" )
            {
                comoFunciona.style.display = "block"
                sobreNos.style.display = "none"
                politicaPrivacidade.style.display = "none";
                centralAjuda.style.display = "none";
                faleConosco.style.display = "none";
                feedback.style.display = "none";
                botaoFeedback.style.display = "none";
            }

            else if ( conteudoClicado == "politicaPrivacidade" )
            {
                politicaPrivacidade.style.display = "block"
                sobreNos.style.display = "none"
                comoFunciona.style.display = "none";
                centralAjuda.style.display = "none";
                faleConosco.style.display = "none";
                feedback.style.display = "none";
                botaoFeedback.style.display = "none";
            }

            else if ( conteudoClicado == "centralAjuda" )
            {
                centralAjuda.style.display = "block"
                sobreNos.style.display = "none"
                comoFunciona.style.display = "none";
                politicaPrivacidade.style.display = "none";
                faleConosco.style.display = "none";
                feedback.style.display = "none";
                botaoFeedback.style.display = "none";
            }

            else if ( conteudoClicado == "faleConosco" )
            {
                faleConosco.style.display = "block"
                sobreNos.style.display = "none"
                comoFunciona.style.display = "none";
                politicaPrivacidade.style.display = "none";
                centralAjuda.style.display = "none";
                feedback.style.display = "none";
                botaoFeedback.style.display = "none";
            }

            else if ( conteudoClicado == "feedback" )
            {
                feedback.style.display = "block"
                sobreNos.style.display = "none"
                comoFunciona.style.display = "none";
                politicaPrivacidade.style.display = "none";
                centralAjuda.style.display = "none";
                faleConosco.style.display = "none";
                botaoFeedback.style.display = "block";
            }

        }

        function trocarImagem(imagem) 
        {

            for ( let i = 0; i < coracao.length; i++ )
            {
                if (coracao[i] === imagem)
                {

                    if ( imagem.src.includes("Favorite.png") )
                    {

                        imagem.src = "../img/futter/coracaoFeedback.png";
                        imagem.style.height = "3vh";
                        imagem.style.width = "auto";
                        imagem.style.marginTop =  "1.5vh";

                    }

                    else 
                    {
                        imagem.src = "../img/header/Favorite.png";
                    }

                }

            }

            let quantidade = 0

            for ( let i = 0; i < coracao.length; i++ )
            {
                if (coracao[i].src.includes("coracaoFeedback.png"))
                {
                    quantidade++
                }
            }

            document.getElementById("quantidade_coracao").value = quantidade
            
        }

        function favoritar(favorito)
        {

            if ( favorito.src.includes("favoriteBorder"))
            {
                favorito.src = favorito.src = "../img/futter/coracaoFeedback.png";
                favorito.style.height = "2.5vh";
                favorito.style.width = "auto";
            }

            else
            {
                favorito.src = "../img/header/favoriteBorder.png";
            }
            
        }

        let email = document.getElementById("email")
        let telefone = document.getElementById("telefone")
        let feedbackUser = document.getElementById("feedbackPerfil")
        let senha = document.getElementById("senha")
        let nome = document.getElementById("nome")
        let quizUser = document.getElementById("quizPerfil")

        if (email !== null) 
        {

            fetch('../php/perfil.php')

            .then( resposta => resposta.json() )
            .then( dados => { 
                
            email.textContent = dados.email
            telefone.textContent = dados.telefone
            senhaReal = dados.senha
            senha.textContent = "•".repeat(senhaReal.length)

            nome.textContent = dados.nome

            if ( dados.estilo_result !== null )
            {
                quizUser.textContent = dados.estilo_result
            }

            else
            {
                quizUser.textContent = "Quiz pendente"
            }

            

            if ( dados.quantidade_coracao !== null )
                    {
                        feedbackUser.textContent = dados.quantidade_coracao
                    }

                    else
                    {
                        feedbackUser.textContent = "Feedback pendente"
                    }

            } );

        }

        function mostrarSenha(mostrar)
        {

            if (mostrar.src.includes("naoVisivel"))
            {
                mostrar.src = "../img/perfil/visivel.png";

                fetch('../php/perfil.php')

                .then( resposta => resposta.json() )
                .then( dados => { 
    
                senha.textContent = dados.senha
            
                } );
                
            }

            else
            {
                mostrar.src = "../img/perfil/naoVisivel.png";
                senha.textContent = "•".repeat(senhaReal.length)
            }

        }

