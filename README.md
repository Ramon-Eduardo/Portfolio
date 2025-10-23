# Portfolio

Repositório do portfólio pessoal, implementado com Next.js (App Router) e internacionalização via next-intl. Projeto componentizado, estilos em Sass (SCSS) e suporte a múltiplos idiomas (pt / en).

## Principais implementações

- Next.js (App Router) com rotas por idioma em `src/app/[locale]`.  
- Internacionalização com `next-intl` usando `messages/en.json` e `messages/pt.json`.  
- Componentes reutilizáveis (ex.: `Container`, `Header`, `LanguageSwitcher`).  
- Estilos em Sass/SCSS (`app.scss`, módulos por componente).  
- Preservação de rota ao trocar idioma (LanguageSwitcher usa `usePathname`).  
- Middleware para redirecionamento/controle de locale (`src/middleware.ts`).  
- Assets públicos mínimos mantidos em `public/` (ex.: `public/curriculo`).

## Rodando localmente

1. Instale dependências:
```bash
npm install
```

2. Rode em modo de desenvolvimento:
```bash
npm run dev
```

3. Build e produção:
```bash
npm run build
npm run start
```

Acesse o projeto em http://localhost:3000 (ou a rota de locale, ex: `/pt`).

## Internacionalização

- Arquivos de mensagens: `messages/en.json` e `messages/pt.json`.  
- Provider por locale implementado em `src/app/[locale]/layout.tsx` (NextIntlProvider).  
- Em componentes cliente use `useTranslations('namespace')`; em server components/pages use `getTranslator(params.locale)` ou `getTranslator(params.locale, 'namespace')`.  
- Atualize apenas as chaves realmente usadas no código.

## Estrutura resumida

```
.
├── messages/
│   ├── en.json
│   └── pt.json
├── public/
│   └── curriculo/
├── src/
│   ├── app/
│   │   └── [locale]/...
│   ├── components/
│   │   ├── header/
│   │   ├── Container/
│   │   └── switcher/
│   ├── middleware.ts
│   └── app.scss
├── package.json
└── next.config.ts
```

## Observações rápidas

- Se remover/alterar imagens ou SVGs do `public/`, atualize referências nos componentes.  
- Mantenha `messages/*.json` sincronizados com as chaves usadas no código para evitar chaves ausentes.  
- Para incluir bandeiras SVG como componentes, coloque-os em `src/components/svg/`.

---
