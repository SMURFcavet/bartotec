document.addEventListener("DOMContentLoaded", function () {
    let caixa = document.getElementById("barraPesquisa");

    if (!caixa) {
        caixa = document.createElement("div");
        caixa.id = "barraPesquisa";
        caixa.className = "filtro";
        const header = document.querySelector(".header") || document.getElementById("header");
        if (header) header.insertBefore(caixa, header.querySelector("#headerIcons, .headerIcons"));
    }

    if (!caixa) return;
    caixa.classList.add("filtro");
    caixa.innerHTML = `
        <select id="filtroEstilo" aria-label="Escolha um estilo">
            <option value="">Todos os estilos</option>
            <option value="minimalista">Minimalista</option>
            <option value="moderno">Moderno</option>
            <option value="rustico">Rústico</option>
            <option value="industrial">Industrial</option>
            <option value="japandi">Japandi</option>
        </select>
        <select id="filtroComodo" aria-label="Escolha um cômodo">
            <option value="">Todos os cômodos</option>
            <option value="Quarto">Quarto</option>
            <option value="Sala">Sala</option>
            <option value="Cozinha">Cozinha</option>
            <option value="Banheiro">Banheiro</option>
            <option value="Área externa">Área externa</option>
            <option value="Varanda">Varanda</option>
            <option value="Quarto de bebê">Quarto de bebê</option>
            <option value="Sala de jogos">Sala de jogos</option>
            <option value="Área gourmet">Área gourmet</option>
            <option value="Escritório">Escritório</option>
            <option value="Quarto teen">Quarto teen</option>
            <option value="Jardim">Jardim</option>
            <option value="Lavabo">Lavabo</option>
            <option value="Lavanderia">Lavanderia</option>
            <option value="Ateliê">Ateliê</option>
            <option value="Biblioteca">Biblioteca</option>
        </select>
        <button type="button" id="botaoFiltro">Mostrar</button>
    `;

    let botaoFiltro = document.getElementById("botaoFiltro")

        if (botaoFiltro !== null) {
            botaoFiltro.addEventListener("click", function () {

               const estilo = document.getElementById("filtroEstilo").value;
                const comodo = document.getElementById("filtroComodo").value;
                let destino;

                if (estilo === "moderno") {
                    destino = "../explorarCategorias/moderno.html";
                } else if (estilo === "minimalista" || estilo === "rustico" || estilo === "industrial") {
                    destino = "../categoriasEmDestaque/" + estilo + ".html";
                } else if (estilo === "japandi") {
                    destino = "../categoriasEmDestaque/jaspandi.html";
                } else {
                    destino = "../categoriasEmDestaque/tudoEmdestaque.html";
                }

                if (comodo) destino += "?pesquisa=" + encodeURIComponent(comodo);
                window.location.href = destino;
            })
        }

    const parametros = new URLSearchParams(window.location.search);
    const termo = parametros.get("pesquisa");
    if (termo) {
        const normalizar = texto => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const procurado = normalizar(termo);
        const cartoes = document.querySelectorAll("#posicaoCategoria, .category-card");
        let quantidade = 0;

        cartoes.forEach(function (cartao) {
            const textoCartao = normalizar(cartao.innerText);
            if (textoCartao.includes(procurado)) {
                cartao.style.display = "";
                quantidade++;
            } else {
                cartao.style.display = "none";
            }
        });

        if (quantidade > 0) {
            const primeiro = document.querySelector("#posicaoCategoria:not([style*='display: none']), .category-card:not([style*='display: none'])");
            if (primeiro) primeiro.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            const aviso = document.createElement("p");
            aviso.textContent = "Nenhum ambiente encontrado para esse cômodo nesta categoria.";
            aviso.className = "avisoFiltro";
            const area = document.getElementById("imagensCategoria") || document.querySelector("main") || document.body;
            area.prepend(aviso);
        }
    }
});
