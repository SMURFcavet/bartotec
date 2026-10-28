(() => {
    'use strict';

    const CHAVE = 'creatives_favoritos_v1';
    const script = document.currentScript;
    const raiz = new URL('../', script.src);
    const apiPublica = {
        listar,
        remover,
        alternar
    };

    async function listar() 
    {
        try 
        {
            const resposta = await fetch('../php/favoritos.php')
            const dados = await resposta.json()

            return Array.isArray(dados) ? dados : []
        } 
        
        catch (erro) 
        {
            console.log('Erro ao buscar favoritos:', erro)
            return []
        }
    }

    function salvar(lista) {
        try {
            localStorage.setItem(CHAVE, JSON.stringify(lista));
            window.dispatchEvent(new Event('favoritos-atualizados'));
            return true;
        } catch (erro) {
            alert('Não foi possível salvar os favoritos neste navegador.');
            return false;
        }
    }

    function alternar(item) {
        console.log("Entrei na função alternar")
        const dados = new FormData()
        dados.append("ambiente", item.id)
        dados.append("imagem", item.imagem)
        dados.append("titulo", item.titulo)
        dados.append("estilo", item.estilo)
        dados.append("pagina", item.pagina)

        fetch("../php/favoritos.php", 
        {
            method: "POST",
            body: dados
        })

        .then(resposta => resposta.text())
        .then(texto => 
        {
            if (texto.includes("removido")) 
            {
                console.log("O favorito foi removido")
            } 
            
            else if (texto.includes("salvo")) 
            {
                console.log("O favorito foi adicionado")
            } 
            
            else 
            {
                console.log(texto)
            }

            pintarCoracoes()
            window.dispatchEvent(new Event('favoritos-atualizados'))
        })
    }

    function remover(item) 
    {
        const dados = new FormData()
        dados.append("ambiente", item)

        fetch("../php/favoritos.php", {
            method: "POST",
            body: dados
        })
        .then(resposta => resposta.text())
        .then(texto => console.log(texto))
    }

    function dadosDoCard(card) {
        const img = card.querySelector('img[id="imagemCategoria"]');
        if (!img) return null;

        const caminho = new URL(img.getAttribute('src'), location.href);
        const id = decodeURIComponent(caminho.pathname);
        const titulo = card.querySelector('[id="descricaoImagem"]')?.firstChild?.textContent?.trim()
            || img.alt || 'Ambiente';
        const pasta = id.split('/').slice(-2, -1)[0] || '';
        const estilo = pasta.replace(/[_-]/g, ' ').replace(/^(idustrial)$/i, 'Industrial');

        return {
            id,
            imagem: caminho.href,
            titulo,
            estilo,
            pagina: img.closest('a[href]')?.href || card.querySelector('a[href]')?.href || location.href
        };
    }

    async function pintarCoracoes() {
        const salvos = new Set((await listar()).map(item => item.ambiente))
        document.querySelectorAll('img[id="favoriteBorder"]').forEach(coracao => {
            const card = coracao.closest('[id="posicaoCategoria"]');
            const item = card && dadosDoCard(card);
            if (!item) return;
            const ativo = salvos.has(item.id);
            coracao.src = new URL(
                ativo ? 'img/futter/coracaoFeedback.png' : 'img/main/favoriteBorder.png',
                raiz
            ).href;
            coracao.style.height = ativo ? '2.5vh' : '';
            coracao.style.width = ativo ? 'auto' : '';
            coracao.style.cursor = 'pointer';
            coracao.setAttribute('role', 'button');
            coracao.setAttribute('tabindex', '0');
            coracao.setAttribute('aria-label', ativo ? 'Remover dos favoritos' : 'Adicionar aos favoritos');
            coracao.setAttribute('aria-pressed', String(ativo));
        });
    }

    // Substitui a função antiga, que apenas trocava a imagem do coração.
    window.favoritar = function (coracao) {
        console.log("Cliquei no coração")
        const card = coracao.closest('[id="posicaoCategoria"]');
        const item = card && dadosDoCard(card);
        if (!item) return;
        alternar(item);
    };

    window.CreativesFavoritos = apiPublica;
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('img[id="favoriteBorder"]').forEach(coracao => {
            coracao.addEventListener('keydown', evento => {
                if (evento.key === 'Enter' || evento.key === ' ') {
                    evento.preventDefault();
                    window.favoritar(coracao);
                }
            });
        });
        pintarCoracoes();
    });
    window.addEventListener('favoritos-atualizados', pintarCoracoes);
    window.addEventListener('storage', evento => {
        if (evento.key === CHAVE) pintarCoracoes();
    });
})();
