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

## O que o back-end precisa ter

- Rotas: `/proprietarios` e `/veiculos` (GET, POST, PUT /:id, DELETE /:id)
- Proprietário: `id`, `nome`, `telefone`
- Veículo: `id`, `placa`, `modelo`, `cor`, `proprietario_id`
- `GET /veiculos` com `include: Proprietario` (para exibir o nome do dono)

Se os nomes dos campos ou rotas forem diferentes, ajuste nos hooks e nas telas.
