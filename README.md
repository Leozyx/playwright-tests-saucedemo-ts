# 🎭 Projeto de Testes Automatizados - Playwright + TypeScript

Este projeto automatiza testes da aplicação SauceDemo utilizando Playwright com TypeScript e Azure DevOps Pipelines.

---

## 📂 Estrutura do Projeto

├── devOps/
│ └── azure-pipelines.yml # Pipeline de CI/CD no Azure DevOps
├── Pages/ # Page Objects usados nos testes
│ ├── LoginPage.ts
│ ├── HomePage.ts
│ └── ...
├── Tests/ # Testes automatizados
| |__ checkoutFlow.spec.ts 
| |__ checkoutInformation.spec.ts
| |__ checkoutOverview.spec.ts
│ ├── homePage.spec.ts
│ ├── login.spec.ts
│ └── yourCart.spec.ts
├── playwright.config.ts # Configuração geral do Playwright
├── package.json # Dependências do projeto
└── tsconfig.json # Configuração TypeScript

---

## 🚀 Tecnologias Utilizadas

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Azure DevOps Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/)
- Node.js

---

## 🧪 Como Executar os Testes

### 1. Instalar dependências
npm install

### 2. Executar todos os testes
npx playwright test

### 3. Executar teste específico
npx playwright test nome-do-teste.spec.ts

### 4. Visualizar resultados
npx playwright show-report

## 🔐 Variáveis de Ambiente
Este projeto utiliza variáveis de ambiente para login:
LOGIN_USER
LOGIN_PASSWORD

## Você pode criar um arquivo .env para uso local:
LOGIN_USER=seu_usuario
LOGIN_PASSWORD=sua_senha

## 📦 CI/CD - Azure DevOps
O pipeline definido em devOps/azure-pipelines.yml realiza:

## Instalação de dependências
Execução dos testes automatizados
Publicação de relatórios


👨‍💻 Autor
Leonardo Vinicius Magalhães
[LinkedIn](https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile)
[GitHub](https://github.com/Leozyx/playwright-tests-saucedemo-ts)