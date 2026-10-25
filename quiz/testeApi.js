fetch('https://raw.githubusercontent.com/isabellysilvasantos815-sketch/api-creatives/master/db.json')

.then( resposta => resposta.json() )
.then( dados => { 

    console.log(dados.estilos)

 } )