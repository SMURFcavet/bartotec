// Dicionário com todas as SVGs da aplicação
const SVG_ICONS = {
    // HEADER
    logo: `<svg viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.84L18 11v7h-2v-6H8v6H6v-7l6-5.16z"/><path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>`,

    search: `<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,

    heart: `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,

    user: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`,

    // SEÇÕES
    'section-category': `<svg viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>`,

    'section-home': `<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,

    'section-star': `<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,

    'section-chat': `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>`,

    // CATEGORIAS
    'cat-minimalismo': `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M7 12h10v2H7z"/></svg>`,

    'cat-moderno': `<svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>`,

    'cat-rustico': `<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,

    'cat-industrial': `<svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/></svg>`,

    // CÔMODOS
    'room-sala': `<svg viewBox="0 0 24 24"><path d="M20 10V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.66l.67 2h1l.67-2H22v-5c0-1.1-.9-2-2-2zm-14-3h12v3H6V7zm14 8H4v-3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v3z"/></svg>`,

    'room-quarto': `<svg viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>`,

    'room-cozinha': `<svg viewBox="0 0 24 24"><path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.5h12V20zM6 8.5V4h12v4.5H6z"/></svg>`,

    'room-jantar': `<svg viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.55 3.89 3.56 4.23L6.5 22h2l.04-8.77C10.55 12.89 12 11.12 12 9V2h-1v7zm5-3v6h1.5v10h2V2H16c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2z"/></svg>`,

    // NAVEGAÇÃO
    'arrow-right': `<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`,

   // CORAÇÃO DOS DEPOIMENTOS
'heart-testimonial': `<svg viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>`
};

// Inserir SVGs e iniciar o carrossel
document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('[data-svg]');

    elementos.forEach(elemento => {
        const nomeIcone = elemento.getAttribute('data-svg');

        if (SVG_ICONS[nomeIcone]) {
            elemento.innerHTML = SVG_ICONS[nomeIcone];
        } else if (nomeIcone === 'hearts-4') {
    elemento.innerHTML = Array(4).fill(SVG_ICONS['heart-testimonial']).join('');
}
    });

    iniciarCarrossel();
});

// Carrossel de imagens da página inicial
function iniciarCarrossel() {
    const slides = document.querySelectorAll('.slide-destaque');
    const indicadores = document.querySelectorAll('.indicador-carrossel');

    if (slides.length === 0 || indicadores.length === 0) return;

    let slideAtual = 0;
    const intervaloSlide = 5000;

    function irParaSlide(indice) {
        slides[slideAtual].classList.remove('ativo');
        indicadores[slideAtual].classList.remove('ativo');

        slideAtual = (indice + slides.length) % slides.length;

        slides[slideAtual].classList.add('ativo');
        indicadores[slideAtual].classList.add('ativo');
    }

    function proximoSlide() {
        irParaSlide(slideAtual + 1);
    }

    let temporizador = setInterval(proximoSlide, intervaloSlide);

    indicadores.forEach(indicador => {
        indicador.addEventListener('click', () => {
            clearInterval(temporizador);

            const indice = Number(indicador.getAttribute('data-slide'));

            if (Number.isInteger(indice) && indice >= 0 && indice < slides.length) {
                irParaSlide(indice);
            }

            temporizador = setInterval(proximoSlide, intervaloSlide);
        });
    });
}

// Elementos do rodapé
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