DROP DATABASE IF EXISTS crud;

CREATE DATABASE crud;

USE crud;

CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT, full_name VARCHAR(255) NOT NULL, birth_date DATE NOT NULL, email VARCHAR(60) NOT NULL, phone VARCHAR(11) NULL, cpf VARCHAR(11) NOT NULL, PRIMARY KEY (id)
);

INSERT INTO
    crud.usuarios (
        full_name, birth_date, email, phone, cpf
    )
VALUES (
        'Matheus Chiarello', '1997-08-28', 'chiarellomatheus@gmail.com', '11962451806', '44376047848'
    ),
    (
        'Teste da Silva', '1901-01-01', 'testedasilva@gmail.com', '11999999999', '12345678901'
    );