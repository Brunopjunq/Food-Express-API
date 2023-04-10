# Food-Express API

Neste desafio técnico, foi desenvolvido uma API para gerenciamento de um cardápio online.

## Tecnologias utilizadas
- **Node.js** - o node foi utilizado por diversos fatores, como sua grande quantidade de pacotes, eficiência, escalabilidade, versatilidade, além de ser uma das opções mais populares com uma grande comunidade.
- **TypeScript** - o TypeScript pode trazer vários benefícios, como um feedback mais rápido dos erros, um ótimo suporte a IDE, ajudando no ambiente de desenvolvimento, além de outras vantagens como a tipagem estática.
- **MongoDB** - foi escolhido o MongoDB por algumas vantagens, como sua flexibilidade de dados, um ótimo desempenho e escalabilidade, e sua integração com o Node.js.
- **Joi** - o Joi foi utilizado para validação de dados, pois é uma biblioteca de fácil uso e tem uma boa documentação.
- **Express** - foi escolhido por ser uma das melhores opções de framework para construir aplicativos de web. É fácil de ser utilizado, além de ser escalável e ter bastante flexibilidade.

## Instruções para rodar o projeto localmente

Faça o git clone deste repositório na sua máquina local:
```
git clone https://github.com/Brunopjunq/Food-Express-API
```

Abra a pasta no terminal e rode o comando para instalar as dependências:
```
npm install
```

Create a .env file at the root of the project with the following environment variables:
Crie um arquivo .env na raiz do seu projeto baseado no arquivo .env.example e preencha as variáveis

IMPORTANTE: Você deve ter o MongoDB instalado em sua máquina local e deve rodar o servidor dele antes de prosseguir.

Rode o projeto com:
```
npm start
```

BANCO DE DADOS:

Você deve preencher as tabelas de "Users" and "Category" antes de prosseguir.

User:
```
{
  "email": "user@test.com",
  "password": "password"
}

 db.users.insert({email: "user@test.com", password: "password" });
```

Category:
```
{
  "name": "Alimentos",
  "parent": null
}

db.category.insert({name: "Alimentos", parent: null });

OR

{
  "name": "Pizza",
  "parent": "Alimentos"
}

db.category.insert({name: "Pizza", parent: "Alimentos" });

```

# Rotas

## Login

### POST /auth/login


Para fazer o login e receber o token de autenticação, utilizando o usuário criado no passo anterior, você deve enviar isto no body:

```
{
  "email": "user@test.com",
  "password": "password"
}
```

## Buscar todas as categorias

### GET /category

```
 O token recebido no login deve ser enviado no headers.
```


## Buscar todos os produtos

### GET /product

```
 O token recebido no login deve ser enviado no headers.
```


## Buscar produto pelo ID

### GET /product/:id

```
 O token recebido no login deve ser enviado no headers e deve ser enviado um id válido no parâmetro da rota.
```



## Criar um novo produto

### POST /product

```
 O token recebido no login deve ser enviado no headers.
```

Requisição que ser enviada pelo body:

```
 {
  "name": "Pizza de Calabresa",
  "qty": 15,
  "price": 18.50,
  "categories": ["Alimentos", "Italiano"]
}
```
OBS: Cada produto pode ter 1 ou mais categorias.

## Deletar um produto

### DELETE /product/:id

```
 O token recebido no login deve ser enviado no headers e deve ser enviado um id válido no parâmetro da rota.
```

## Atualizando um produto

### PATCH /product/:id

```
 O token recebido no login deve ser enviado no headers e deve ser enviado um id válido no parâmetro da rota.
```

Requisição que ser enviada pelo body:

```
 {
  "name": "Pizza de Calabresa",
  "qty": 15,
  "price": 18.50,
  "categories": ["Alimentos", "Italiano"]
}
```
OBS: Não é obrigatório enviar e alterar todos os campos.
