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

create table feedback
(
    id_feedback int not null auto_increment primary key,
    id_cadastro int not null unique,
    quantidade_coracao int not null,

    foreign key ( id_cadastro ) references cadastro(id_cadastro)
);