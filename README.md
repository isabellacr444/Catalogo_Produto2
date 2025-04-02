                           Projeto loja de artesanato
Formulário com JavaScript: 
  O novo sistema de catálogo online permite que você mostre todos os nossos produtos de forma clara e organizada. Os clientes podem visualizar imagens, descrições e preços de maneira simples, sem a necessidade de folhear um catálogo impresso. Cada produto é exibido com todos os detalhes necessários para facilitar a decisão de compra e modernizar a interface do site, para que aqueles que utilizarem o site tenha uma experiência divertida. E para isso acontecer, foi necessário utilizar o JavaScript e o mysql para o banco de dados. 
Acompanhe o nosso passo a passo: 
A utilização do sistema baseado em Node.js, MySQL e Sequelize garante que a loja tenha um sistema robusto e eficiente, capaz de armazenar, atualizar e exibir os produtos de forma rápida e segura. Isso facilita a gestão interna e oferece uma plataforma estável para seus clientes.

1-	Primeiro criamos uma pasta e demos a ela o nome de “Catalogo_Produtos” no explorador de arquivos, Em seguida abrimos a nossa pasta no vscode e já começamos os trabalhos. 

2-	Para iniciar o nosso projeto, foi necessário instalarmos algumas bibliotecas. Essas bibliotecas, foram pelo terminal do vscode, nas quais para serem instaladas foi necessário digitarmos os seguintes comandos:
•	npm init -y-> dá início a um novo projeto Node.js criando um arquivo package, json.
•	npm install-> Esse comando instala as dependências de um projeto Node.js.
•	npm install ejs-> Serve para instalar o ejs (Embedded JavaScript).
•	npm install mysql2 –save-> É utilizado para interagir com bancos de dados MySQL, no Node.js.
•	npm install express-> Serve para instalar o framework web express, como uma dependência de aplicação web.
•	Npm install sequelize –save-> Instala o pacote Sequelize e salva no arquivo package, json.
•	Npm install body-parse-> Converte os dados de uma requisição para vários formatos como json, formulários codificados em URL. 

3-	Em seguida, demos início ao nosso banco de dados usando o mysql: Criamos uma tabela com o nome “Catalogo_Produtos” Apartir desse momento, o nosso banco de dados começou a puxar os arquivos do nosso projeto e criou algumas tabelas dentro da tabela central: Tables, views, stored procedures, functions.

4-	Voltamos para o vscode e criamos algumas pastas para completar o nosso projeto:
•	Data base = puxa as informações para o mysql. 
•	Navbar.ejs = Contém as informações da imagem. 
•	Index.ejs = Informações do produto.
•	 Layout.ejs = O modelo do nosso formulário.
•	 Produto.ejs = Armazena algumas informações dos produtos como: Nome/ descrição/ preço/imagem. 
•	novo.ejs = Informação dos produtos. 
•	Index.js = Informações para o mysql. / Definimos o nosso local host: 4000
•	App.js = Informações para o servidor rodar. 

  As maiores dificuldades foram fazer o site funcionar de fato com problemas no app.js, de maneira objetiva e organizada arrumamos os erros com ajuda do Body-parser e inteligência artificial com uso consciente. Executamos usando:
PS C:\Users\DEV_SEDUC_A\Documents\Catalogo_Produto2> node --watch .\index.js 
Restarting '.\\index.js'
App rodando na porta 4000! 
Sobre o site: 
localhost:4000
Ele tem 4 barras de pesquisas, são elas -> 
Nome-> O nome do produto;
Descrição-> Informação mais precisa sobre o produto;
 Preço-> Valor a ser pago;
 Imagem-> URL da imagem;
Salvar-> Salva as informações.;
  Foi um processo longo com muitos desafios e erros, mas com muita persistência conseguimos fazer um site completo com alta qualidade para nossos clientes tendo uma interface com catálogos de produtos bem divertido.

Escola: Senai Luiz Varga
Curso: Desenvolvimento de Sistemas 
Alunas: Laiza Vitória e Isabella Romão
Professor: Celso Carvalho

