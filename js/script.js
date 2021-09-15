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

function show(posters){
    let output = ''
    for( let post of posters){
        output += `<p><strong>${post.title}</strong><br/>${post.body}</p>`
    }
    document.querySelector('div#postsalvo').innerHTML = output
}

function postar() {
   const input = document.querySelector("#postagem");

   conteudopostagem = input.value;
   window.document.getElementById("postrecente").innerHTML += `<p>${conteudopostagem}</p><br />`;
   input.value = ''
}

 
 
