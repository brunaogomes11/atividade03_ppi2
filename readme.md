# 🎓 Gerenciador de Alunos (CRUD)

Este projeto é uma aplicação web para o gerenciamento de alunos, desenvolvida como parte da **Atividade Prática 03** da disciplina de Programação para Internet 2 (PPI2).

A aplicação permite realizar operações completas de **CRUD** (Criar, Ler, Atualizar e Deletar) consumindo uma API REST.

## 🚀 Funcionalidades

- **Listagem de Alunos**: Exibe todos os alunos cadastrados com nome, idade e curso.
- **Cadastro**: Formulário para adicionar novos alunos.
- **Edição**: Permite atualizar os dados de um aluno existente reutilizando o formulário principal.
- **Exclusão Segura**: Modal de confirmação personalizado antes de apagar um registro.
- **Interface Moderna**:
  - Tema Escuro (Dark Mode) com paleta de cores em **Preto, Amarelo e Verde**.
  - Design responsivo e estilizado com CSS moderno.
  - Feedback visual interativo (hover effects, focus states).

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica.
- **CSS3**: Estilização personalizada, Flexbox, e variáveis.
- **JavaScript (Vanilla)**: Manipulação do DOM e consumo de API via `fetch`.
- **Google Fonts**: Tipografia moderna com a fonte 'Inter'.

## 🎨 Identidade Visual

O projeto segue uma paleta de cores de alto contraste:

- **Fundo**: Preto (`#000000` / `#111111`)
- **Destaques**: Amarelo Ouro (`#FFD700`)
- **Ações Positivas (Editar)**: Verde (`#00C853`)
- **Ações Destrutivas (Excluir)**: Vermelho (`#d32f2f`)

## 📦 Como Executar

1. **Backend**: Certifique-se de que a API está rodando localmente na porta `3000`.
   - Endpoint base: `http://localhost:3000/alunos`
2. **Frontend**:
   - Clone este repositório.
   - Abra o arquivo `index.html` em seu navegador de preferência.

---

## 📝 Instruções Originais da Atividade

### Objetivo

Implementar a função `atualizarAluno(id)` no frontend para permitir **editar os dados dos alunos** de forma interativa.

### Requisitos Atendidos

- [x] `carregarAlunos()`: Listagem implementada.
- [x] `deletarAluno(id)`: Exclusão com modal de confirmação.
- [x] `atualizarAluno(id)`: Edição populando o formulário principal.
- [x] `PUT/PATCH`: Envio de dados atualizados para o backend.
- [x] Estilização aprimorada.
