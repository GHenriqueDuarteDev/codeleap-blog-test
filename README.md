# CodeLeap Network - Front-end Challenge

Um projeto front-end desenvolvido como parte do processo seletivo da **CodeLeap**. A aplicação consiste em uma rede social simples no formato CRUD (Create, Read, Update, Delete), onde os usuários podem realizar postagens, editá-las e excluí-las.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído focado em performance, tipagem estática e boas práticas de UI/UX, utilizando as ferramentas mais modernas do ecossistema React:

- **[React](https://react.dev/) + [Vite](https://vitejs.dev/):** Para uma renderização rápida e ambiente de desenvolvimento otimizado.
- **[TypeScript](https://www.typescriptlang.org/):** Para garantir segurança de tipos e evitar bugs em tempo de execução.
- **[Tailwind CSS v4](https://tailwindcss.com/):** Para uma estilização utilitária ágil, responsiva e alinhada perfeitamente (Pixel Perfect) com o design do Figma.
- **[TanStack Query (React Query)](https://tanstack.com/query/latest):** Gerenciamento de estado assíncrono, cache inteligente e revalidação automática de dados (sem necessidade de recarregar a página após criar, editar ou deletar posts).
- **[Zustand](https://zustand-demo.pmnd.rs/):** Gerenciamento de estado global leve e sem boilerplate para manter o `username` do usuário logado persistido localmente.
- **[Radix UI](https://www.radix-ui.com/):** Componentes _Headless_ para garantir que os Modais de Edição e Exclusão sejam 100% acessíveis (suporte a teclado e leitores de tela) e controláveis.
- **[Axios](https://axios-http.com/):** Cliente HTTP para comunicação eficiente com a REST API em Django.
- **[date-fns](https://date-fns.org/):** Para formatação amigável do tempo de postagem (ex: "25 minutes ago").

## ✨ Funcionalidades e Diferenciais Implementados

Além dos requisitos básicos do CRUD, o projeto conta com:

- **Autenticação Local:** O `username` é salvo e persistido, garantindo que o usuário não perca o acesso ao recarregar a página. Rotas protegidas impedem o acesso ao feed sem um nome de usuário.
- **Validação de Propriedade:** Botões de Edição e Exclusão aparecem estritamente nos posts criados pelo usuário atual.
- **Loading States Inteligentes:** Implementação de _Skeletons_ animados durante o carregamento inicial da API, melhorando drasticamente a percepção de performance (UX).
- **Proteção de Formulários:** Botões de _submit_ são desabilitados dinamicamente se os campos estiverem vazios ou enquanto as requisições estão em andamento (evitando duplicação de dados).
- **Acessibilidade (a11y):** Uso de HTML semântico (`<main>`, `<label>`, hierarquia correta de Headings) e gerenciamento de foco nos modais.

## ⚙️ Como executar o projeto localmente

Pré-requisitos: É necessário ter o **Node.js** e o **pnpm** (ou npm/yarn) instalados na sua máquina.

1. Clone o repositório:

```bash
git clone [https://github.com/GHenriqueDuarteDev/codeleap-blog-test](https://github.com/GHenriqueDuarteDev/codeleap-blog-test)
```

2. Acesse a pasta do projeto:

```bash
cd codeleap-blog-test
```

3. Instale as dependências:

```bash
pnpm install
```

4. Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

A aplicação estará disponível no seu navegador em http://localhost:5173.

🌐 Deploy
O projeto está publicado e pode ser acessado através do link:

[CodeLeap Blog Test - Deploy na Vercel](https://codeleap-blog-test.vercel.app/)
