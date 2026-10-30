// Cria as tabelas no banco (rode uma única vez):
//   npm run db:criar-tabelas
//
// Os models não executam mais sync() sozinhos; assim, a cada início da API
// as tabelas NÃO são recriadas (o que apagaria os dados).
const db = require("./db");
require("./Proprietario");
require("./Veiculo");

db.sequelize
  // Para recriar do zero (APAGA OS DADOS), troque por: sync({ force: true })
  .sync()
  .then(() => {
    console.log("Tabelas criadas com sucesso!");
    process.exit(0);
  })
  .catch((erro) => {
    console.error("Erro ao criar tabelas:", erro);
    process.exit(1);
  });
