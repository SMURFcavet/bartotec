create database barto2026;
use barto2026;

create table cadastro(
id_cadastro int not null auto_increment primary key,
nome varchar(100) not null,
telefone varchar(20),
email varchar(50),
senha varchar(10),
senha_confirme varchar(10)
);
select*from cadastro;
