
import Main from '@/components/main';
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl';


const data = {
  title: 'Next.js Boilerplate',
  description: 'Next.js, TypeScript, Tailwind, Storybook, Vitest, Cypress and Testing-Library',
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
}

export default function Home() {
  return <Main/>
}
