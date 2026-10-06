<h1>🚀 3DSM-ABP-UNDEFINED</h1>
<p>
    Este repositório contém o desenvolvimento do projeto interdisciplinar da disciplina de
    <strong>Aprendizagem Baseada em Projetos (ABP)</strong> do 3º semestre do curso de
    <strong>Desenvolvimento de Software Multiplataforma</strong> da FATEC Jacareí.
</p>

<hr>

<h2>📌 Sumário</h2>
<ul>
    <li><a href="#sobre">🌱 Sobre o Projeto</a></li>
    <li><a href="#tecnologias">🛠️ Tecnologias Utilizadas</a></li>
    <li><a href="#comorodar">🚀 Como Rodar o Projeto</a></li>
    <li><a href="#requisitos">📑 Requisitos</a></li>
    <li><a href="#userstories">📝 User Stories</a></li>
    <li><a href="#planejamento-de-sprints">🚀 Planejamento de Sprints</a></li>
    <li><a href="#documentacao">🖺 Documentação</a></li>
    <li><a href="#integrantes">🧑‍💻 Integrantes</a></li>
</ul>

<hr>

<h2>📎 Links</h2>
<ul>
    <li>
        <strong>Trello:</strong>
        <a href="https://trello.com/b/SEU_BOARD_3DSM" target="_blank">Acessar Trello</a>
    </li>
    <li>
        <strong>Figma:</strong>
        <a href="https://www.figma.com/design/SEU_LINK_3DSM" target="_blank">Acessar Figma</a>
    </li>
    <li>
        <strong>Greener Metrics Aggregator API:</strong>
        <a href="https://metrics.unilaunch.org/docs" target="_blank">Acessar Documentação</a>
    </li>
    <li>
        <strong>Greener Carbon Intensity API:</strong>
        <a href="https://carbon.unilaunch.org/docs" target="_blank">Acessar Documentação</a>
    </li>
</ul>

<hr>

<h2 id="sobre">🌱 Sobre o Projeto</h2>
<p>
    O <strong>GreenER</strong> é uma plataforma web voltada para monitorar continuamente aplicações de software,
    estimar o consumo energético de recursos computacionais e calcular a emissão aproximada de dióxido de carbono
    equivalente (CO₂e). A plataforma visa apoiar decisões de sustentabilidade baseadas em práticas de Green Computing e ESG.
</p>

<hr>

<h2 id="tecnologias">🛠️ Tecnologias Utilizadas</h2>
<p>O desenvolvimento será realizado com as seguintes tecnologias, visando escalabilidade, manutenibilidade e confiabilidade:</p>

<h3>🔧 Stack Principal</h3>
<ul>
    <li><img src="./public/static/React-icon.svg.png" alt="React" width="20"> React</li>
    <li><img src="./public/static/ts-logo-128.png" alt="TypeScript" width="20"> TypeScript</li>
    <li><img src="./public/static/nestjs.svg" alt="NestJS" width="20"> NestJS</li>
    <li><img src="./public/static/postgresql.webp" alt="PostgreSQL" width="20"> PostgreSQL</li>
    <li><img src="./public/static/docker.webp" alt="Docker" width="20"> Docker & Docker Compose</li>
</ul>

<hr>

<h2 id="comorodar">🚀 Como Rodar o Projeto</h2>

<h3>Pré-requisitos</h3>
<ul>
    <li><a href="https://www.docker.com/" target="_blank">Docker</a></li>
    <li><a href="https://docs.docker.com/compose/" target="_blank">Docker Compose</a></li>
</ul>

<h3>Passo a passo</h3>
<p><strong>1. Clone o repositório</strong></p>
<pre><code>git clone https://github.com/abpundefined/3DSM-ABP-UNDEFINED.git
cd 3DSM-ABP-UNDEFINED
</code></pre>

<p><strong>2. Configure as variáveis de ambiente</strong></p>
<pre><code>cp .env.example .env
</code></pre>
<p>Edite o arquivo <code>.env</code> com as chaves necessárias (incluindo <code>JWT_SECRET</code>, credenciais do banco e URLs das APIs auxiliares).</p>

<p><strong>3. Suba os containers</strong></p>
<pre><code>docker-compose up --build
</code></pre>

<p><strong>4. Acesse a aplicação</strong></p>
<ul>
    <li>Frontend: <a href="http://localhost:5173">http://localhost:5173</a></li>
    <li>Backend: <a href="http://localhost:3000">http://localhost:3000</a></li>
</ul>

<h3>Para resetar o banco de dados</h3>
<pre><code>docker-compose down -v
docker-compose up --build
</code></pre>

<hr>

<h2 id="requisitos">📑 Requisitos</h2>

<h3>✅ Requisitos Funcionais</h3>
<table>
    <tr>
        <th>Código</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>RF01</td>
        <td>Descoberta de serviços: consultar o Agregador de Métricas para identificar os serviços disponíveis.</td>
    </tr>
    <tr>
        <td>RF02</td>
        <td>Monitoramento dinâmico: reconhecer inclusão, remoção, indisponibilidade e retorno de serviços durante a execução.</td>
    </tr>
    <tr>
        <td>RF03</td>
        <td>Coleta de métricas por serviço: consultar periodicamente o endpoint /metrics/{id_servico} para cada serviço disponível.</td>
    </tr>
    <tr>
        <td>RF04</td>
        <td>Tratamento da variação das métricas: considerar e tratar valores que se alteram dinamicamente a cada requisição.</td>
    </tr>
    <tr>
        <td>RF05</td>
        <td>Detecção de indisponibilidade: identificar e sinalizar falhas quando um serviço não responder ou estiver indisponível.</td>
    </tr>
    <tr>
        <td>RF06</td>
        <td>Detecção de ausência de métricas: identificar quando um serviço está ativo na listagem mas não exporta dados de métricas.</td>
    </tr>
    <tr>
        <td>RF07</td>
        <td>Cálculo individual: calcular consumo energético e emissão de CO₂e para cada serviço monitorado.</td>
    </tr>
    <tr>
        <td>RF08</td>
        <td>Indicadores agregados: calcular métricas consolidadas (consumo total, emissão total, serviços ativos/indisponíveis).</td>
    </tr>
    <tr>
        <td>RF09</td>
        <td>Dashboard operacional: exibir estado de monitoramento, localização, métricas, consumo estimado e emissão de CO₂e por serviço.</td>
    </tr>
    <tr>
        <td>RF10</td>
        <td>Histórico de coletas: armazenar histórico de coletas para análises temporais e evolutivas.</td>
    </tr>
    <tr>
        <td>RF11</td>
        <td>Atualização contínua: atualizar a interface periodicamente sem exigir recarregamento da página.</td>
    </tr>
    <tr>
        <td>RF12</td>
        <td>Localização dos serviços: exibir país, região e cidade (quando disponível) de hospedagem do serviço.</td>
    </tr>
    <tr>
        <td>RF13</td>
        <td>Visualização geográfica: exibir em mapa a posição aproximada dos serviços com coordenadas latitude/longitude.</td>
    </tr>
    <tr>
        <td>RF14</td>
        <td>Ranking de impacto: ordenar serviços por consumo energético estimado ou emissão de CO₂e em determinado período.</td>
    </tr>
    <tr>
        <td>RF15</td>
        <td>Comparação entre serviços: comparar dois ou mais serviços avaliando métricas e indicadores no mesmo intervalo temporal.</td>
    </tr>
    <tr>
        <td>RF16</td>
        <td>Autenticação e controle de acesso: autenticar via JWT o usuário responsável pela alteração de configurações de monitoramento.</td>
    </tr>
</table>

<hr>

<h3>⚙️ Requisitos Não Funcionais</h3>
<table>
    <tr>
        <th>Código</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>RNF01</td>
        <td>Usabilidade: interface simples, clara e responsiva para desktop e dispositivos móveis.</td>
    </tr>
    <tr>
        <td>RNF02</td>
        <td>Acessibilidade da informação: estados (ativo, indisponível, sem métricas) e alertas identificáveis por texto ou ícones, não apenas cores.</td>
    </tr>
    <tr>
        <td>RNF03</td>
        <td>Atualização periódica: exibir intervalos de coleta e apresentar data/hora da última atualização para o usuário.</td>
    </tr>
    <tr>
        <td>RNF04</td>
        <td>Desempenho: tempos de resposta adequados para visualização contínua e sem degradação do dashboard.</td>
    </tr>
    <tr>
        <td>RNF05</td>
        <td>Tolerância a falhas: a indisponibilidade de serviços monitorados ou de APIs externas não deve interromper o sistema.</td>
    </tr>
    <tr>
        <td>RNF06</td>
        <td>Segurança: senhas com hash seguro, credenciais fora do versionamento e proteção de rotas restritas via JWT.</td>
    </tr>
    <tr>
        <td>RNF07</td>
        <td>Manutenibilidade e testes: regras de cálculo isoladas dos controllers, com cobertura de testes unitários.</td>
    </tr>
    <tr>
        <td>RNF08</td>
        <td>Documentação técnica: instruções de deploy/execução, arquitetura, modelo de dados e endpoints documentados.</td>
    </tr>
</table>

<hr>

<h3>🚧 Restrições de Projeto</h3>
<table>
    <tr>
        <th>Código</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>RP01</td>
        <td>Frontend obrigatório em React com TypeScript.</td>
    </tr>
    <tr>
        <td>RP02</td>
        <td>Backend obrigatório em NestJS com TypeScript estruturado em módulos, controllers, services e DTOs.</td>
    </tr>
    <tr>
        <td>RP03</td>
        <td>Banco de dados PostgreSQL integrado via ORM no ecossistema NestJS com persistência de coletas temporais.</td>
    </tr>
    <tr>
        <td>RP04</td>
        <td>Injeção de dependência e regras de cálculo de energia e CO₂e isoladas fora dos controllers.</td>
    </tr>
    <tr>
        <td>RP05</td>
        <td>Execução completa exclusivamente por meio de containers Docker.</td>
    </tr>
    <tr>
        <td>RP06</td>
        <td>Escopo MVP com navegação completa, respostas estruturadas e evidências documentais.</td>
    </tr>
    <tr>
        <td>RP07</td>
        <td>Autenticação da área restrita de configuração validada obrigatoriamente no backend via JWT.</td>
    </tr>
    <tr>
        <td>RP08</td>
        <td>Metodologia ágil com backlog priorizado, critérios de aceitação e reviews de sprint com feedback documentado.</td>
    </tr>
    <tr>
        <td>RP09</td>
        <td>Evidências de IHC: protótipos de tela, planejamento e resultados de avaliação de usabilidade.</td>
    </tr>
</table>

<hr>

<h2 id="userstories">📝 User Stories</h2>
<table>
    <tr>
        <th>ID</th>
        <th>User Story</th>
        <th>DoR (Definition of Ready)</th>
        <th>DoD (Definition of Done)</th>
    </tr>
    <tr>
        <td>US01</td>
        <td>Como gestor de TI, quero visualizar o consumo consolidado de CO₂e e energia para monitorar metas ESG.</td>
        <td>Cálculos de CO₂e e energia validados | Endpoint agregado modelado</td>
        <td>Indicadores totais exibidos dinamicamente na tela inicial com testes unitários cobrindo o cálculo</td>
    </tr>
    <tr>
        <td>US02</td>
        <td>Como operador, quero identificar serviços indisponíveis ou sem métricas para agir rapidamente sobre incidentes.</td>
        <td>Status mapeados | Regra de tolerância a falhas definida</td>
        <td>Dashboard exibe alertas textuais e por ícones indicando ausência de resposta ou métricas</td>
    </tr>
    <tr>
        <td>US03</td>
        <td>Como analista, quero comparar o impacto ambiental entre serviços para decidir estratégias de otimização de nuvem.</td>
        <td>Histórico de métricas persistido | Filtros de intervalo definidos</td>
        <td>Tela de comparação exibindo métricas consolidadas de múltiplos serviços em gráfico/tabela</td>
    </tr>
    <tr>
        <td>US04</td>
        <td>Como administrador, quero autenticar-me com segurança para alterar intervalos e parâmetros de monitoramento.</td>
        <td>Fluxo de login definido | Middleware JWT planejado</td>
        <td>Login funcional, JWT retornado no padrão Bearer e rotas de configuração restritas</td>
    </tr>
</table>

<hr>

<h2 id="planejamento-de-sprints">🚀 Planejamento de Sprints</h2>
<ul>
    <li>
        <a href="#documentacao">🗎 Documentação</a>
        <ul>
            <li><a href="#bancodedados">🗃️ Banco de dados</a></li>
            <li><a href="#casosdeuso">📊 Diagrama de casos de uso</a></li>
            <li><a href="#classes">📊 Diagrama de classes</a></li>
            <li><a href="#ihc">🎨 Protótipos IHC e Usabilidade</a></li>
        </ul>
    </li>
    <li>
        <a href="#sprint1">⏱️ Sprint 1 (20/10/2026)</a>
        <ul>
            <li><a href="#backlogsprint1">📋 Backlog</a></li>
            <li><a href="#burndownsprint1">📉 Burndown</a></li>
        </ul>
    </li>
    <li>
        <a href="#sprint2">⏱️ Sprint 2 (10/11/2026)</a>
        <ul>
            <li><a href="#backlogsprint2">📋 Backlog</a></li>
            <li><a href="#burndownsprint2">📉 Burndown</a></li>
        </ul>
    </li>
    <li>
        <a href="#sprint3">⏱️ Sprint 3 (23/11/2026)</a>
        <ul>
            <li><a href="#backlogsprint3">📋 Backlog</a></li>
            <li><a href="#burndownsprint3">📉 Burndown</a></li>
        </ul>
    </li>
</ul>

<hr>

<h3 id="sprint1">⏱️ Sprint 1 — Descoberta, Coleta de Métricas e Estrutura Base 🥇</h3>
<h4 id="backlogsprint1">📋 Backlog Sprint 1</h4>
<table>
    <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Pontos</th>
        <th>Status</th>
        <th>Requisitos Atendidos</th>
    </tr>
    <tr>
        <td colspan="5"><strong>📖 Levantamento e Modelagem</strong></td>
    </tr>
    <tr>
        <td>1</td>
        <td>Modelagem do banco e entidades ORM</td>
        <td>5</td>
        <td>🔄 A Fazer</td>
        <td>RP03, RNF08</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Criação do Diagrama de Casos de Uso e Arquitetura</td>
        <td>3</td>
        <td>🔄 A Fazer</td>
        <td>RNF08</td>
    </tr>
    <tr>
        <td colspan="5"><strong>🔙 Backend NestJS</strong></td>
    </tr>
    <tr>
        <td>3</td>
        <td>Configuração inicial do NestJS com Docker e PostgreSQL</td>
        <td>3</td>
        <td>🔄 A Fazer</td>
        <td>RP02, RP03, RP05</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Service de integração com Agregador de Métricas e Carbon Intensity</td>
        <td>5</td>
        <td>🔄 A Fazer</td>
        <td>RF01, RF03, RP04</td>
    </tr>
    <tr>
        <td colspan="5"><strong>🎨 Frontend Inicial</strong></td>
    </tr>
    <tr>
        <td>5</td>
        <td>Setup do projeto React + TypeScript com Vite e Docker</td>
        <td>2</td>
        <td>🔄 A Fazer</td>
        <td>RP01, RP05</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Componentes base de visualização e layout</td>
        <td>3</td>
        <td>🔄 A Fazer</td>
        <td>RNF01, RNF02</td>
    </tr>
</table>

<h4 id="burndownsprint1">📉 Burndown Sprint 1</h4>
<p><em>A ser adicionado durante a execução da sprint.</em></p>

<hr>

<h3 id="sprint2">⏱️ Sprint 2 — Cálculos Ambientais, Dashboard e Autenticação 🥈</h3>
<h4 id="backlogsprint2">📋 Backlog Sprint 2</h4>
<p><em>Em planejamento.</em></p>
<h4 id="burndownsprint2">📉 Burndown Sprint 2</h4>
<p><em>A definir.</em></p>

<hr>

<h3 id="sprint3">⏱️ Sprint 3 — Ranking, Comparações, IHC e Finalização 🥉</h3>
<h4 id="backlogsprint3">📋 Backlog Sprint 3</h4>
<p><em>Em planejamento.</em></p>
<h4 id="burndownsprint3">📉 Burndown Sprint 3</h4>
<p><em>A definir.</em></p>

<hr>

<h2 id="integrantes">🧑‍💻 Integrantes</h2>
<table>
    <tr>
        <th>Foto</th>
        <th>Nome Completo</th>
        <th>Papel</th>
        <th>LinkedIn</th>
        <th>GitHub</th>
    </tr>
    <tr>
        <td><img src="./public/static/undefined/Rainan.jpg" width="80"></td>
        <td>Rainan de Oliveira Reis</td>
        <td>Product Owner & Dev Fullstack</td>
        <td><a href="https://www.linkedin.com/in/rainan-reis-757384365/">LinkedIn</a></td>
        <td><a href="https://github.com/RainanKaneka">GitHub</a></td>
    </tr>
    <tr>
        <td><img src="./public/static/undefined/Thales.jpg" width="80"></td>
        <td>Thales Cambraia Dias</td>
        <td>Scrum Master & Dev Frontend</td>
        <td><a href="https://www.linkedin.com/in/thales-tcd/">LinkedIn</a></td>
        <td><a href="https://github.com/thalestcd">GitHub</a></td>
    </tr>
    <tr>
        <td><img src="./public/static/undefined/Pedro.jpg" width="80"></td>
        <td>Pedro Augusto Gomes</td>
        <td>Dev Backend & DevOps</td>
        <td><a href="https://www.linkedin.com/in/pedro-augusto-gomes">LinkedIn</a></td>
        <td><a href="https://github.com/PedrinhoDBR">GitHub</a></td>
    </tr>
    <tr>
        <td><img src="./public/static/undefined/Marcus.jpg" width="80"></td>
        <td>Marcus Vinicius Ribeiro do Nascimento</td>
        <td>Dev Backend</td>
        <td><a href="https://www.linkedin.com/in/marcus-nascimento-50a0ba1b5">LinkedIn</a></td>
        <td><a href="https://github.com/MarcusVRDN">GitHub</a></td>
    </tr>
    <tr>
        <td><img src="./public/static/undefined/Israel.jpg" width="80"></td>
        <td>Israel da Silva Lemes</td>
        <td>Dev Backend</td>
        <td><a href="https://www.linkedin.com/in/israel-lemes/">LinkedIn</a></td>
        <td><a href="https://github.com/Israelisl">GitHub</a></td>
    </tr>
    <tr>
        <td><img src="./public/static/undefined/Nadla.jpg" width="80"></td>
        <td>Nadla Fernandes Ferreira</td>
        <td>Dev Frontend & UI/UX</td>
        <td><a href="https://www.linkedin.com/in/nadla-ferreira-4646433a8/">LinkedIn</a></td>
        <td><a href="https://github.com/NadlaFernandes">GitHub</a></td>
    </tr>
</table>

<hr>

<h2 id="documentacao">🖺 Documentação</h2>
<p>Toda a documentação técnica e de processos está organizada no diretório <a href="./docs/README.md"><code>docs/</code></a>:</p>
<ul>
    <li>📋 <a href="./docs/plano-de-entregas.md"><strong>Plano de Entregas das Sprints</strong></a> — Distribuição dos 28 critérios da rubrica e participação dos integrantes.</li>
    <li>✅ <a href="./docs/definicao-de-pronto.md"><strong>Definição de Pronto (DoD)</strong></a> — Critérios de aceite e qualidade para conclusão de tarefas (GA07).</li>
    <li>🏗️ <a href="./docs/arquitetura.md"><strong>Arquitetura de Software</strong></a> — Estrutura NestJS, React, PostgreSQL, Docker e fluxo de dados.</li>
    <li>⚡ <a href="./docs/calculos.md"><strong>Memória de Cálculo Ambiental</strong></a> — Fórmulas matemáticas de kWh, emissão de CO₂e e fatores regionais.</li>
    <li>🔌 <a href="./docs/api.md"><strong>Documentação da API REST</strong></a> — Endpoints, métodos HTTP, DTOs e autenticação JWT.</li>
    <li>🎨 <a href="./docs/interface.md"><strong>Interface e Usabilidade (IHC)</strong></a> — Personas, fluxos, protótipos Figma e testes de usabilidade.</li>
    <li>⏱️ <strong>Sprints:</strong>
        <a href="./docs/sprints/sprint-1.md">Sprint 1</a> | 
        <a href="./docs/sprints/sprint-2.md">Sprint 2</a> | 
        <a href="./docs/sprints/sprint-3.md">Sprint 3</a>
    </li>
</ul>
