# 🔌 Especificação da API REST — GreenER

> **Critérios da Rubrica:** DW03, DW06, DW07, TP05  
> **Repositório:** [abpundefined/3DSM-ABP-UNDEFINED](https://github.com/abpundefined/3DSM-ABP-UNDEFINED)  
> **Backend:** NestJS (Porta padrão: `3000`)  
> **Base URL:** `http://localhost:3000/api`  
> **Documentação Swagger Interativa:** `http://localhost:3000/api/docs`  

---

## 🔒 1. Autenticação e Segurança (DW06)

A API utiliza autenticação baseada em **JSON Web Token (JWT)** no padrão `Bearer Token` para endpoints administrativos e alteração de parâmetros de monitoramento (**RF16**, **RF17**).

Rotas públicas de consulta de métricas e status não exigem token. Rotas protegidas exigem o cabeçalho HTTP:
```http
Authorization: Bearer <seu_token_jwt>
```

---

## 📑 2. Sumário dos Endpoints

| Método | Endpoint | Protegido? | Descrição |
| :---: | :--- | :---: | :--- |
| `POST` | `/auth/login` | Não | Realiza login do administrador e devolve token JWT |
| `GET` | `/services` | Não | Lista todos os serviços descobertos com status atual |
| `GET` | `/services/:id` | Não | Detalhes de um serviço específico e última métrica |
| `GET` | `/services/:id/history` | Não | Histórico cronológico de coletas para gráficos |
| `GET` | `/services/ranking` | Não | Ranking de serviços ordenados por consumo ou CO₂e |
| `GET` | `/services/compare` | Não | Comparação lado a lado entre múltiplos serviços |
| `GET` | `/metrics/aggregate` | Não | Indicadores consolidados da infraestrutura (totais ESG) |
| `POST` | `/admin/config` | **Sim (JWT)** | Atualiza intervalos de coleta e parâmetros do sistema |
| `GET` | `/health` | Não | Health check da aplicação e conectividade com o banco |

---

## 📡 3. Detalhamento dos Endpoints

### 3.1 `POST /auth/login`
Autentica o usuário administrador.

* **Corpo da Requisição (JSON):**
  ```json
  {
    "username": "admin",
    "password": "senha_segura"
  }
  ```
* **Resposta de Sucesso (`200 OK`):**
  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 3600,
    "token_type": "Bearer"
  }
  ```
* **Resposta de Erro (`401 Unauthorized`):**
  ```json
  {
    "statusCode": 401,
    "message": "Credenciais inválidas",
    "error": "Unauthorized"
  }
  ```

---

### 3.2 `GET /services`
Retorna a listagem de todos os serviços descobertos no Agregador de Métricas.

* **Parâmetros de Consulta (Query Params - Opcionais):**
  - `status`: Filtra por `ACTIVE`, `UNAVAILABLE` ou `NO_METRICS`
  - `region`: Filtra por região (ex: `sa-east-1`)
* **Resposta de Sucesso (`200 OK`):**
  ```json
  [
    {
      "id": "srv-auth-01",
      "name": "Auth Service",
      "service_type": "Microservice",
      "region": "Brazil (sa-east-1)",
      "latitude": -23.5505,
      "longitude": -46.6333,
      "status": "ACTIVE",
      "last_collection": {
        "collected_at": "2026-10-01T03:00:00.000Z",
        "cpu_usage_mcores": 450,
        "memory_usage_bytes": 1073741824,
        "estimated_energy_kwh": 0.000045,
        "estimated_carbon_emission_g": 0.0038
      }
    }
  ]
  ```

---

### 3.3 `GET /metrics/aggregate`
Retorna os indicadores consolidados de toda a infraestrutura para o dashboard principal.

* **Parâmetros de Consulta:**
  - `period`: `today`, `last_7_days`, `month` (Padrão: `today`)
* **Resposta de Sucesso (`200 OK`):**
  ```json
  {
    "period": "today",
    "services_count": {
      "total": 12,
      "active": 10,
      "unavailable": 1,
      "no_metrics": 1
    },
    "totals": {
      "energy_kwh": 14.85,
      "carbon_emission_kg": 1.26,
      "requests_processed": 1420500
    },
    "updated_at": "2026-10-01T03:30:00.000Z"
  }
  ```

---

### 3.4 `GET /services/ranking`
Ordena os serviços pelo impacto ambiental em determinado período (**RF14**).

* **Parâmetros de Consulta:**
  - `by`: `energy` ou `carbon` (Padrão: `carbon`)
  - `order`: `desc` ou `asc` (Padrão: `desc`)
* **Resposta de Sucesso (`200 OK`):**
  ```json
  [
    {
      "rank": 1,
      "service_id": "srv-video-transcoder",
      "name": "Video Transcoding Engine",
      "total_carbon_g": 354.2,
      "total_energy_kwh": 4.12
    },
    {
      "rank": 2,
      "service_id": "srv-search-api",
      "name": "Search & Indexer API",
      "total_carbon_g": 182.7,
      "total_energy_kwh": 2.15
    }
  ]
  ```

---

### 3.5 `GET /services/compare`
Compara múltiplos serviços simultaneamente (**RF15**).

* **Parâmetros de Consulta:**
  - `ids`: Lista de IDs separados por vírgula (ex: `ids=srv-auth-01,srv-catalog-02`)
  - `from`: Data inicial ISO 8601
  - `to`: Data final ISO 8601
* **Resposta de Sucesso (`200 OK`):** Array comparativo com curvas temporais e médias de consumo de cada serviço.

---

### 3.6 `POST /admin/config` (Protegido)
Altera os parâmetros de coleta da aplicação.

* **Cabeçalho:** `Authorization: Bearer <token>`
* **Corpo da Requisição (JSON):**
  ```json
  {
    "polling_interval_seconds": 60,
    "pue_default": 1.25,
    "fallback_carbon_intensity": 85.0
  }
  ```
* **Resposta de Sucesso (`200 OK`):**
  ```json
  {
    "message": "Configurações atualizadas com sucesso",
    "updated_at": "2026-10-01T03:35:00.000Z"
  }
  ```
