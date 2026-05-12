# Arquibancada Azul 3 Degraus

![App Preview](https://imgix.cosmicjs.com/c9063a50-4e1e-11f1-9690-df5854985cf2-autopilot-photo-1540479859555-17af45c78602-1778602955370.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

Site moderno para apresentação e venda de arquibancadas azuis com 3 degraus e 3 metros de comprimento, com gerenciamento de conteúdo via Cosmic CMS.

## Features
- 🏟️ Catálogo completo de arquibancadas
- 📱 Design totalmente responsivo
- 🖼️ Galeria de imagens otimizada com imgix
- 💰 Exibição de preços e disponibilidade
- 📋 Especificações técnicas detalhadas
- 🎨 Design moderno com Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a0353a3b4bc78a77bbd8623&clone_repository=6a03543db4bc78a77bbd863c)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: arquibancada azul3 degraus com 3 metros de comprimento"

### Code Generation Prompt

> Build a Next.js application for a website called "Arquibancada azul3 degraus". The content is managed in Cosmic CMS with the following object types: arquibancadas. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: arquibancada azul3 degraus com 3 metros de comprimento

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- A Cosmic CMS account and bucket

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all arquibancadas
const { objects } = await cosmic.objects
  .find({ type: 'arquibancadas' })
  .depth(1)

// Fetch single arquibancada
const { object } = await cosmic.objects
  .findOne({ type: 'arquibancadas', slug: 'my-slug' })
  .depth(1)
```

## Cosmic CMS Integration
This app uses the `arquibancadas` object type with metafields: nome, descricao, cor, numero_degraus, comprimento, capacidade, material, preco, disponivel, imagem_principal, galeria.

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options
- **Vercel** (recommended for Next.js)
- **Netlify**
- Set environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`
<!-- README_END -->