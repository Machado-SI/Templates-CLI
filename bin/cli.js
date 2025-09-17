#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra')
const path = require('path')

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
        
    })

progam.parse()