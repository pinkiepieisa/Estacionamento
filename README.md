# Estacionamento

## Banco de dados

Execute o script abaixo no MySQL para criar e popular o banco de dados:

```sql
CREATE DATABASE estacionamento;
USE estacionamento;

-- Tabela proprietario
CREATE TABLE proprietario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    telefone VARCHAR(20)
);

-- Tabela veiculo
CREATE TABLE veiculo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(10),
    modelo VARCHAR(50),
    cor VARCHAR(30),
    proprietario_id INT,

    FOREIGN KEY (proprietario_id)
    REFERENCES proprietario(id)
);

INSERT INTO proprietario (nome, telefone)
VALUES
('Carlos Silva', '11999999999'),
('Maria Souza', '11888888888');

INSERT INTO veiculo (placa, modelo, cor, proprietario_id)
VALUES
('ABC1D23', 'Gol', 'Prata', 1),
('XYZ9K88', 'Onix', 'Preto', 1),
('JKL4M56', 'HB20', 'Branco', 2);

-- Teste do JOIN
SELECT veiculo.placa, veiculo.modelo, proprietario.nome
FROM veiculo
INNER JOIN proprietario
ON veiculo.proprietario_id = proprietario.id;
```
