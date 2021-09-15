# projeto_blog_desafio_bh2
Desafio Proposto para um BLOG que consome API xhelpers
### Projeto Blog: **BLOGGEST** 

### GERAL  
Projeto consiste em criar uma página de Blog que se consuma a API xhelpers.  
O objetivo final do projeto ainda não foi atingido.  
Devido algumas dificuldades com o nível de conhecimento e experiência necessários para compreender xhelpers, decidi tentar o projeto criando uma API própria e consumindo-a.  

### Front End  
A página está semi-pronta. Há várias melhorias a serem feitas, mas ja tem certa responsividade e intertividade.  
Dentre as melhorias necessárias, colocar a opção de digitar um título para a nova postagem e edição do texto,  
capturar a data para apresentá-la no corpo,  
inserir as postagens mais recentes no topo (mesmo sem refresh),  
talvez algumas alterações de cores, entre outras.  

### Back End  
O backend já se comunica com uma API gratuíta do site *jsonplaceholder.typicode.com* que gera postagens fictícias.  
Depois ele converte isso para uma API própria sando express para disponibilizá-la ao Front.  
O Back ainda não recebe nenhum dado do Front e tampouco salva dados. As postagens são todas estáticas do site citado.  
Isto ainda será mudado para que as postagens do usuário possam ser salvas e recarregadas posteriormente.  

