# Front - Sistema de Estacionamento (React Native + Expo)

Adaptação do Projeto Padaria (Aula 13) para o tema estacionamento.
Entidades: **Proprietário** e **Veículo** (um veículo pertence a um proprietário).

## Como usar

1. Crie o projeto: `npx create-expo-app@latest ./`
2. Limpe os exemplos: `npm run reset-project` (e apague a pasta `example`)
3. Instale o axios: `npm install axios`
4. Copie a pasta `src` deste Front por cima da `src` do projeto
5. Abra `src/constants/api.ts` e troque o IP pelo IPv4 da máquina do back-end
6. Rode o back-end (`npm run dev`) e o front (`npm run web`)

## Estrutura

```
src/
├── app/            telas e navegação (Expo Router)
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── proprietarios/  index, cadastrar, editar
│   └── veiculos/       index, cadastrar, editar
├── components/     CampoTexto.tsx
├── constants/      api.ts, cores.ts, estilos.ts
└── hooks/          useProprietarios.ts, useVeiculos.ts, avisar.ts
```

## Como o front conversa com o back (BackEstacionamento)

- Porta **8081** (ajuste o IP em `src/constants/api.ts`)
- Rotas no **singular**: `/proprietario` e `/veiculo` (GET, POST, PUT /:id, DELETE /:id)
- Proprietário: `id_proprietario`, `nome`, `cpf`
- Veículo: `id_veiculo`, `placa`, `ano`, `mensalidade`, `fk_proprietario` (obrigatório)
- `GET /veiculo` não traz o dono: a tela de veículos busca os proprietários e procura pelo `fk_proprietario`
- No back, excluir um proprietário apaga também os veículos dele (`onDelete: CASCADE`)
