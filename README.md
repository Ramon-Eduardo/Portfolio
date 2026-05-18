# 🚀 Portfólio Ramon

Um portfólio pessoal moderno e responsivo construído com as tecnologias mais recentes da web. Demonstra projetos, habilidades e fornece uma maneira fácil de entrar em contato.

---

## ✨ Características

- 🎨 **Design Moderno** - Interface limpa e profissional com gradientes animados
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- 🌐 **Multilíngue** - Suporte para múltiplos idiomas
- ⚡ **Performance Otimizada** - Next.js 16 com Server Components
- 🎭 **Componentes Interativos** - Elementos visuais engajantes e animações suaves
- 📧 **Sistema de Contato** - Formulário integrado com Nodemailer
- 🎯 **SEO Friendly** - Metadados otimizados para mecanismos de busca
- 🌙 **Tema Customizável** - Cores e estilos personalizáveis

---

## 🛠️ Tecnologias

### Frontend
- **Next.js 16.2.4** - React Framework moderno
- **React 19.2.4** - Biblioteca UI
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Lucide React** - Ícones SVG

### Backend & Email
- **Nodemailer 8.0.7** - Sistema de envio de emails

### Ferramentas de Desenvolvimento
- **ESLint 9** - Linter de código
- **PostCSS 4** - Processamento de CSS

---

## 📋 Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados:

- **Node.js** >= 18.17
- **npm** >= 9 (ou yarn/pnpm)

---

## 🚀 Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**

Crie um arquivo `.env.local` na raiz do projeto:
```env
SMTP_HOST=seu-host-smtp
SMTP_PORT=sua-porta
SMTP_USER=seu-email
SMTP_PASSWORD=sua-senha
SMTP_FROM_EMAIL=seu-email@example.com
```

---

## 🏃 Como Executar

### Desenvolvimento
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

---

## 📁 Estrutura do Projeto

```
portfolio/
├── app/                      # App directory do Next.js
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página inicial
│   ├── globals.css          # Estilos globais
│   └── api/
│       └── send-email/      # Endpoint para envio de emails
├── components/              # Componentes React reutilizáveis
│   ├── Navbar.tsx           # Barra de navegação
│   ├── About.tsx            # Seção sobre
│   ├── Skills.tsx           # Seção de habilidades
│   ├── Projects.tsx         # Seção de projetos
│   ├── Contact.tsx          # Formulário de contato
│   ├── Footer.tsx           # Rodapé
│   ├── LanguageSwitcher.tsx # Seletor de idioma
│   ├── icons/               # Componentes de ícones
│   └── svg/                 # Componentes SVG customizados
├── context/                 # Context API do React
│   └── LanguageContext.tsx  # Contexto de idioma
├── utils/                   # Funções utilitárias
│   └── translations.ts      # Traduções dos textos
├── public/                  # Arquivos estáticos
├── tailwind.config.ts       # Configuração Tailwind
├── tsconfig.json            # Configuração TypeScript
└── package.json             # Dependências do projeto
```

---

## 🎯 Componentes Principais

### **Navbar**
Navegação principal com links para seções e seletor de idioma.

### **About**
Apresentação profissional com resumo sobre você.

### **Skills**
Grade de habilidades técnicas e competências.

### **Projects**
Portfólio de projetos com descrições e links.

### **Contact**
Formulário de contato integrado com Nodemailer para receber mensagens.

### **LanguageSwitcher**
Alternância entre idiomas com Context API.

---

## 🎨 Customização

### Alterar Cores
Edite o arquivo `tailwind.config.ts` para personalizar o esquema de cores:

```typescript
theme: {
  colors: {
    primary: '#seu-cor',
    secondary: '#sua-cor',
    // ...
  }
}
```

### Adicionar Idiomas
1. Crie arquivos de tradução em `messages/`
2. Atualize o `LanguageContext.tsx`
3. Customize as traduções em `utils/translations.ts`

### Modificar Conteúdo
Os textos estão centralizados em `utils/translations.ts`. Edite lá para atualizar todo o conteúdo do site.

---

## 📧 Configurar Email

O formulário de contato usa **Nodemailer** para enviar emails. Configure:

1. Crie credenciais SMTP (Gmail, SendGrid, Mailtrap, etc.)
2. Adicione as variáveis em `.env.local`
3. Customize a API em `app/api/send-email/` conforme necessário

---

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do seu código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe seu repositório
4. Defina as variáveis de ambiente em "Settings > Environment Variables"
5. Faça deploy com um clique

### Outras Plataformas

- **Netlify** - Exporte como site estático
- **Docker** - Crie um container com a imagem Node.js

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

---

## 📚 Recursos Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

---

<p align="center">
  <strong>Desenvolvido por Ramon</strong>
</p>

