export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Arquibancada extends CosmicObject {
  type: 'arquibancadas';
  metadata: {
    nome?: string;
    descricao?: string;
    cor?: string;
    numero_degraus?: number;
    comprimento?: number;
    capacidade?: number;
    material?: string;
    preco?: number;
    disponivel?: boolean;
    imagem_principal?: CosmicImage;
    galeria?: CosmicImage[];
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}