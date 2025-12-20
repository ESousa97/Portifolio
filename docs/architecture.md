# Architecture

## Overview

This repository is a **static site**.

- Pages: `index.html`, `about.html`, `curriculo.html`
- Styles: `styles/style.css`
- Assets (images/icons): `assets/`
- Certificates (PDF): `certificados/`

## Design principles

- Keep it simple: no build step required to run the site.
- Use tooling only for quality gates (format/lint) and consistency.

## Local flow

- Open `index.html` directly, or serve with a static server.
- Run `npm test` to validate formatting + HTML + CSS.
