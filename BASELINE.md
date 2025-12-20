# BASELINE — Estado atual do repositório

Data do baseline: 2025-12-20

## Inventário

- **Tipo de projeto:** site estático (portfólio)
- **Linguagens:** HTML, CSS
- **Frameworks:** nenhum (vanilla)
- **Gerenciador de dependências:** nenhum atualmente
- **Runtime alvo:** qualquer servidor estático (GitHub Pages / Netlify / Vercel static / nginx)

## Estrutura atual

- **Entrypoints (páginas):** `index.html`, `about.html`, `curriculo.html`
- **Estilos:** `styles/Style.css`
- **Assets:** `assets/` (ícones e imagem de perfil)
- **Certificados:** `certificados/` (PDFs)

## Como rodar hoje

- Abrir `index.html` no navegador.
- Ou servir com um servidor estático (ex.: `python -m http.server 8080`) e acessar `http://localhost:8080/`.

## Status de qualidade

- **build:** PASS (`npm run build`)
- **lint:** PASS (`npm run lint`)
- **test:** PASS (`npm test` — alias do lint)

## Riscos técnicos identificados

- **Nomes inconsistentes/case-sensitive:** resolvido (CSS padronizado em `styles/style.css`).
- **HTML com erros de markup:** resolvido (validação automática via `html-validate`).
- **Links com paths absolutos:** resolvido (paths relativos).
- **README com HTML inválido:** resolvido (README reescrito).
- **Sem automação:** resolvido (CI, Pages, templates, dependabot, lint/test/build).

## O que será tratado nas próximas etapas

1. **Padronização do repositório:** `.editorconfig`, `.gitignore`, `.gitattributes`, `.github/*` (templates + CI).
2. **Qualidade de código:** formatter (Prettier), lints (HTML/CSS), validação de HTML.
3. **Correções funcionais seguras:** corrigir paths absolutos, consertar markup inválido, padronizar nome de CSS.
4. **Documentação A+:** README completo + governança (CONTRIBUTING, CoC, SECURITY, CHANGELOG, LICENSE).
5. **Relatório final:** consolidar mudanças, comandos e checklist.
