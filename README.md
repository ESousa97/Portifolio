# Portifolio

[![CI](https://github.com/ESousa97/Portifolio/actions/workflows/ci.yml/badge.svg)](https://github.com/ESousa97/Portifolio/actions/workflows/ci.yml)
[![Pages](https://github.com/ESousa97/Portifolio/actions/workflows/pages.yml/badge.svg)](https://github.com/ESousa97/Portifolio/actions/workflows/pages.yml)

Site estático de portfólio pessoal, escrito em **HTML/CSS**, com automação de qualidade (format/lint) e deploy via GitHub Pages.

## Motivação

Um portfólio precisa ser simples, rápido de abrir e fácil de manter. Este repositório mantém o site **sem bundlers** (você abre e funciona), mas com o mesmo nível de governança esperado em projetos profissionais: padrões, CI, templates e documentação.

## Funcionalidades

- Páginas: Home, Sobre, Currículo
- Links para redes sociais e contato
- Certificados em PDF
- Layout responsivo

## Stack e requisitos

- Runtime do site: qualquer servidor estático
- Stack: HTML + CSS
- Tooling: Node.js 20+ (apenas para lint/format/build)

## Instalação

```bash
npm install
```

## Uso

### Rodar localmente (sem Node)

- Abra `index.html` no navegador.

### Rodar localmente (servidor estático)

```bash
python -m http.server 8080
```

Acesse: `http://localhost:8080/`

## Qualidade (scripts)

```bash
npm run format
npm test
npm run build
```

## Arquitetura

Arquitetura simples e direta:

```
.
├── index.html
├── about.html
├── curriculo.html
├── styles/
│   └── style.css
├── assets/
└── certificados/
```

Detalhes em: `docs/architecture.md`.

## Roadmap

- [ ] Adicionar metatags (Open Graph) e melhorias de acessibilidade
- [ ] Publicar screenshot atualizado no README

## Contribuição

Veja: `CONTRIBUTING.md`.

## Licença

MIT — veja `LICENSE`.

## Status

Maintained.

## Autor

- José Enoque Costa de Sousa
- LinkedIn: https://www.linkedin.com/in/enoque-sousa-bb89aa168/
