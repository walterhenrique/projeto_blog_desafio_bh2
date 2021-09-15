 //document.write "essa mensagem foi gerada por JS"//
 
var conteudopostagem = ""

 
async function getContent (){
    try{
        const response = await fetch('http://localhost:4567/')
        const data = await response.json()
        console.log(data)
        console.log(response)
        show(data)
    } catch(error){
        console.error(error)
        console.log('houve um erro.')
    }
}

getContent()

function show(users){
    let output = ''
    for( let user of users){
        output += `<p>${user.name}</p>`
    }
    document.querySelector('div#postsalvo').innerHTML = output
}

function postar() {
   const input = document.querySelector("#postagem");

   conteudopostagem = input.value;
   window.document.getElementById("postrecente").innerHTML += `<p>${conteudopostagem}</p><br />`;
   input.value = ''
}

 
 
