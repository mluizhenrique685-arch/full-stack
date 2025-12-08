create database copa_mundo;
-- crie a tabela selecoes com 3 colunas 
create table selecoes (
	id int auto_increment primary key, -- id unico que aumenta automaticamente 
    selecao varchar (100) not null, -- nome da selecao, ate 100 caracteres
    grupo char (1) not null -- grupo da selecao, apenas uma letra (A, B, c)
);

select * from selecoes;

insert into selecoes (selecao, grupo) values
('Brasil', 'A'),
('Franca', 'B'),
('Argentina', 'C'),
('Nigeria', 'C');

select * from selecoes;

