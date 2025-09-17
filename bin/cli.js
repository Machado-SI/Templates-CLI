#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra')
const path = require('path')

// Nativo do Node.js
// Uso do execSync para rodar comandos do terminal
// Ex: npm install
const { execSync } = require('child_process')

const progam = new Command();

progam
    .name('meu-cli')
    .description('Meu CLI para criar templates de projetos')
    .version('1.0.0')
    .command('create')
    .description('Cria um novo projeto')
    .argument('<nome>', 'nome do projeto')
    .option('-t', '--type <tipo>', 'fullstack ou backend', 'backend')
    .action((nome, options) => {
        criarProjeto(nome, options.type)
    })

progam.parse()

function criarProjeto(nome, tipo) {
    // Vai pegar o caminho atual de onde o comando foi executado com process.cwd()
    // E juntar com o nome do projeto no final assim criando a pasta do template no lugar certo
    const caminho = path.join(process.cwd(), nome)

    console.log(`Criando projeto ${nome} do tipo ${tipo} em ${caminho}`)
    try {
    // Irá pegar o caminho do template certo e copiar para a variável caminho
    const templatePath = path.join(__dirname, '..', 'templates', tipo)   
    fs.copySync(templatePath, caminho)

    // Instalar dependências
    console.log('Instalando dependências...')

    if(tipo === 'fullstack') {
        // Backend
        process.chdir(path.join(caminho, 'backend-template'))

        // stdio: 'inherit' serve para mostrar o progresso da instalação 
        // Sem isso, o terminal ficaria parado sem mostrar nada
        execSync('npm install', { stdio: 'inherit' })

        // Frontend
        process.chdir(path.join(caminho, 'frontend-template'))
        execSync('npm install', { stdio: 'inherit' })
    } else {
        //backend
        process.chdir(caminho)
        execSync('npm install', { stdio: 'inherit' })
    }

    console.log('Projeto criado com sucesso!')
    } catch (error) {
        console.error('Erro ao criar o projeto:', error)
    }
}