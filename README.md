
# 📌 Projeto: psel-monks-especialista-1-leandro-cabeda-rigo

Projeto completo com **Frontend em React + Vite + styled-components + ContextAPI** e **Backend em PHP + MySQL via Docker**.

---

## 🚀 Tecnologias Utilizadas:

### Frontend:
- React (Vite)
- Styled-components
- ContextAPI
- Axios
- React Hook Form + Yup
  
### Backend:
- PHP 8.1
- MySQL 5.7
- Docker + Docker Compose

---

## 🎯 Funcionalidades:

- Layout 100% responsivo (mobile e desktop)
- Navegação dinâmica (categorias, cards, hero section, footer)
- Formulário de contato validado e integrado com backend
- Backend em PHP com API REST simples e funcional
- Banco MySQL rodando via Docker
- Dados dinâmicos carregados da API
- Estrutura organizada e fácil de adaptar

---

## 📁 Estrutura do Projeto:

---

## ⚙️ Como rodar o projeto:

### 1️⃣ Backend:

Certifique-se de ter **Docker** instalado.

```bash
cd backend
docker-compose up
```

**Configuração do banco:**
- Host: `localhost:3306`
- User: `user`
- Password: `password`
- Database: `monksdb`

O PHP estará rodando em:  
📡 `http://localhost:8080/api`

---

### 2️⃣ Frontend:

```bash
cd frontend
npm install
npm run dev
```

Frontend disponível em:  
📡 `http://localhost:5173`

---

## 🌐 Endpoints API:

| Método | Rota                 | Descrição                                   |
|-------|---------------------|--------------------------------------------|
| GET   | `/api/categories`    | Retorna lista de categorias                |
| GET   | `/api/cards`         | Retorna lista de cards                     |
| POST  | `/api/contact-form`  | Recebe dados do formulário e salva no DB   |

---

## 📄 Estrutura do Frontend:

- **Navbar:** Menu dinâmico com categorias.
- **HeroSection:** Banner principal.
- **CategoryTags:** Tags dinâmicas.
- **CardList:** Cards dinâmicos.
- **ContactForm:** Formulário validado e envio para API.
- **Footer:** Informações do rodapé.

---

## 📚 Como adaptar:

- Para trocar imagens e textos, altere os dados no banco (`cards`, `categories`).
- Para mudar cores, fontes ou espaçamentos, edite os styled-components.

---


## 📞 Suporte:

Dúvidas ou ajustes? Fique à vontade para entrar em contato.
Leandro Cabeda Rigo  leandro.cabeda@hotmail.com
