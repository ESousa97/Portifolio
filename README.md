# Portifolio

[![CI](https://github.com/ESousa97/Portifolio/actions/workflows/ci.yml/badge.svg)](https://github.com/ESousa97/Portifolio/actions/workflows/ci.yml)
[![Pages](https://github.com/ESousa97/Portifolio/actions/workflows/pages.yml/badge.svg)](https://github.com/ESousa97/Portifolio/actions/workflows/pages.yml)

Portfólio pessoal (site estático) em **HTML/CSS** com automação de qualidade (format/lint) e deploy.

<div align="center">
   <img
      src="https://user-images.githubusercontent.com/114963739/230698650-fac8052e-0d47-48eb-a8be-830b82f9d824.png"
      alt="Screenshot do portfólio"
      width="720"
   />
</div>

## Links

- **GitHub Pages (este repositório):** `https://esousa97.github.io/Portifolio/`
- **Vercel (se ativo):** https://portifolio-sousadev97.vercel.app
- **LinkedIn:** https://www.linkedin.com/in/enoque-sousa-bb89aa168/
- **GitHub:** https://github.com/SousaDev97

## Motivação

Um portfólio precisa ser simples, rápido de abrir e fácil de manter. Este repo mantém o site **sem bundlers** (você abre e funciona), mas com governança profissional: padrões, CI, templates e documentação.

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

## Contribuição

Veja: `CONTRIBUTING.md`.

## Licença

MIT — veja `LICENSE`.

## Status

Maintained.

## Autor

- José Enoque Costa de Sousa
