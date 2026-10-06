# 🏃 Sprint 1 — Fundação Arquitetural, Coleta e Interface Base

> **Período:** Início do Semestre até 20/10/2026  
> **Tag da Entrega:** `sprint-1`  
> **Responsáveis pelo Registro:** Thales Cambraia (Scrum Master) e Rainan Reis (Product Owner)  

---

## 🎯 1. Objetivo da Sprint 1

Construir a infraestrutura básica do projeto utilizando contêineres Docker, estruturar o backend em NestJS com banco relacional PostgreSQL e ORM, criar a integração inicial para descoberta e coleta periódica de métricas computacionais brutas via API do Agregador, projetar as interfaces de usuário e componentes React no frontend, e documentar os requisitos e planos de entrega para validação docente.

---

## 📋 2. Itens Selecionados (Sprint Backlog)

Os itens abaixo foram extraídos do Product Backlog com base nas prioridades MoSCoW acordadas com o PO:

### 🔧 Tarefas Técnicas de Infraestrutura (devem ser feitas primeiro)

| Issue | Tipo | Descrição Resumida | Estimativa (SP) | Responsáveis | Status |
| :---: | :---: | :--- | :---: | :--- | :---: |
| **#22** | Tarefa Técnica | [PBI-22] Setup Docker Compose (NestJS, React, PostgreSQL) | 5 | Thales Cambraia, Pedro Gomes | Em andamento |
| **#24** | Tarefa Técnica | [TASK] Setup da estrutura base do backend NestJS com TypeScript | 3 | Israel Lemes, Thales Cambraia | Em andamento |
| **#25** | Tarefa Técnica | [TASK] Setup da estrutura base do frontend React com Vite + TS | 3 | Rainan Reis, Nadla Ferreira | Em andamento |
| **#26** | Tarefa Técnica | [TASK] Configuração de variáveis de ambiente (.env.example) | 2 | Thales Cambraia, Pedro Gomes | Em andamento |
| **#27** | Tarefa Técnica | [TASK] Modelagem relacional e migrações PostgreSQL via ORM | 5 | Israel Lemes, Marcus Nascimento | Em andamento |

### 📖 User Stories Funcionais

| Issue | Tipo | Descrição Resumida | Estimativa (SP) | Responsáveis | Status |
| :---: | :---: | :--- | :---: | :--- | :---: |
| **#1** | User Story | [PBI-01] Descoberta automática de serviços ativos via `/services` | 5 | Marcus Nascimento, Israel Lemes | Em andamento |
| **#2** | User Story | [PBI-02] Monitoramento dinâmico de inclusão, remoção e retorno de serviços | 8 | Marcus Nascimento | Em andamento |
| **#3** | User Story | [PBI-03] Coleta periódica de métricas computacionais brutas (`/metrics/{id}`) | 5 | Marcus Nascimento, Israel Lemes | Em andamento |
| **#4** | User Story | [PBI-04] Detecção de serviço indisponível | 3 | Marcus Nascimento | Em andamento |
| **#5** | User Story | [PBI-05] Detecção de ausência de métricas | 3 | Israel Lemes | Em andamento |
| **#9** | User Story | [PBI-09] Histórico de coletas persistido no PostgreSQL | 5 | Israel Lemes | Em andamento |
| **#18** | User Story | [PBI-18] Tolerância a falhas e indisponibilidade de APIs externas | 5 | Thales Cambraia, Marcus Nascimento | Em andamento |
| **#23** | User Story | [PBI-23] IHC — Personas, fluxos e prototipação de alta fidelidade no Figma | 8 | Nadla Ferreira, Rainan Reis | Em andamento |



---

## 🔍 3. Como Verificar as Entregas desta Sprint

Para auditar e testar as entregas da Sprint 1 em uma máquina local:

1. **Clonar o repositório e acessar a tag da sprint:**
   ```bash
   git clone https://github.com/abpundefined/3DSM-ABP-UNDEFINED.git
   cd 3DSM-ABP-UNDEFINED
   git checkout sprint-1
   ```

2. **Configurar as variáveis de ambiente:**
   ```bash
   cp .env.example .env
   ```

3. **Subir os serviços via Docker:**
   ```bash
   docker compose up --build
   ```

4. **Verificar os serviços em execução:**
   - **Frontend:** Abra `http://localhost:5173` no navegador e confira a tela inicial com layout base e listagem de serviços.
   - **Backend:** Acesse `http://localhost:3000/api/services` para conferir a rota de descoberta de serviços consumindo a API externa.
   - **Banco de Dados:** Inspecione os logs do backend para verificar a execução automática das migrações do PostgreSQL.

---

## 👥 4. Registro de Participação Individual — Sprint 1

| Integrante | Papel | Tarefas Assumidas | Contribuições Efetivas e Evidências |
| :--- | :--- | :--- | :--- |
| **Rainan Reis** | PO & Dev Fullstack | Backlog, Personas e telas base React | Definição dos 23 PBIs, redação do DoD, personas em `docs/interface.md` e telas iniciais. |
| **Thales Cambraia** | Scrum Master & Dev Frontend | Gestão do quadro Kanban, Dockerização, DTOs e filtros de erro | Configuração do GitHub Projects, mediação ágil, compose.yaml, validação de payloads com class-validator e filtros globais de exceção. |
| **Pedro Gomes** | Dev Backend & DevOps | Suporte à infraestrutura Docker e configuração do repositório | Configuração de variáveis de ambiente, auxílio no compose.yaml e documentação técnica. |
| **Israel Lemes** | Dev Backend | Modelagem do banco e entidades ORM | Configuração do TypeORM/Prisma, entidades de serviços e coletas, arquivos de migração. |
| **Marcus Nascimento** | Dev Backend | Clientes HTTP das APIs de métricas | Implementação da integração com `/services` e `/metrics/{id}` e tratamento de conexões. |
| **Nadla Ferreira** | Dev Frontend & UI/UX | Design System, prototipação Figma e componentes | Criação dos fluxos no Figma, seleção da paleta de cores e componentes acessíveis em React. |

---

## 📊 5. Sprint Review (Revisão da Sprint)

> *Esta seção será preenchida durante a cerimônia formal de Sprint Review ao final da Sprint 1.*

- **O que foi demonstrado:**
- **Feedback recebido dos professores / cliente:**
- **Itens aceitos pelo PO:**
- **Itens que não foram concluídos (se houver) e redirecionamento:**

---

## 🔄 6. Retrospectiva da Sprint e Ações de Melhoria

> *Esta seção registra as reflexões internas da equipe para cumprir o critério **GA06**.*

### 🟢 Pontos Positivos (O que funcionou bem):
- Divisão inicial clara de papéis e criação estruturada do backlog no GitHub.
- Adoção imediata da Definição de Pronto (DoD) para alinhamento de qualidade.

### 🟡 Dificuldades Encontradas (O que pode melhorar):
- Curva de aprendizado inicial na integração entre contêineres e configuração do ORM.
- Necessidade de coordenar o ritmo de commits ao longo dos dias úteis para atender a GA05.

### 🚀 Plano de Ação para a Sprint 2:
1. Estabelecer revisões de PR em pares obrigatórias em até 24h da abertura.
2. Adicionar rotina de verificação contínua dos testes unitários antes do merge.
