# 🛍️ Digital Store

Projeto desenvolvido como desafio final de Front-end da Digital College.

A proposta foi construir uma aplicação web de e-commerce utilizando React, aplicando conceitos de componentização, rotas e boas práticas de organização de código.

---

## 🚀 Sobre o projeto

A Digital Store é uma loja virtual onde o usuário pode:

* navegar pelos produtos
* buscar itens pelo nome
* visualizar detalhes de um produto
* explorar categorias (estrutura preparada)
* simular uma experiência de compra

O layout foi baseado no design disponibilizado no Figma do desafio.

---

## 🧩 Funcionalidades

* Página inicial com banner e produtos em destaque
* Listagem de produtos com busca e ordenação
* Página de detalhes do produto
* Navegação entre páginas com React Router
* Componentes reutilizáveis
* Layout responsivo (mobile + desktop)

---

## 🗂️ Estrutura do projeto

O projeto foi organizado separando componentes reutilizáveis das páginas:

```bash
src/
  components/
    Header/
    Footer/
    Logo/
    Gallery/
    Section/
    ProductCard/
    ProductListing/
    ProductOptions/
    BuyBox/
    FilterGroup/
  pages/
    Layout/
    HomePage/
    ProductListingPage/
    ProductViewPage/
    CategoriesPage/
    MyOrdersPage/
    LoginPage/
    RegisterPage/
  data/
    products.ts
  routes/
    index.tsx
```

---

## 🛠️ Tecnologias utilizadas

* React
* TypeScript
* Vite
* React Router DOM
* Tailwind CSS

---

## ▶️ Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/projeto-digital-store.git
```

Entre na pasta:

```bash
cd projeto-digital-store
```

Instale as dependências:

```bash
npm install
```

Rode o projeto:

```bash
npm run dev
```

Acesse no navegador:

```bash
http://localhost:5173
```

---

## 📦 Build

Para gerar a versão de produção:

```bash
npm run build
```

---

## 🌐 Deploy

O projeto foi publicado na Vercel:

👉 https://seu-projeto.vercel.app

---

## 👨‍💻 Autor

* Matheus Chimendes

---

## 📌 Observações

Esse projeto foi desenvolvido com foco em aprendizado e prática de:

* React
* organização de componentes
* construção de interfaces
* navegação entre páginas

Algumas funcionalidades (como filtros avançados e carrinho) foram mantidas apenas visuais conforme proposta do desafio.
