# Listagem em ReactJS

Projeto desenvolvido em React Consumindo uma API e renderizando os dados em uma lista simples, com detalhamento. 

## Run

Voce pode usar o setup `docker-compose` fornecido com o projeto. Para rodar o projeto, digite no terminal: `docker-compose up -d --build`.

## Build manual

Para montar a imagem docker utilize o arquivo `Dockerfile`:

`docker build -t listagem-image .` (atente-se ao ponto no final do comando)

para criar o container utilize o comando abaixo:

`docker run -it -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm listagem-image`

A aplicação estará disponível na porta 3001, exemplo:

`localhost:3001`


## Tecnologias utilizadas

* ReactJs - [Documentação](https://pt-br.reactjs.org/)
    * Utilizado ContextAPI, alguns hooks (UseCallback, UseState, UseEffect, etc)
* DataTable - [Documentação](https://react-data-table-component.netlify.app/?path=/story/getting-started-intro--page)
* React-loading - [Documentação](https://www.npmjs.com/package/react-loading)
* Axios - [Documentação](https://axios-http.com/docs/intro)
* Jest (testes com mock do axios na chamada da API) - [Documentação](https://jestjs.io/pt-BR/)


