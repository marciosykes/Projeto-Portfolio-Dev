# Projeto Portfólio (Estudo Rocketseat)

Este é um projeto de portfólio desenvolvido a partir das aulas da Rocketseat. O projeto utiliza HTML e CSS, aplicando técnicas de layout com flexbox e grid, e um pouco de JavaScript para interatividade.

## Tecnologias Utilizadas

- **HTML5:** Para a estrutura semântica do site.
- **CSS3:** Para toda a estilização, incluindo:
  - CSS Grid e Flexbox para layouts responsivos.
  - Variáveis CSS (Custom Properties) para gerenciar o tema (cores, fontes).
  - Animações e transições (`:hover`).
- **JavaScript (Vanilla):** Para adicionar interatividade, como o scroll suave.

## Como Visualizar

1.  Clone o repositório (ou baixe os arquivos).
2.  Navegue até o diretório do projeto.
3.  Abra o arquivo `index.html` no seu navegador preferido.

## Estrutura Detalhada do Projeto

Como este é um projeto de estudo, aqui está uma explicação do que cada arquivo e pasta faz:

Projeto Porfólio Dev/
│
├── README.md
│   └── 📄 (Este arquivo) Descreve o projeto, as tecnologias e a estrutura.
│
├── index.html
│   └── 📄 É o "esqueleto" da página. Contém toda a estrutura HTML
│       e conecta os arquivos CSS e JavaScript.
│
├── js/
│   └── 📂 Pasta para os arquivos JavaScript (comportamento).
│       └── main.js
│           └── 📄 Contém o script que faz a seta (ícone "vector")
│               rolar suavemente para a seção "#projects" ao ser clicada.
│
├── styles/
│   └── 📂 Pasta para as folhas de estilo (design).
│       ├── index.css
│       │   └── 📄 Arquivo principal que usa @import para carregar
│       │       TODOS os outros arquivos CSS na ordem correta.
│       ├── global.css
│       │   └── 📄 Define as "regras globais": fontes, reset de margens
│       │       e as variáveis CSS (:root) para cores e fontes.
│       ├── intro.css
│       │   └── 📄 Estilos da seção inicial (header), incluindo o avatar,
│       │       títulos e as tags de tecnologia.
│       ├── projects.css
│       │   └── 📄 Estilos da grade de projetos (grid layout)
│       │       e os cards de cada projeto.
│       ├── services.css
│       │   └── 📄 Estilos da seção "Meus serviços".
│       └── contact.css
│           └── 📄 Estilos da seção final de "Contato" e dos links
│               de redes sociais.
│
└── assets/
    └── 📂 Pasta para todos os recursos visuais (imagens, ícones).
        ├── icons/
        │   └── 📂 Subpasta para os ícones (SVGs) usados nas tags
        │       (HTML, CSS, JS...) e links de contato (Github, Linkedin...).
        └── images/
            └── 📂 Subpasta para as imagens (PNGs), como o avatar,
                os fundos de seção e as miniaturas (thumbnails)
                de cada projeto.