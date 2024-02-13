# CADASTRO DE USUÁRIOS

## Informações Gerais

- Esse projeto será um CRUD simples para cadastro de usuários com as informações abaixo:
  - Nome Completo
  - Data de Nascimento
  - Celular
  - Email
  - CPF

## Passo a passo para criação da aplicação do zero

- Iniciar um projeto Node.js com "npm init -y"
- Instalar as dependências:
  - Nodemon
  - Express
  - Chai, Mocha e Sinon
  - MySQL2
  - ESLint
- Criar os arquivos adicionais:
  - .gitignore
  - .eslintignore
  - .eslintrc.json
- Criar as pastas para organização da aplicação:
  - src
    - db
      - connection.js
      - formsDB.js
    - routes
    - app.js
    - server.js
  - tests
- Criar o arquivo docker-compose para containerização do MySQL

  - Criar um script.sql básico para criação inicial do banco e depois colar dentro do docker
  - Executar o MySQL dentro do docker executando o script.sql

  - ```cmd
    ➜ docker cp ./script.sql 669ad49340ed:/
    ➜ docker exec -it 669ad49340ed bin/sh -c 'mysql -uroot -proot </script.sql'
    ```
