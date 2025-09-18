const express = require('express') 
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
app.use(express.json())
app.use(cors())

// Definindo a porta a partir da variável de ambiente
const PORT = process.env.PORT 

// Rota principal
app.get('/', (req, res) => {
    res.json({
        message: 'Backend funcionando!',
        status: 'sucesso'
    })
})

// Rota de health check
app.get('/api/data', (req, res) => {
    res.json({
        message: 'Dados da API',
        timestamp: new Date().toISOString()
    })
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))