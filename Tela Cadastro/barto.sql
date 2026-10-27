create database barto2026;
use barto2026;

create table cadastro(
id_cadastro int not null auto_increment primary key,
nome varchar(100) not null,
telefone varchar(20)unique,
email varchar(50) unique,
senha varchar(15),
senha_confirme varchar(15)
);
select*from cadastro;

create table feedback
(
    id_feedback int not null auto_increment primary key,
    id_cadastro int not null unique,
    quantidade_coracao int not null,

    foreign key ( id_cadastro ) references cadastro(id_cadastro)
);

select*from feedback;

create table quiz
(
    id_quiz int not null auto_increment primary key,
    id_cadastro int not null unique,
    estilo_result varchar(200) not null,

    foreign key (id_cadastro ) references cadastro(id_cadastro)
);
