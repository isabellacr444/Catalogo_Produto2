const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Produto = require("./database/Produto"); // Importando o modelo Produto

// Database connection
connection.authenticate()
    .then(() => {
        console.log("Conexão com o BD feita com sucesso!");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota principal (listar produtos)
app.get("/", (req, res) => {
    Produto.findAll({ raw: true, order: [["id", 'DESC']] })
        .then(produtos => {
            res.render("index", { produtos: produtos });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Erro ao listar produtos');
        });
});

// Rota para visualizar a página de produtos
app.get("/produtos", (req, res) => {
    res.render("produtos");
});

// Rota para salvar um novo produto
app.post("/salvarcadastro", (req, res) => {
    const { nome, descricao, preco, image } = req.body;  // Pegando os dados do corpo da requisição

    Produto.create({
        nome,
        descricao,
        preco,
        image
    })
    .then(() => {
        res.redirect("/");
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Erro ao salvar produto');
    });
});

// Rota para visualizar os detalhes de um produto específico
app.get("/produto/:id", (req, res) => {
    const id = req.params.id;
    
    Produto.findOne({
        where: { id: id }
    })
    .then(produto => {
        if (produto) {
            res.render("produto", { produto });
        } else {
            res.redirect("/");
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Erro ao buscar produto');
    });
});

// Iniciar o servidor na porta 4000
app.listen(4000, () => {
    console.log("App rodando na porta 4000!");
});
