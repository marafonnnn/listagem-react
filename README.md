# listage-teste

## Run

Voce pode usar o setup `docker-compose` fornecido com o projeto. Para rodar o projeto, digite no terminal: `docker-compose up -d --build`.

## Build manual

Para montar a imagem docker utilize o arquivo `Dockerfile`:

`docker build -t listagem-image .` (atente-se ao ponto no final do comando)

para criar o container utilize o comando abaixo:

`docker run -it -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm listagem-image`

A aplicação estará disponível na porta 3001, exemplo:

`localhost:3001`

