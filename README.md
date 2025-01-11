# 🛸 API em NodeJS puro (sem Express)

![image](https://miro.medium.com/v2/resize:fit:828/format:webp/1*_6Zxe5-EGDkbLlrqIeTsIA.png)

## 🗺️ Sobre o projeto

Este projeto foi desenvolvido para melhorar os conhecimentos em NodeJS puro, sem usar Express. Não terá um banco de dados vinculado, apenas users já criados na pasta "mocks", o que facilitará em alguns aspectos a criação de API, usando API Rest (GET, POST, PUT, DELETE). Está implementado toda a regra de negócio para listar os users, ver um user específico (procurando pelo ID), criação de user, atualização de user e deleção de user.

## Endpoints

- List Users (GET): /users
- Find User (GET): /users/:id
- Create User (POST): /users/:id
- Update User (PUT): /users/:id
- Delete User (DELETE): /user/:id

## ⚒️ Tecnologias

- JavaScript
- NodeJS

## 🚀 Executando o código

Para clonar e executar este aplicativo, você precisará de [Git](https://git-scm.com) e NodeJS Instalado em seu computador.

### Clonando o repositório

```bash
# Clone este repositório
$ git clone https://github.com/JoaoAlves20/API-in-nodejs.git

#  Acesse a pasta do projeto
$ cd API-in-nodejs
```

### Rodando a aplicação
```bash
# Instale as dependências (caso tenha alguma)
$ yarn

# Execute a aplicação
$ yarn dev
```