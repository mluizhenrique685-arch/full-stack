-- cria um banco de dados onde vamos trabalhar
create database sistema_produtos;

use sistema_produtos;

-- cria a tabela 'produtos' com algumas colunas basicas 
 create table produtos (
	id int auto_increment primary key, -- ID ÙNICO
    nome varchar(100) not null, -- nome produtos
    email varchar(120) not null, -- email (exemplo genérico)
    teleofne varchar(20), -- telefone
    cpf varchar (14), -- cpf
    endereco varchar (150) -- endereco simples
);

-- insere dois registros
insert into produtos (nome, email, telefone, cpf, endereco) values
('Eduardo Ramos', 'edu.ramos@orutos.com', '1199-999', '44.44.44.41', 'rua orutos sem fim');




select * from produtos;