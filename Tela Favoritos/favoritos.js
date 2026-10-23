const grade = document.getElementById('gradeFavoritos');
const mensagem = document.getElementById('mensagem');

function renderizarFavoritos() {
    const itens = window.CreativesFavoritos.listar();
    grade.replaceChildren();

    mensagem.textContent = itens.length
        ? ''
        : 'Você ainda não salvou nenhum ambiente. Explore as categorias e clique no coração!';

    for (const item of itens) {
        const card = document.createElement('article');
        card.className = 'cartao';

        const link = document.createElement('a');
        link.href = item.pagina;

        const imagem = document.createElement('img');
        imagem.src = item.imagem;
        imagem.alt = item.titulo;
        imagem.loading = 'lazy';

        const legenda = document.createElement('div');
        legenda.className = 'rodape';
        legenda.textContent = item.titulo;

        const remover = document.createElement('button');
        remover.className = 'remover';
        remover.type = 'button';
        remover.textContent = '♥';
        remover.setAttribute('aria-label', `Remover ${item.titulo} dos favoritos`);
        remover.addEventListener('click', () => {
            window.CreativesFavoritos.remover(item.id);
        });

        link.append(imagem, legenda);
        card.append(link, remover);
        grade.append(card);
    }
}

renderizarFavoritos();
window.addEventListener('favoritos-atualizados', renderizarFavoritos);
window.addEventListener('storage', renderizarFavoritos);

const sobreNos = document.getElementById("sobreNos");
const comoFunciona = document.getElementById("comoFunciona");
const politicaPrivacidade = document.getElementById("politicaPrivacidade");
const centralAjuda = document.getElementById("centralAjuda");
const faleConosco = document.getElementById("faleConosco");
const feedback = document.getElementById("feedback");
const botaoFeedback = document.getElementById("botaoFeedback");
const coracao = document.querySelectorAll(".feedbackImgAntes");

// Mostrar ou esconder as informações do rodapé
function mostrarConteudo(conteudoClicado) {
    const secoes = {
        sobreNos,
        comoFunciona,
        politicaPrivacidade,
        centralAjuda,
        faleConosco,
        feedback
    };

    const elemento = document.getElementById(conteudoClicado);

    if (!elemento) return;

    if (
        elemento.style.display === "block" ||
        (conteudoClicado === "feedback" && elemento.style.display === "flex")
    ) {
        elemento.style.display = "none";

        if (conteudoClicado === "feedback" && botaoFeedback) {
            botaoFeedback.style.display = "none";
        }

        return;
    }

    Object.entries(secoes).forEach(([nome, secao]) => {
        if (secao) {
            secao.style.display = "none";
        }
    });

    if (conteudoClicado === "feedback") {
        elemento.style.display = "flex";

        if (botaoFeedback) {
            botaoFeedback.style.display = "block";
        }
    } else {
        elemento.style.display = "block";

        if (botaoFeedback) {
            botaoFeedback.style.display = "none";
        }
    }
}

// Trocar o estado dos corações do feedback
function trocarImagem(imagem) {
    if (imagem.src.includes("Favorite.png")) {
        imagem.src = "../img/futter/coracaoFeedback.png";
        imagem.style.height = "3vh";
        imagem.style.width = "auto";
        imagem.style.marginTop = "1.5vh";
    } else {
        imagem.src = "../img/header/Favorite.png";
        imagem.style.height = "4vh";
        imagem.style.marginTop = "1vh";
    }

    let quantidade = 0;

    coracao.forEach(item => {
        if (item.src.includes("coracaoFeedback.png")) {
            quantidade++;
        }
    });

    const campoQuantidade = document.getElementById("quantidade_coracao");

    if (campoQuantidade) {
        campoQuantidade.value = quantidade;
    }
}

// Favoritar um item
function favoritar(favorito) {
    if (favorito.src.includes("favoriteBorder")) {
        favorito.src = "../img/futter/coracaoFeedback.png";
        favorito.style.height = "2.5vh";
        favorito.style.width = "auto";
    } else {
        favorito.src = "../img/header/favoriteBorder.png";
    }
}
