# Estacionamento

API REST de estacionamento para cadastro e consulta de proprietários e veículos. O backend usa Node.js, Express, Sequelize e MySQL.

## Requisitos

- Node.js e npm
- MySQL Server em execução
- Acesso ao banco com permissão para criar tabelas

## Como iniciar o backend

### 1. Acesse a pasta do backend e instale as dependências

No terminal, a partir da raiz do projeto:

```powershell
cd .\BackEstacionamento
npm install
```

### 2. Crie o banco de dados

Abra `BackEstacionamento/banco.sql` no MySQL Workbench e execute o script. Ele cria o banco `estacionamento` e seleciona esse banco para uso.

Se o cliente de linha de comando do MySQL estiver no `PATH`, também é possível executar no PowerShell, dentro de `BackEstacionamento`:

```powershell
Get-Content .\banco.sql | mysql -u root -p
```

O script SQL **não cria as tabelas**; elas serão criadas no próximo passo.

### 3. Configure o acesso ao MySQL

Por padrão, a aplicação usa:

| Variável | Valor padrão |
| --- | --- |
| `DB_HOST` | `localhost` |
| `DB_NAME` | `estacionamento` |
| `DB_USER` | `root` |
| `DB_PASS` | `root` |

Se o seu MySQL usar outros dados de acesso, defina as variáveis no PowerShell antes de executar os comandos do backend:

```powershell
$env:DB_HOST = "localhost"
$env:DB_NAME = "estacionamento"
$env:DB_USER = "root"
$env:DB_PASS = "sua_senha"
```

As variáveis são lidas diretamente do ambiente pelo Sequelize. Elas permanecem disponíveis apenas naquela sessão do terminal.

### 4. Crie as tabelas

Ainda na pasta `BackEstacionamento`, execute:

```powershell
npm run db:criar-tabelas
```

O comando cria as tabelas definidas pelos models do Sequelize. Pode ser executado novamente para garantir a existência das tabelas; ele não usa a opção que apaga e recria os dados.

### 5. Inicie a API

Para desenvolvimento, com reinicialização automática ao alterar arquivos:

```powershell
npm run dev
```

Ou, para iniciar normalmente:

```powershell
npm start
```

O servidor fica disponível em `http://localhost:8081`. A rota `GET /` responde `Estou aqui`.

## Banco de dados

O banco `estacionamento` contém duas tabelas:

### `proprietario`

| Campo | Descrição |
| --- | --- |
| `id_proprietario` | Identificador numérico gerado automaticamente |
| `nome` | Nome do proprietário |
| `cpf` | CPF do proprietário |
| `createdAt` / `updatedAt` | Datas de criação e atualização gerenciadas pelo Sequelize |

### `veiculo`

| Campo | Descrição |
| --- | --- |
| `id_veiculo` | Identificador numérico gerado automaticamente |
| `placa` | Placa do veículo |
| `ano` | Ano do veículo |
| `mensalidade` | Valor mensal, com duas casas decimais |
| `fk_proprietario` | Identificador do proprietário relacionado |
| `createdAt` / `updatedAt` | Datas de criação e atualização gerenciadas pelo Sequelize |

`veiculo.fk_proprietario` referencia `proprietario.id_proprietario` e é obrigatório. A chave estrangeira está configurada com exclusão em cascata: ao excluir um proprietário, os veículos associados também são excluídos.

## Endpoints

Todas as rotas abaixo são prefixadas pela URL `http://localhost:8081`.

| Método | Rota | Ação |
| --- | --- | --- |
| `GET` | `/proprietario` | Lista os proprietários |
| `GET` | `/proprietario/:id` | Busca um proprietário pelo identificador |
| `POST` | `/proprietario` | Cadastra um proprietário |
| `PUT` | `/proprietario/:id` | Atualiza um proprietário |
| `DELETE` | `/proprietario/:id` | Exclui um proprietário |
| `GET` | `/veiculo` | Lista os veículos |
| `GET` | `/veiculo/:id` | Busca um veículo pelo identificador |
| `POST` | `/veiculo` | Cadastra um veículo |
| `PUT` | `/veiculo/:id` | Atualiza um veículo |
| `DELETE` | `/veiculo/:id` | Exclui um veículo |

Exemplo de cadastro de proprietário:

```json
{
  "nome": "Ana Souza",
  "cpf": "12345678900"
}
```

Exemplo de cadastro de veículo (use em `fk_proprietario` o identificador de um proprietário existente):

```json
{
  "placa": "ABC1D23",
  "ano": 2022,
  "mensalidade": 250.00,
  "fk_proprietario": 1
}
```

Para testar, por exemplo, a criação de um proprietário no PowerShell enquanto o servidor estiver em execução:

```powershell
Invoke-RestMethod -Method Post -Uri http://localhost:8081/proprietario -ContentType "application/json" -Body '{"nome":"Ana Souza","cpf":"12345678900"}'
```
