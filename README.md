# Express + Typescript + MongoDB (CRUD)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

# FRONT DO PROJETO: https://github.com/CleberSchiavon/react-employer-dashboard

## TODO
- Adicionar Swagger
- Adicionar Testes (Jest já está instalado)
- Aidicionar MonoRepo (TurboRepo Framework) com o Frontend

## Features

Esse repositório contém

- Express
- Node.JS
- MongoDB
- TypeScript
- DotEnv
- ESLint
- Husky with Conventional Commits
- Standard Version

## Dev Features

- 📈 Absolute Import and Path Alias — Uma alternativa do typescript pra importar arquivos sem precisar de "../../", ao invés disso usamos "@/(pasta)"
- 📏 ESLint and Prettier — O ESLint serve pra procurar problemas de escrita dentro do código (pode ser personalizado conforme as vontades do usuário)
- 💖 Linters — Mostra ao usuário todos os problemas no código
- 🐶 Husky, Lint Staged — Serve pra rodar uma série de scripts nos arquivos prestes a commitar ou a subir
- 🤖 Conventional Commit Lint — Serve pra conferir se os commits estão sendo feitos usando Conventional Commit (https://www.conventionalcommits.org/en/v1.0.0/)
- ⏰ Standard Version — Gera um changelog automatico a cada build, mostrando todas as mudanças que foram feitas

## Getting Started

### 1. Instalar dependências

```bash
npm run presetup
```

### 2. Configurar variáveis de ambiente:

Clone o arquivo .env.example e crie seu próprio .env

Certifique-se de substituir `MONGO_DB_CONNECTION_STRING` pela URI de conexão do seu MongoDB.

### 3. Rodar a aplicação

Rode a aplicação de forma local utilizando

```bash
npm run dev
```

## Sempre lembrar dos conventional commits

Esse projeto utiliza [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), é obrigatório o uso pra commitar

## Scripts NPM

Abaixo estão os scripts disponíveis para rodar a aplicação:

- **presetup**: Instala todas as dependências necessárias.
- **dev**: Roda a aplicação em modo de desenvolvimento com `nodemon`, que reinicia automaticamente o servidor em caso de alterações nos arquivos.
- **start**: Roda o build e inicia a aplicação em modo de produção.
- **build**: Compila o código TypeScript para JavaScript.

## Rodando a Aplicação

### Em Desenvolvimento

Para rodar a aplicação em modo de desenvolvimento, use o comando:

```sh
npm run dev
```

Isso irá iniciar o servidor com `nodemon`, permitindo recarregamentos automáticos durante o desenvolvimento.

### Em Produção

Para rodar a aplicação em modo de produção, use os comandos:

```sh
npm run build
npm start
```

Isso irá compilar o código TypeScript e iniciar o servidor com o código compilado

## Endpoints

A aplicação vem com os seguintes endpoints configurados:

- **GET /employer**: Retorna todos os funcionários.
- **GET /employer/:id**: Retorna um funcionário por ID.
- **POST /employer**: Cria um novo funcionário.
- **PUT /employer/:id**: Atualiza um funcionário por ID.
- **DELETE /employer/:id**: Deleta um funcionário por ID.

## Estrutura do Projeto

```sh
.
├── .husky - Configurações do Husky
├── src
│   ├── database
│   │   └── controllers
│   │       └── employer.controller.ts
│   │   └── models
│   │       └── Employer.model.ts
│   │   └── schemas
│   │       └── Employer.schema.ts
│   ├── routes
│   │   └── employer.routes.ts
│   ├── types
│   │   └── Employer.ts
│   │   └── Logger.ts
│   ├── utils
│   │   └── handlers
│   │       └── EmployerHandler.ts
│   │   └── APIMessages.ts
│   │   └── AppLogger.ts
│   │   └── index.ts
│   │   └── validateEnv.ts
│   └── index.ts
├── .env.example
├── .gitignore
├── commitlint.config.js - Configurações do CommitLint
├── nodemon.json
├── README.md <--
├── package.json
├── tsconfig.json
└── yarn.lock

## Autor

 <div style="display: flex; flex-direction: column; gap: 1rem; font-size: 15px">
 <a href="https://www.linkedin.com/in/cleberschiavon">
 <b>Cleber Henrique</b>
</a>
 <a href="mailto:cleberschiavon@outlook.com">
cleberschiavon@outlook.com
</a>
 </div>

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cleberschiavon)
```
