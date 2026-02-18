<!-- # Desafio Técnico: Projeto Full Stack (Node.js & Next.js) -->
<!-- # Desafio Técnico: Projeto Full Stack (Node.js & Next.js)

Este é um projeto full stack que utiliza Node.js com Prisma e MongoDB no backend, e Next.js com Material UI no frontend. A aplicação também possui integração com AWS S3 para armazenamento de arquivos. -->

# Desafio Técnico - Sistema de Cadastro de Clientes (Back)

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

### Backend

- Node.js com TypeScript

- Express (Framework web)

- Prisma (ORM)

- MongoDB (Banco de dados)

- AWS SDK (Integração com S3)

## 🛠️ Como Executar o Projeto Localmente

1. Clonar o Repositório

Abra o seu terminal e execute o comando abaixo:

``` bash
git https://github.com/dev-brunosantos/Escoramento.com.git
```

Em seguida, entre na pasta raiz do projeto:

``` bash
cd seu-repositorio
``` 

2. Configurando o Backend

- Acessar a pasta:

``` bash
cd back
```

- Instalar as dependências:

``` bash
npm install --force
``` 

- Configurar Variáveis de Ambiente:

Crie um arquivo .env na pasta back e adicione suas credenciais do MongoDB e AWS S3:

```
PORT=PORTA DA APLICAÇÃO
NODE_ENV=development
DATABASE_URL="URL DE CONEXÃO DO MONGO DB"
JWT_SECRET="SEGREDO DO JWT"
JWT_EXPIRES_IN=1d
AWS_ACCESS_KEY_ID= "ACCESS_KEY GERADO NA AWS"
AWS_SECRET_ACCESS_KEY= "SECRET_ACCESS GERADO NA AWS"
AWS_REGION= "REGIÃO DO S3 DA AWS"
AWS_BUCKET_NAME= "NOME DO BUCKET"
AWS_S3_BUCKET_URL="NOME DO BUCKET"
```
___

###### => OBS: Existe um arquivo um arquivo '.env.example' com o modelo das variáveis de ambiente usadas na aplicação 
___
- Rodando scripts do PRISMA:

``` bash
npx prisma db push
npx prisma generate
``` 

- Rodar em modo de desenvolvimento:

``` bash
npm run dev
``` 
___

###### => OBS: Todos os usuários são criados com a ROLE de CLIENT. Com isso, para realização do teste como administrador, deverá alterar o campo ROLE diretamente no banco
___

- Build da aplicação:

``` bash
npm run build
``` 

## 📦 Scripts Disponíveis

No Backend e Frontend:

- npm install: Baixa todas as bibliotecas necessárias.

- npm run dev: Inicia o servidor local para desenvolvimento com hot-reload.

- npm run build: Compila o código TypeScript/Next.js para JavaScript otimizado para produção.

## 📝 Notas Adicionais

Certifique-se de que o MongoDB está acessível.

Caso utilize o Prisma, você pode precisar rodar npx prisma generate após instalar as dependências para garantir que o cliente do banco de dados seja criado corretamente.

##### => Como encontrar a URL de conexão do MongoDB Atlas?

<img width="1319" height="237" alt="image" src="https://github.com/user-attachments/assets/cd5b9f75-575a-4e95-9839-815ec63ef773" />

<img width="775" height="306" alt="image" src="https://github.com/user-attachments/assets/ad86eb5f-0c68-4fcb-a9fb-0a00d8b7e882" />

<img width="771" height="232" alt="image" src="https://github.com/user-attachments/assets/efd90c58-e73e-4ca4-aad8-72c639569ce6" />
