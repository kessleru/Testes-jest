# Testes-jest (Jest + ES Modules)

Estudo em cima da documentação do jest usando sintaxe ES Modules (`import/export`) em JavaScript.

[![Jest Docs](https://img.shields.io/badge/-Jest%20Docs-151b23?style=for-the-badge&logo=jest&labelColor=262c36&logoColor=C21325)](https://jestjs.io/pt-BR/)

## Pré-requisitos

- Node.js 18+ (recomendado)

## Instalação

```bash
npm install
```

## Rodando os testes

```bash
npm test
```

Modo watch:

```bash
npm run test:watch
```

## Estrutura

- `src/core/calculadora.js`: funções base usadas nos testes.
- `tests/core/calculadora.test.js`: suíte da calculadora.
- `tests/matchers/primitives.test.js`: exemplos com `null`, `zero` e números.
- `tests/matchers/objects.test.js`: exemplos com `toEqual` e `toStrictEqual`.
- `tests/matchers/arrays.test.js`: exemplos com `toContain`.
- `tests/errors/throwing.test.js`: exemplos com `toThrow`.
- `jest.config.mjs`: configuração do Jest.

> Observação: alguns testes foram mantidos propositalmente com falha para estudo de mensagens de erro do Jest.
