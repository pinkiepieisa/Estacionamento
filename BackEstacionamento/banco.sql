-- Execute no MySQL antes de iniciar a API
create database if not exists estacionamento;
use estacionamento;

-- Teste (rode DEPOIS de criar as tabelas com: npm run db:criar-tabelas)
-- insert into proprietario(nome, cpf, createdAt, updatedAt) values("Mario", "332323", now(), now());
-- insert into veiculo(placa, ano, mensalidade, fk_proprietario, createdAt, updatedAt) values("gav-99", 2017, "1423.58", 1, now(), now());
-- select * from proprietario;
-- select * from veiculo;
