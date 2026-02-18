# Desafio Técnico - Sistema de Cadastro de Clientes (Full Stack)

Este projeto foi desenvolvido como parte de um teste técnico para a vaga de Desenvolvedor Full Stack. A aplicação consiste em um sistema de cadastro onde clientes podem enviar dados e documentos, e operadores podem gerenciar esses registros.

## 🎯 Objetivo do Projeto

Demonstrar proficiência no desenvolvimento de uma aplicação ponta a ponta, focando em:

Upload de arquivos: Integração direta com AWS S3.

Persistência de dados: Modelagem e manipulação de dados com MongoDB e Prisma.

Criação e consumo de API: Backend robusto em Node.js e frontend dinâmico em Next.js.

UX/UI: Interfaces distintas para Clientes (formulário) e Operadores (dashboard admin).

## 👥 Funcionalidades

#### Interface do Usuário (Cliente)

Formulário para preenchimento de dados pessoais (Nome, E-mail, Telefone...).

Upload de arquivos (imagem do perfil do usuário).

#### Interface do Operador (Admin)

Listagem completa de clientes cadastrados.

Visualização de detalhes e edição de dados.

Acesso direto ao arquivo armazenado no AWS S3 via URL.

## 🚀 Tecnologias

### Frontend

- Next.js (Framework React)

- Axios (Cliente HTTP)

- Material UI (MUI) (Biblioteca de componentes)

## 🛠️ Como Executar o Projeto Localmente

1. Clonar o Repositório

Abra o seu terminal e execute o comando abaixo:

``` bash
git clone https://github.com/dev-brunosantos/Escoramento.com.git
```

Em seguida, entre na pasta raiz do projeto:

``` bash
cd seu-repositorio
``` 

2. Configurando o Frontend

- Acessar a pasta (a partir da raiz):

``` bash
cd front
``` 

- Instalar as dependências:

``` bash
npm install --force
``` 

- Configurar Variáveis de Ambiente:

Crie um arquivo .env na pasta backend e adicione suas credenciais do MongoDB e AWS S3:

```
NEXT_PUBLIC_API_URL = "URL DE CONEXÃO DA API (BACK)"
```

- Rodar em modo de desenvolvimento:

``` bash
npm run dev
``` 

- Build da aplicação:

``` bash
npm run build
``` 

## 📦 Scripts Disponíveis

No Backend e Frontend:

- npm install: Baixa todas as bibliotecas necessárias.

- npm run dev: Inicia o servidor local para desenvolvimento com hot-reload.

- npm run build: Compila o código TypeScript/Next.js para JavaScript otimizado para produção.
