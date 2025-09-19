// migrate.js
require('dotenv').config(); // Carrega as variáveis do .env
const databaseUrl = process.env.DATABASE_URL;

const { runner } = require('node-pg-migrate');

runner({
    databaseUrl: databaseUrl,
    direction: 'up',           // ou 'down'
    migrationsTable: 'migrations', // nome da tabela que contém as informações
    dir: './migrations', // pasta onde estão suas migrations
    count: Infinity,
    driver: 'pg',
    noLock: true
})
  .then(() => {
    console.log('Migrations executadas com sucesso!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Erro ao rodar migrations:', err);
    process.exit(1);
})