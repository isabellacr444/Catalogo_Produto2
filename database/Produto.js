const Sequelize = require("sequelize");
const connection = require("./database");  // O arquivo de conexão com o banco

const Produto = connection.define('produto', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    preco: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

Produto.sync();  // Cria ou sincroniza a tabela de acordo com o modelo

module.exports = Produto;