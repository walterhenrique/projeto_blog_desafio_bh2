 //document.write "essa mensagem foi gerada por JS"//
 var conteudopostagem = "";
 function postar() {
    const input = document.querySelector("#postagem");

     conteudopostagem = input.value;
     window.document.getElementById("postrecente").innerHTML += `<p>${conteudopostagem}</p><br />`;

     input.value = ''
 }
