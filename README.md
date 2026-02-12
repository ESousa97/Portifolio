<div align="center">

# Portfólio

[![CI](https://img.shields.io/github/actions/workflow/status/ESousa97/Portifolio/ci.yml?style=flat&logo=github-actions&logoColor=white)](https://github.com/ESousa97/Portifolio/actions/workflows/ci.yml)
[![CodeFactor](https://img.shields.io/codefactor/grade/github/ESousa97/Portifolio?style=flat&logo=codefactor&logoColor=white)](https://www.codefactor.io/repository/github/esousa97/portifolio)
[![Pages](https://img.shields.io/github/deployments/ESousa97/Portifolio/github-pages?style=flat&logo=github&label=Pages&logoColor=white)](https://github.com/ESousa97/Portifolio/actions/workflows/pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&logo=opensourceinitiative&logoColor=white)](https://opensource.org/licenses/MIT)

**Portfólio pessoal moderno construído com HTML/CSS puro, automação de qualidade e deploy contínuo.**

[Demo ao Vivo](https://esousa97.github.io/Portifolio/) • [Reportar Bug](https://github.com/ESousa97/Portifolio/issues) • [Solicitar Funcionalidade](https://github.com/ESousa97/Portifolio/issues)

<img src="https://user-images.githubusercontent.com/114963739/230698650-fac8052e-0d47-48eb-a8be-830b82f9d824.png" alt="Screenshot do Portfólio" width="800"/>

</div>

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Demonstração](#demonstração)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Desenvolvimento](#desenvolvimento)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Deploy](#deploy)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre o Projeto

Este projeto é um portfólio pessoal desenvolvido com foco em simplicidade, performance e manutenibilidade. Diferente de muitos portfólios modernos que dependem de frameworks pesados, este projeto utiliza HTML e CSS puros, garantindo:

- **Carregamento ultrarrápido** - Sem bundlers ou dependências de runtime
- **Design responsivo** - Funciona perfeitamente em todos os dispositivos
- **Fácil manutenção** - Código limpo e bem organizado
- **Deploy automatizado** - CI/CD configurado com GitHub Actions
- **Qualidade garantida** - Linting e formatação automática

### Por que sem frameworks?

Um portfólio precisa ser **simples e rápido**. Este projeto prova que é possível ter governança profissional (padrões, CI, templates e documentação) sem a complexidade de frameworks modernos.

---

## Demonstração

Acesse o portfólio em produção:

- **GitHub Pages:** [https://esousa97.github.io/Portifolio/](https://esousa97.github.io/Portifolio/)
- **Vercel:** [https://portifolio-sousadev97.vercel.app](https://portifolio-sousadev97.vercel.app)

---

## Funcionalidades

- **Página Inicial** - Apresentação e destaque de projetos
- **Sobre Mim** - Informações pessoais e profissionais
- **Currículo** - Experiências e formação acadêmica
- **Certificados** - Portfólio de certificações em PDF
- **Links Sociais** - Integração com LinkedIn, GitHub e outras redes
- **Design Responsivo** - Layout adaptável para mobile, tablet e desktop
- **Tema Moderno** - Interface limpa e profissional

---

## Tecnologias

### Core

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

### Ferramentas de Desenvolvimento

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

**Requisitos mínimos:**
- Node.js 20+ (apenas para ferramentas de desenvolvimento)
- Qualquer navegador moderno (para visualização)

---

## Começando

### Pré-requisitos

Para desenvolvimento local com ferramentas de qualidade:

```bash
node --version  # v20 ou superior
npm --version   # v10 ou superior
```

> **Nota:** Para apenas visualizar o site, não são necessárias instalações. Basta abrir `index.html` no navegador.

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/ESousa97/Portifolio.git
cd Portifolio
```

2. **Instale as dependências de desenvolvimento** (opcional)

```bash
npm install
```

### Desenvolvimento

**Opção 1: Visualização direta (sem servidor)**

Abra o arquivo `index.html` diretamente no seu navegador preferido.

**Opção 2: Servidor local (recomendado)**

Com Python:
```bash
python -m http.server 8080
```

Com Node.js:
```bash
npx serve .
```

Acesse: `http://localhost:8080/`

---

## Scripts Disponíveis

```bash
# Formatar código automaticamente
npm run format

# Executar testes de qualidade (lint)
npm test

# Build (validação completa)
npm run build
```

---

## Estrutura do Projeto

```
Portifolio/
├── index.html              # Página inicial
├── about.html              # Página sobre mim
├── curriculo.html          # Página de currículo
├── styles/
│   └── style.css              # Estilos globais
├── assets/
│   ├── images/                # Imagens do site
│   └── icons/                 # Ícones e logos
├── certificados/           # PDFs de certificações
├── docs/
│   └── architecture.md        # Documentação de arquitetura
├── .github/
│   └── workflows/             # CI/CD pipelines
│       ├── ci.yml
│       └── pages.yml
├── CONTRIBUTING.md         # Guia de contribuição
├── LICENSE                 # Licença MIT
└── package.json            # Dependências de dev
```

> Para mais detalhes sobre a arquitetura, consulte [`docs/architecture.md`](docs/architecture.md).

---

## Deploy

### GitHub Pages

O deploy é automático via GitHub Actions sempre que houver push na branch `main`:

```yaml
# .github/workflows/pages.yml
# Deploy configurado automaticamente
```

### Vercel

Para deploy manual no Vercel:

```bash
vercel --prod
```

---

## Contribuindo

Contribuições são bem-vindas! Este projeto segue o [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/MinhaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFuncionalidade'`)
4. Push para a branch (`git push origin feature/MinhaFuncionalidade`)
5. Abra um Pull Request

Por favor, leia [`CONTRIBUTING.md`](CONTRIBUTING.md) para detalhes sobre nosso código de conduta e processo de submissão.

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License - você pode usar, copiar, modificar e distribuir este código.
```

---

## Contato

**José Enoque Costa de Sousa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enoque-sousa-bb89aa168/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/SousaDev97)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=flat&logo=todoist&logoColor=white)](https://esousa97.github.io/Portifolio/)

---

<div align="center">

**[⬆ Voltar ao topo](#-portfólio)**

Feito com ❤️ por [José Enoque](https://github.com/SousaDev97)

**Status do Projeto:** Maintained & Active

</div>
