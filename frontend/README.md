# Frontend GreenER

Base React + TypeScript + Vite da parte de Rainan na task #25.
As páginas, o layout comum e a configuração das rotas serão feitos pela Nadla.

## Executar localmente

Use Node **24.x** e npm **11.x**. Abra o terminal nesta pasta:

```powershell
npm.cmd ci
npm.cmd run dev
```

Acesse **http://localhost:5173**. O frontend abre mesmo sem o backend.

No PowerShell deste ambiente, use `npm.cmd`: `npm` tenta executar um script
bloqueado pela política local. Em outros terminais, `npm` também funciona.

## Comandos

| Comando                    | Finalidade                                         |
| -------------------------- | -------------------------------------------------- |
| `npm.cmd run dev`          | Desenvolvimento com atualização automática         |
| `npm.cmd run build`        | Verificar TypeScript e gerar `dist/`               |
| `npm.cmd run preview`      | Conferir o build em http://localhost:4173          |
| `npm.cmd run lint`         | Verificar problemas de código sem alterar arquivos |
| `npm.cmd run format`       | Aplicar Prettier aos arquivos do frontend          |
| `npm.cmd run format:check` | Conferir formatação sem alterar arquivos           |
| `npm.cmd test`             | Executar os testes do serviço HTTP                 |

Execute `build` antes de `preview`. Preview é uma conferência local,
não a configuração de publicação da aplicação.

## Backend e proxy

O serviço `src/services/api.ts` chama caminhos relativos em `/api`.
O Vite encaminha essas chamadas para `http://localhost:3000`.

O backend atual ainda não tem prefixo global `/api`; o proxy remove esse
prefixo por padrão: `/api/services` vira `/services` no backend.
Esse exemplo não significa que a rota de serviços já esteja implementada.

Os padrões funcionam sem criar `.env`. Para personalizar:

```powershell
Copy-Item .env.example .env
```

| Variável            | Padrão                  | Uso                                                           |
| ------------------- | ----------------------- | ------------------------------------------------------------- |
| `API_PROXY_TARGET`  | `http://localhost:3000` | Endereço do backend visto pelo processo Vite                  |
| `API_PROXY_REWRITE` | `true`                  | Remover `/api`; use `false` quando o backend adotar o prefixo |

Reinicie o Vite depois de alterar o ambiente. Essas variáveis são lidas
na configuração do servidor; não recebem prefixo `VITE_` nem são expostas
pelo mecanismo de ambiente do navegador.

Em Docker, coordenar com a #22 o nome do serviço e usar, por exemplo,
`API_PROXY_TARGET=http://backend:3000` e o comando
`npm run dev -- --host 0.0.0.0`. O Compose ainda não inclui o frontend.

## Serviço HTTP

`apiRequest<T>(path, options)` usa fetch, preserva headers/opções e retorna
JSON ou `undefined` para HTTP 204/205. Caminhos começam com `/`, como
`/services`; URLs externas não são aceitas.

Falhas HTTP lançam `ApiError`, com o status e uma mensagem genérica.
Falhas de rede, cancelamento e JSON inválido são propagados para a tela
tratar. O tipo `T` ajuda no TypeScript, mas não valida o JSON em execução.
Para enviar JSON, informe `Content-Type` e serialize o corpo explicitamente.

## Continuação da Nadla

A dependência `react-router` está instalada.
`pages/`, `components/` e `hooks/` estão reservadas com `.gitkeep`;
remova esses marcadores quando adicionar os arquivos reais.

Nadla implementará `App.tsx`, rotas, páginas, layout, hooks e estilos.
As telas inicial e de login ainda não são funcionalidades entregues.

## Validação e pendências

Lint, testes do serviço HTTP, build, desenvolvimento, preview e proxy foram
verificados. O teste do proxy usou um servidor HTTP temporário, com cenários
de sucesso, erro e backend indisponível. A integração com NestJS/PostgreSQL
real e a execução pelo Compose oficial permanecem pendentes.

Leia [o guia detalhado para iniciantes](../docs/frontend-setup.md).
