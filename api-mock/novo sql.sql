create database sistema_general;

use sistema_general;

create table usuarios (
	id int auto_increment primary key,
    nome varchar (100) not null,
    email varchar (100) not null,
    endereco varchar (100) not null
);
select * from usuarios;

insert into usuarios (nome, email, endereco) values 
('Vitoria', 'vk@gmail.com', 'rua da casa torta'),
('Luiz Henrique', 'lh@gmail.com', 'rua do bairro torto');

create table dados_pessoais (
	id int auto_increment primary key,
    nome_completo varchar (100) not null,
    telefone varchar (100) not null,
    email varchar (100) not null,
    endereco varchar (100) not null
);
select * from dados_pessoais;