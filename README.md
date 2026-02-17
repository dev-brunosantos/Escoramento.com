# Projeto Full Stack (Node.js & Next.js)

Este é um projeto full stack que utiliza Node.js com Prisma e MongoDB no backend, e Next.js com Material UI no frontend. A aplicação também possui integração com AWS S3 para armazenamento de arquivos.

## 🚀 Tecnologias

### Backend

- Node.js com TypeScript

- Express (Framework web)

- Prisma (ORM)

- MongoDB (Banco de dados)

- AWS SDK (Integração com S3)

### Frontend

- Next.js (Framework React)

- Axios (Cliente HTTP)

- Material UI (MUI) (Biblioteca de componentes)

## 🛠️ Como Executar o Projeto Localmente

1. Clonar o Repositório

Abra o seu terminal e execute o comando abaixo:

git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

Em seguida, entre na pasta raiz do projeto:

``` bash
cd seu-repositorio
``` 

2. Configurando o Backend

Acessar a pasta:
``` bash
cd backend
```

Instalar as dependências:

``` bash
npm install
``` 

Configurar Variáveis de Ambiente:
Crie um arquivo .env na pasta backend e adicione suas credenciais do MongoDB e AWS S3:

DATABASE_URL="mongodb+srv://..."
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_REGION="..."
AWS_S3_BUCKET="..."


Rodar em modo de desenvolvimento:

``` bash
npm run dev
``` 

Build da aplicação:

``` bash
npm run build
``` 

3. Configurando o Frontend

Acessar a pasta (a partir da raiz):

``` bash
cd frontend
``` 

Instalar as dependências:

``` bash
npm install --force
``` 

Rodar em modo de desenvolvimento:

``` bash
npm run dev
``` 

Build da aplicação:

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
