# 📋 Plano de Entregas das Sprints — GreenER

> **Projeto Interdisciplinar (ABP) — 3º Semestre DSM — FATEC Jacareí**  
> **Repositório:** [abpundefined/3DSM-ABP-UNDEFINED](https://github.com/abpundefined/3DSM-ABP-UNDEFINED)  
> **Equipe:** Undefined  
> **Product Owner:** Rainan de Oliveira Reis  
> **Scrum Master:** Thales Cambraia Dias  

---

## 🎯 1. Visão Geral e Estrutura de Avaliação

Este plano de entregas personaliza e distribui os critérios da **Rubrica de Avaliação** ao longo das **3 Sprints** do semestre letivo. O documento atende às exigências da Seção 6 da rubrica para submissão e validação prévia pelo corpo docente antes do início da Sprint 1.

### 📌 Regras Aplicadas:
1. **Critérios Obrigatórios em Todas as Sprints:**
   - **GA01 a GA09** (Gestão Ágil — 40 pontos no total)
   - **DW01** (Uso efetivo de React + TypeScript no Frontend e NestJS + TypeScript no Backend — 3 pontos)
2. **Critérios Cumulativos:** Funcionalidades entregues e aceitas em uma sprint anterior devem continuar operando sem regressões nas sprints subsequentes.
3. **Tags do Git:** Ao final de cada ciclo, será gerada uma release com as tags oficiais: `sprint-1`, `sprint-2` e `sprint-3`.
4. **Evidências:** A avaliação considera exclusivamente artefatos, códigos, testes, pull requests e documentação versionados no repositório GitHub.

---

## 🏃 2. Sprint 1 — Fundação Arquitetural, Coleta e Interface Base

* **Período estimado:** Início da Sprint até 20/10/2026  
* **Objetivo da Sprint:** Estabelecer a infraestrutura de desenvolvimento (Docker, NestJS, React, PostgreSQL), implementar a descoberta e coleta das métricas computacionais brutas via API do Agregador, criar a modelagem do banco com ORM e apresentar os protótipos de tela e personas validadas para a interface do GreenER.
* **Tag Git:** `sprint-1`

### 📋 Tabela de Critérios e Entregas Concretas — Sprint 1

| Código | Requisito Relacionado | Entrega Concreta | Como Verificar | Responsáveis | Evidência no GitHub | Situação |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GA01** | Backlog Geral | Product Backlog refinado com 23 PBIs priorizados (MoSCoW) e vinculados aos requisitos obrigatórios. | Acessar o GitHub Projects e verificar issues PBI-01 a PBI-23 com tags e prioridades. | Rainan Reis (PO) | [GitHub Projects / Issues](https://github.com/abpundefined/3DSM-ABP-UNDEFINED/issues) | Concluído |
| **GA02** | Gestão Ágil | Planejamento da Sprint 1 registrado com objetivos, itens do Sprint Backlog, estimativas e capacidade do time. | Ler `docs/sprints/sprint-1.md` e verificar issues com label `sprint-1`. | Rainan Reis, Thales Cambraia | `docs/sprints/sprint-1.md` | Concluído |
| **GA03** | Requisitos | Histórias de usuário e tarefas técnicas contendo critérios de aceite claros no padrão Gherkin / checklist verificável. | Abrir os detalhes de qualquer issue da Sprint 1 e conferir a seção de critérios de aceitação. | Rainan Reis | Issues #1 a #5, #9, #18, #22, #23 | Concluído |
| **GA04** | Rastreabilidade | Acompanhamento contínuo no GitHub Projects com movimentação de colunas, branches vinculadas e registro de impedimentos. | Visualizar o quadro Kanban do GitHub Projects, histórico de PRs e commits vinculados às issues. | Thales Cambraia (SM) e Time Dev | GitHub Projects / Pull Requests | Em andamento |
| **GA05** | Execução Incremental | Commits e pull requests distribuídos ao longo das semanas da sprint, evitando acúmulo de entregas na véspera. | Analisar o gráfico de insights de commits e a linha do tempo de PRs fechados. | Todo o Time | Gráfico de Commits / Insights | Em andamento |
| **GA06** | Melhoria Contínua | Realização da Sprint Review e Retrospectiva da Sprint 1 com registro de pontos fortes, fracos e plano de ação. | Ler o relatório de review e ata de retrospectiva na documentação da sprint. | Thales Cambraia (SM) e Time | `docs/sprints/sprint-1.md` (Seção Retrospectiva) | Previsto |
| **GA07** | Qualidade | Definition of Done (DoD) formalizada e aplicada a todos os cards marcados como concluídos. | Conferir o arquivo `docs/definicao-de-pronto.md` e validar se os PRs aprovados cumprem os requisitos de DoD. | Todo o Time | `docs/definicao-de-pronto.md` | Concluído |
| **GA08** | Documentação | README principal contendo descrição do produto, equipe, arquitetura, pré-requisitos e comandos de inicialização via Docker. | Clonar o repositório em máquina limpa e executar `docker compose up --build` seguindo o README. | Rainan Reis, Thales Cambraia | `README.md`, `docs/README.md` | Concluído |
| **GA09** | Participação | Contribuição técnica individual e verificável de todos os 6 integrantes da equipe no repositório. | Inspecionar histórico de commits, autoria de PRs, reviews de código e issues assumidas. | Todo o Time | Tabela de Participação / GitHub Insights | Em andamento |
| **DW01** | RP01, RP02 | Setup funcional do Frontend em React (Vite + TS) e do Backend em NestJS (TypeScript), ambos containerizados. | Executar o projeto e conferir as versões, dependências no `package.json` e execução dos serviços. | Time Dev | `frontend/`, `backend/`, `compose.yaml` | Em andamento |
| **DW02** | RF01, RF02, RF03 | Integração de descoberta (`/services`) e coleta periódica (`/metrics/{id}`) consumindo o Agregador de Métricas. | Disparar endpoint local ou serviço cron do NestJS e observar os dados brutos de métricas sendo obtidos e logados. | Marcus Nascimento, Israel Lemes | `backend/src/integrations/metrics/` | Em andamento |
| **DW03** | RP02, RNF08 | Backend estruturado em módulos NestJS (`ColetasModule`, `ServicesModule`), com controllers, services e DTOs tipados. | Inspecionar a árvore de diretórios do NestJS e verificar a separação estrita de camadas. | Israel Lemes, Pedro Gomes | `backend/src/modules/` | Em andamento |
| **DW04** | RP03, RF10 | Banco PostgreSQL configurado via ORM (TypeORM/Prisma) com entidades de serviços e coletas, incluindo migrações versionadas. | Executar as migrações em um banco vazio via comando documentado e verificar tabelas criadas. | Israel Lemes, Marcus Nascimento | `backend/migrations/`, `backend/src/database/` | Em andamento |
| **DW05** | RP01, RNF01 | Frontend organizado em `pages/`, `components/`, `services/`, `hooks/` e tela inicial listando os serviços monitorados. | Acessar `http://localhost:5173` e visualizar a listagem dinâmica de serviços vindos da API do backend. | Rainan Reis, Nadla Ferreira | `frontend/src/` | Em andamento |
| **DW07** | RP05, RNF08 | Arquivo `compose.yaml` orquestrando Frontend, Backend e PostgreSQL com variáveis de ambiente configuráveis em `.env.example`. | Executar `docker compose up` e validar subida sem falhas dos 3 containers. | Thales Cambraia, Pedro Gomes | `compose.yaml`, `.env.example` | Em andamento |
| **TP01** | RP04 | Aplicação do princípio de responsabilidade única (SRP) e separação de contratos de integração externa. | Inspecionar código-fonte observando services focados e controllers enxutos. | Israel Lemes, Pedro Gomes | `backend/src/` | Em andamento |
| **TP02** | RP04 | Injeção de dependências nativa do NestJS para conexão de services e repositórios sem acoplamento direto. | Verificar decorators `@Injectable()` e injeção via construtor nos controllers e services. | Marcus Nascimento, Israel Lemes | `backend/src/` | Em andamento |
| **TP03** | RNF07 | Tipagem estrita em TypeScript (`noImplicitAny`), sem uso indevido de `any` ou código morto. | Executar `npm run build` / `tsc --noEmit` no backend e frontend garantindo ausência de alertas de tipo. | Rainan Reis, Thales Cambraia | `tsconfig.json` e código-fonte | Em andamento |
| **TP05** | RNF05 | Validação de payloads com DTOs (`class-validator`) e tratamento global de erros via Filters do NestJS. | Enviar requisições inválidas à API e verificar respostas HTTP padronizadas (ex: 400 Bad Request com mensagens claras). | Thales Cambraia | `backend/src/common/filters/`, DTOs | Em andamento |
| **IHC01** | RNF01, RP09 | Mapeamento detalhado das Personas e tarefas dos usuários da plataforma (Gestor de TI/ESG, Engenheiro de Operações). | Ler documento `docs/interface.md` na seção de Personas e Jornadas do Usuário. | Rainan Reis, Nadla Ferreira | `docs/interface.md` | Concluído |
| **IHC02** | RP09 | Protótipos de alta fidelidade das telas no Figma cobrindo o fluxo de navegação da versão MVP. | Acessar o link do Figma documentado e conferir os fluxos e componentes projetados. | Nadla Ferreira, Rainan Reis | Figma / `docs/interface.md` | Em andamento |
| **IHC04** | RNF01, RNF02 | Interface web com design responsivo inicial e tratamento visual de estados (loading spinner, tela vazia e erros). | Testar a interface em resolução desktop e mobile inspecionando mensagens de feedback. | Rainan Reis, Nadla Ferreira | `frontend/src/components/common/` | Em andamento |

### 👥 Tabela de Participação dos Integrantes — Sprint 1

| Integrante | Papel Principal | Tarefas Assumidas (Sprint 1) | Contribuições Realizadas | Evidências no GitHub |
| :--- | :--- | :--- | :--- | :--- |
| **Rainan Reis** | PO & Dev Frontend | GA01, GA03, DW05, IHC01, IHC02, IHC04; Criação dos PBIs e setup do Frontend | Criação dos 23 PBIs, estruturação da documentação de requisitos, desenvolvimento de páginas base React. | [Issues #1-#23](https://github.com/abpundefined/3DSM-ABP-UNDEFINED/issues), commits no `frontend/` |
| **Thales Cambraia** | Scrum Master & Dev Fullstack | GA02, GA04, GA06, DW07, TP03, TP05; Gestão do quadro, Docker Compose e validações | Configuração do GitHub Projects, mediação das cerimônias ágeis, compose.yaml e exception filters. | [GitHub Projects](https://github.com/orgs/abpundefined/projects), commits em `compose.yaml` |
| **Pedro Gomes** | Dev Backend & DevOps | DW03, DW07, TP01; Suporte à infraestrutura Docker, configuração de variáveis e módulos base | Apoio na configuração dos contêineres Docker, criação do .env.example e estrutura de módulos. | Commits em `backend/`, `compose.yaml` |
| **Israel Lemes** | Dev Backend | DW03, DW04, TP01, TP02; Modelagem do banco relacional e módulos NestJS | Criação das entidades ORM, migrações do PostgreSQL e services de coleta no NestJS. | Commits em `backend/src/modules/` e `backend/migrations/` |
| **Marcus Nascimento** | Dev Backend | DW02, TP01, TP02; Integração com APIs externas (Agregador de Métricas) | Implementação do client HTTP para consumo de `/services` e `/metrics` com tratamento de falhas. | Commits em `backend/src/integrations/` |
| **Nadla Ferreira** | Dev Frontend & UI/UX | IHC01, IHC02, DW05, IHC04; Design System, prototipação Figma e componentes React | Criação do design system no Figma, personas de IHC e componentes estilizados no React. | Links do Figma em `docs/interface.md`, commits em `frontend/` |

---

## 🏃 3. Sprint 2 — Motor de Cálculo Ambiental, Dashboard Dinâmico e Segurança

* **Período estimado:** 21/10/2026 até 10/11/2026  
* **Objetivo da Sprint:** Implementar o motor de cálculo de consumo de energia (kWh) e pegada de carbono (gCO₂e/kgCO₂e), integrar com a API de Carbon Intensity, criar o dashboard com indicadores agregados e filtros temporais, implementar autenticação JWT para áreas restritas e cobrir as regras de negócio com testes unitários automatizados.
* **Tag Git:** `sprint-2`

### 📋 Tabela de Critérios e Entregas Concretas — Sprint 2

| Código | Requisito Relacionado | Entrega Concreta | Como Verificar | Responsáveis | Evidência no GitHub | Situação |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GA01** a **GA09** | Gestão Ágil | Rito ágil completo da Sprint 2: backlog atualizado, review da Sprint 1 aplicado, reuniões registradas e participação ativa de todos os 6 membros. | Conferir `docs/sprints/sprint-2.md`, fechamento de issues e histórico contínuo de PRs. | Todo o Time | `docs/sprints/sprint-2.md` | Previsto |
| **DW01** | RP01, RP02 | Manutenção da stack React + NestJS em TypeScript em todas as novas features desenvolvidas. | Validar que novas rotas e componentes seguem a tipagem e arquitetura oficial. | Time Dev | `frontend/`, `backend/` | Previsto |
| **DW02** | RF07, RF08 | Integração completa com a API de Intensidade de Carbono (`/carbon/intensity`, `/regions`) para cálculo ambiental dinâmico. | Inspecionar a chamada da API de carbono, log de resposta regionalizada e persistência do fator de emissão. | Marcus Nascimento, Israel Lemes | `backend/src/integrations/carbon/` | Previsto |
| **DW06** | RF16, RF17, RP07 | Autenticação de usuários via JWT no padrão Bearer e proteção de rotas restritas de configuração no backend. | Fazer login via API, obter token JWT e tentar acessar endpoint restrito sem token (401 Unauthorized) e com token (200 OK). | Thales Cambraia, Pedro Gomes | `backend/src/modules/auth/` | Previsto |
| **TP04** | RP04, RNF07 | Cobertura significativa de testes unitários (mínimo 70%) cobrindo as regras isoladas de cálculo energético e emissões. | Executar comando `npm run test:cov` no backend e verificar relatório com cenários nominais e de erro. | Thales Cambraia, Marcus Nascimento | `backend/src/**/*.spec.ts` | Previsto |
| **IHC03** | RF09, RNF02, RNF03 | Indicadores com unidades padronizadas (kWh, gCO₂e), período explícito, data/hora da última coleta e status acessíveis por texto e ícone (não apenas cor). | Acessar o dashboard, conferir cards de métricas, legendas de unidades e verificar modo de alto contraste/acessibilidade. | Rainan Reis, Nadla Ferreira | `frontend/src/pages/Dashboard/` | Previsto |
| **DW05** | RF09, RF11 | Dashboard operacional dinâmico com atualização periódica automática (polling/SWR) sem recarregar a página. | Abrir dashboard e acompanhar a atualização automática dos cards ao simular novas coletas. | Rainan Reis, Nadla Ferreira | `frontend/src/hooks/useMetrics.ts` | Previsto |

### 👥 Tabela de Participação dos Integrantes — Sprint 2

| Integrante | Papel Principal | Tarefas Assumidas (Sprint 2) | Contribuições Realizadas | Evidências no GitHub |
| :--- | :--- | :--- | :--- | :--- |
| **Rainan Reis** | PO & Dev Frontend | GA01, DW05, IHC03; Dashboard de Indicadores e integração frontend | Telas do dashboard com métricas consolidadas, hook de atualização automática e filtros de serviços. | Commits em `frontend/`, PRs revisados |
| **Thales Cambraia** | Scrum Master & Dev Fullstack | GA02, GA04, GA06, DW06, TP04; Facilitação da Sprint 2, autenticação JWT e testes unitários | Módulo de autenticação (Passport, JWT), Guards de autorização e mediação de prazos e impedimentos. | Commits em `backend/src/modules/auth/`, `docs/sprints/sprint-2.md` |
| **Pedro Gomes** | Dev Backend & DevOps | DW02, DW03, DW06; Endpoints de agregação e suporte ao módulo de autenticação | Apoio no módulo de autenticação e construção dos endpoints de agregação de histórico. | Commits em `backend/src/modules/` |
| **Israel Lemes** | Dev Backend | DW02, DW03, DW04; Módulo de cálculos ambientais e agregação de histórico | Implementação das fórmulas em service dedicado, consultas SQL agregadas para relatórios. | Commits em `backend/src/modules/calculos/` |
| **Marcus Nascimento** | Dev Backend | DW02, TP04; Integração com Carbon Intensity API e testes unitários | Módulo de cliente da API de carbono, mocks para testes e suíte de testes unitários dos cálculos. | Commits em `backend/src/integrations/carbon/` |
| **Nadla Ferreira** | Dev Frontend & UI/UX | IHC03, DW05; Visualização de gráficos temporais, telas de login e acessibilidade | Telas de login e configuração restrita, aplicação de gráficos (Recharts) e ícones de status acessíveis. | Commits em `frontend/src/pages/Auth/`, `frontend/src/components/charts/` |

---

## 🏃 4. Sprint 3 — Recursos Avançados, IHC Final e Prontidão de Portfólio

* **Período estimado:** 11/11/2026 até 23/11/2026  
* **Objetivo da Sprint:** Implementar recursos avançados de análise (ranking de impacto ambiental, módulo de comparação lado a lado e mapa geográfico interativo), executar avaliação formal de usabilidade com usuários representativos, aplicar melhorias decorrentes do teste e consolidar a documentação técnica (Swagger e guias) com qualidade profissional de portfólio.
* **Tag Git:** `sprint-3`

### 📋 Tabela de Critérios e Entregas Concretas — Sprint 3

| Código | Requisito Relacionado | Entrega Concreta | Como Verificar | Responsáveis | Evidência no GitHub | Situação |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GA01** a **GA09** | Gestão Ágil | Encerramento do ciclo ágil: revisão final do backlog, balanço do projeto, análise retrospectiva das 3 sprints e consolidação das contribuições de todos os 6 integrantes. | Ler `docs/sprints/sprint-3.md`, conferir fechamento total das issues e tag `sprint-3`. | Todo o Time | `docs/sprints/sprint-3.md`, Releases | Previsto |
| **DW01** | RP01, RP02 | Aplicação íntegra mantendo frontend React e backend NestJS totalmente operacionais em contêineres. | Execução de ponta a ponta sem falhas pelo comando `docker compose up`. | Time Dev | Repositório completo | Previsto |
| **DW05** | RF14, RF15 | Interface contendo ranking dinâmico de serviços mais poluentes e tela de comparação detalhada entre múltiplos serviços. | Navegar até a aba de Ranking e Comparação, selecionar 2 ou mais serviços e confrontar consumo e CO₂e. | Rainan Reis, Pedro Gomes | `frontend/src/pages/Comparison/` | Previsto |
| **DW05** | RF12, RF13 | Visualização geográfica em mapa interativo mostrando a distribuição dos serviços monitorados com base em coordenadas. | Acessar visualização de mapa e clicar nos marcadores para ver informações de localização e consumo do serviço. | Nadla Ferreira, Rainan Reis | `frontend/src/components/Map/` | Previsto |
| **IHC05** | RP09 | Avaliação de usabilidade planejada e executada com usuários representativos (roteiro de tarefas, gravação/anotações e métricas). | Conferir o relatório de teste de usabilidade em `docs/interface.md` com metodologia e achados documentados. | Rainan Reis, Nadla Ferreira | `docs/interface.md` | Previsto |
| **IHC06** | RP09 | Implementação de melhorias na interface e no fluxo com base direta nos problemas apontados na avaliação de usabilidade. | Comparar os problemas levantados no relatório com commits e PRs de ajustes na UI/UX. | Rainan Reis, Nadla Ferreira | PRs com tag `ihc-improvement` | Previsto |
| **DW07** | RNF08 | Documentação interativa da API via Swagger/OpenAPI e finalização da documentação técnica geral. | Acessar `http://localhost:3000/api/docs` e inspecionar endpoints documentados e testáveis. | Thales Cambraia, Israel Lemes | Swagger Decorators / `docs/api.md` | Previsto |

### 👥 Tabela de Participação dos Integrantes — Sprint 3

| Integrante | Papel Principal | Tarefas Assumidas (Sprint 3) | Contribuições Realizadas | Evidências no GitHub |
| :--- | :--- | :--- | :--- | :--- |
| **Rainan Reis** | PO & Dev Frontend | GA01, DW05, IHC05, IHC06; Comparação de serviços, avaliação de usabilidade e ajustes finais | Condução dos testes de usabilidade com usuários, implementação da página de comparação e fechamento do produto. | Commits em `frontend/`, relatório em `docs/interface.md` |
| **Thales Cambraia** | Scrum Master & Dev Fullstack | GA02, GA04, GA06, DW07, TP05; Fechamento ágil do projeto, Swagger e validação de contêineres | Documentação da retrospectiva final, configuração do Swagger no NestJS, auditoria de qualidade e publicação de tags. | Releases do GitHub, `docs/sprints/sprint-3.md`, `backend/src/main.ts` |
| **Pedro Gomes** | Dev Backend & DevOps | DW05, DW07; Apoio na tela de comparação e otimização de endpoints de dados | Desenvolvimento de endpoints agregados para a tela de comparação e refinamento do compose.yaml. | Commits em `backend/src/modules/` |
| **Israel Lemes** | Dev Backend | DW05, DW07; Endpoints de ranking, filtros temporais e agregação de dados geográficos | Endpoints de ordenação de impacto (`/services/ranking`), otimização de queries de histórico. | Commits em `backend/src/modules/services/` |
| **Marcus Nascimento** | Dev Backend | DW05, TP04; Resiliência de dados geográficos e persistência de cache | Tratamento de ausência de coordenadas geográficas e atualização de mocks nos testes unitários. | Commits em `backend/` |
| **Nadla Ferreira** | Dev Frontend & UI/UX | IHC05, IHC06, DW05; Mapa geográfico interativo e aplicação de melhorias de IHC | Componente de mapa (Leaflet), marcadores por status e aplicação dos ajustes identificados na avaliação de usabilidade. | Commits em `frontend/src/components/Map/` |

---

## 📊 5. Matriz de Rastreabilidade dos 28 Critérios da Rubrica

A tabela a seguir demonstra como todos os 28 critérios da rubrica de 100 pontos são plenamente atendidos dentro do ciclo de 3 Sprints:

| Disciplina | Código | Pontos | Descrição Resumida | Sprint 1 | Sprint 2 | Sprint 3 |
| :--- | :---: | :---: | :--- | :---: | :---: | :---: |
| **Gestão Ágil (40 pts)** | **GA01** | 5 | Product Backlog priorizado e versionado | ✅ | ✅ | ✅ |
| | **GA02** | 5 | Planejamento da Sprint documentado | ✅ | ✅ | ✅ |
| | **GA03** | 5 | Histórias com critérios de aceite verificáveis | ✅ | ✅ | ✅ |
| | **GA04** | 4 | Acompanhamento e rastreabilidade no GitHub | ✅ | ✅ | ✅ |
| | **GA05** | 3 | Execução incremental ao longo das semanas | ✅ | ✅ | ✅ |
| | **GA06** | 4 | Sprint Review e Retrospectiva documentadas | ✅ | ✅ | ✅ |
| | **GA07** | 3 | Definition of Done (DoD) aplicada | ✅ | ✅ | ✅ |
| | **GA08** | 3 | README e documentação de execução reproduzível | ✅ | ✅ | ✅ |
| | **GA09** | 8 | Colaboração e participação de todos os 6 membros | ✅ | ✅ | ✅ |
| **Desenvolvimento Web III (25 pts)** | **DW01** | 3 | Stack obrigatória: React + TS e NestJS + TS | ✅ | ✅ | ✅ |
| | **DW02** | 5 | Integração com APIs externas (Métricas e Carbono) | ✅ (Métricas) | ✅ (Carbono) | ✅ (Consolidação) |
| | **DW03** | 4 | Estrutura NestJS: modules, controllers, services, DTOs | ✅ | ✅ | ✅ |
| | **DW04** | 4 | PostgreSQL + ORM + Migrações versionadas | ✅ | ✅ | ✅ |
| | **DW05** | 3 | Frontend organizado em pages, components, hooks, services | ✅ (Base) | ✅ (Dashboard) | ✅ (Ranking/Mapa) |
| | **DW06** | 3 | Autenticação JWT e proteção de rotas restritas | ⏳ | ✅ | ✅ |
| | **DW07** | 3 | Ambiente Docker e documentação de API (Swagger) | ✅ (Docker) | ✅ | ✅ (Swagger) |
| **Técnicas de Programação II (20 pts)** | **TP01** | 4 | Princípios SOLID e responsabilidades coesas | ✅ | ✅ | ✅ |
| | **TP02** | 4 | Injeção de dependências NestJS e desacoplamento | ✅ | ✅ | ✅ |
| | **TP03** | 4 | Tipagem estrita TypeScript sem `any` injustificado | ✅ | ✅ | ✅ |
| | **TP04** | 4 | Testes unitários com cobertura expressiva | ⏳ | ✅ (Cálculos) | ✅ (Geral) |
| | **TP05** | 4 | Validação com DTOs e Exception Filters globais | ✅ | ✅ | ✅ |
| **Interação Humano Computador (15 pts)** | **IHC01** | 3 | Identificação de usuários e tarefas (Personas) | ✅ | ✅ | ✅ |
| | **IHC02** | 3 | Fluxos de navegação e protótipos de alta fidelidade | ✅ | ✅ | ✅ |
| | **IHC03** | 3 | Clareza de indicadores, unidades e estados sem só cor | ⏳ | ✅ | ✅ |
| | **IHC04** | 2 | Responsividade e estados de feedback (loading/erros) | ✅ | ✅ | ✅ |
| | **IHC05** | 2 | Avaliação de usabilidade com usuários reais | ⏳ | ⏳ | ✅ |
| | **IHC06** | 2 | Melhorias implementadas a partir da avaliação | ⏳ | ⏳ | ✅ |
| **TOTAL** | | **100** | | | | |

---

## 📌 6. Procedimento de Validação com o Docente

Este documento foi elaborado para cumprimento da Seção 6 da Rubrica. Solicita-se a revisão e aprovação pelo professor responsável pela disciplina de Aprendizagem Baseada em Projetos antes do marco formal de início da Sprint 1.
