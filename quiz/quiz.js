const formulario = document.getElementById("quiz")

formulario.addEventListener('submit',

function(event)
{

    event.preventDefault()

    const pergunta1 = formulario.querySelector( 'input[name = "pergunta1"]:checked' ).value

    const pergunta2 = formulario.querySelector( 'input[name = "pergunta2"]:checked' ).value

    const pergunta3 = formulario.querySelector( 'input[name = "pergunta3"]:checked' ).value

    const pergunta4 = formulario.querySelector( 'input[name = "pergunta4"]:checked' ).value

    const pergunta5 = formulario.querySelector( 'input[name = "pergunta5"]:checked' ).value

    const pergunta6 = formulario.querySelector( 'input[name = "pergunta6"]:checked' ).value

    const pontos = 
    {
        Japandi: 0,
        Minimalista: 0,
        Rústico: 0,
        Industrial: 0,
        Moderno: 0
    }

    const estilos =
    {

        a: "Japandi",
        b: "Minimalista",
        c: "Rústico",
        d: "Industrial",
        e: "Moderno"

    }

    const imagens = 
    {
        "Japandi": "../img/quiz/imgResultado/japandi.png",
        "Minimalista": "../img/quiz/imgResultado/minimalista.png",
        "Rústico": "../img/quiz/imgResultado/rustico.png",
        "Industrial": "../img/quiz/imgResultado/industrial.png",
        "Moderno": "../img/quiz/imgResultado/moderno.png",
    }

    pontos[estilos[pergunta1]]++
    pontos[estilos[pergunta2]]++
    pontos[estilos[pergunta3]]++
    pontos[estilos[pergunta4]]++
    pontos[estilos[pergunta5]]++
    pontos[estilos[pergunta6]]++

    let estilosVencedores = ["Japandi"]

    let maiorPontuacao = pontos["Japandi"]

    const nomesEstilos = Object.keys(pontos)

    for ( i = 1; i < 5; i++ )
    {
       
        const nomeEstilo = nomesEstilos[i]

        if ( pontos[nomeEstilo] > maiorPontuacao )
        {
            estilosVencedores = []
            estilosVencedores.push(nomeEstilo)
            maiorPontuacao = pontos[nomeEstilo]
        }

        else if ( pontos[nomeEstilo] == maiorPontuacao)
        {

            estilosVencedores.push(nomeEstilo)

        }

    }

        fetch('https://raw.githubusercontent.com/isabellysilvasantos815-sketch/api-creatives/master/db.json')
        .then(resposta => resposta.json())
        .then(dados => {

            const resultado = dados.estilos.filter( estilo => { return estilosVencedores.includes(estilo.nome) } )

            const enviarResultado = document.getElementById("receberResultado")

            enviarResultado.innerHTML = ""

            resultado.forEach(estilo => {

                const bloco = document.createElement("div")
                bloco.classList.add("blocoEstilo")
                enviarResultado.appendChild(bloco)

                const blocoText = document.createElement("div")
                blocoText.classList.add("blocoText")
                bloco.appendChild(blocoText)

                const blocoImg = document.createElement("div")
                blocoImg.classList.add("blocoEstiloImg")
                bloco.appendChild(blocoImg)

                const nome = document.createElement("h2")
                nome.textContent = estilo.nome
                nome.classList.add("titleEstilo")
                blocoText.appendChild(nome)


                const titleCaracteristicas = document.createElement("h3")
                titleCaracteristicas.textContent = "Características: "
                titleCaracteristicas.classList.add("titleEstilo")
                blocoText.appendChild(titleCaracteristicas)

                const textCaracteristicas = document.createElement("p")
                textCaracteristicas.textContent = estilo.caracteristicas.join(", ")
                textCaracteristicas.classList.add("textEstilo")
                blocoText.appendChild(textCaracteristicas)


                const titleCores = document.createElement("h3")
                titleCores.textContent = "Cores: "
                titleCores.classList.add("titleEstilo")
                blocoText.appendChild(titleCores)

                const textCores = document.createElement("p")
                textCores.textContent = estilo.cores.join(", ")
                textCores.classList.add("textEstilo")
                blocoText.appendChild(textCores)


                const titleMateriais = document.createElement("h3")
                titleMateriais.textContent = "Materiais: "
                titleMateriais.classList.add("titleEstilo")
                blocoText.appendChild(titleMateriais)

                const textMateriais = document.createElement("p")
                textMateriais.textContent = estilo.materiais.join(", ")
                textMateriais.classList.add("textEstilo")
                blocoText.appendChild(textMateriais)

                const img = document.createElement("img")
                console.log(estilo.nome)
                img.src = imagens[estilo.nome]
                img.classList.add("imgEstilo")
                blocoImg.appendChild(img)


            });

        })

        formulario.querySelectorAll('input[type = "radio"]').forEach(opcao => 
        { opcao.checked = false })
        
})

const limparResultado = document.getElementById("limparResultado")

limparResultado.addEventListener("click", () => { document.getElementById("receberResultado").innerHTML = "" })
