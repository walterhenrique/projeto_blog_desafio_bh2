 //document.write "essa mensagem foi gerada por JS"//
 var conteudopostagem = "";
 function postar() {
     conteudopostagem = window.document.getElementById("postagem").value;
     window.document.getElementById("postrecente").innerHTML = conteudopostagem;
 }
