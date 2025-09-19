const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

// Variável de ambiente port
const PORT = process.env.PORT

app.use(express.json())

// Rota principal
app.get('/', (req, res) => {
    res.json({ message: 'hello world'})
})

// Rota de health check
app.get('/api/health', (req, res) => {
    res.json({
        message: 'informações da API',
        timestamp: new Date().toISOString()
    })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

