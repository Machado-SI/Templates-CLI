const pgp = require('pg-promise')()

const dbConfig = {
  host: 'localhost', // Ou o endereço do seu servidor PostgreSQL
  port: 5432,       // A porta padrão do PostgreSQL
  database: 'seu_banco_de_dados', // O nome do seu banco de dados
  user: 'seu_usuario',    // Seu nome de usuário do PostgreSQL
  password: 'sua_senha'    // Sua senha do PostgreSQL
};

const db = pgp(dbConfig)

module.exports = db