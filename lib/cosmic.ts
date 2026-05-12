import { createBucketClient } from '@cosmicjs/sdk'
import { Arquibancada, hasStatus } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getArquibancadas(): Promise<Arquibancada[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'arquibancadas' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Arquibancada[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch arquibancadas');
  }
}

export async function getArquibancada(slug: string): Promise<Arquibancada | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'arquibancadas', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.object as Arquibancada;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch arquibancada');
  }
}

export function formatPrice(price: number | undefined): string {
  if (!price) return 'Sob consulta';
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
}