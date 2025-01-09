# 🛸 API em NodeJS puro (sem Express)

![image](https://miro.medium.com/v2/resize:fit:828/format:webp/1*_6Zxe5-EGDkbLlrqIeTsIA.png)

## 🗺️ Sobre o projeto

Este projeto está sendo desenvolvido para melhorar os conhecimentos em NodeJS puro, sem Express ou qualquer outra lib. Não terá um banco de dados vinculado, apenas users já criados na pasta "mocks", o que facilitará em alguns aspectos a criação de API, usando API Rest. Atualmente foi implementado o método GET para ser usado no endpoint /users, só lembrando que implementei uma Query Params para ser usado, que seria o "order", sendo que quando for colocado no link o endpoint /users?order=desc aparecerá os usuários em ordem descrescente.

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