CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE  
)

INSERT INTO pessoas (nome, nascimento) VALUES ('Paulo', '1993-05-31')
INSERT INTO pessoas (nome, nascimento) VALUES ('Marcos', '1990-03-20')
INSERT INTO pessoas (nome, nascimento) VALUES ('Joao', '1991-21-25')