const sobreNos = document.getElementById("sobreNos") 
        const comoFunciona = document.getElementById("comoFunciona")
        const politicaPrivacidade = document.getElementById("politicaPrivacidade")
        const centralAjuda = document.getElementById("centralAjuda")
        const faleConosco = document.getElementById("faleConosco")
        const feedback = document.getElementById("feedback")

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