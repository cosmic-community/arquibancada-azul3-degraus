// app/arquibancadas/[slug]/page.tsx
import { getArquibancada } from '@/lib/cosmic'
import { getMetafieldValue, formatPrice } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Gallery from '@/components/Gallery'
import SpecCard from '@/components/SpecCard'
import Link from 'next/link'

export default async function ArquibancadaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const arquibancada = await getArquibancada(slug)

  if (!arquibancada) {
    notFound()
  }

  const meta = arquibancada.metadata
  const nome = getMetafieldValue(meta?.nome) || arquibancada.title
  const descricao = getMetafieldValue(meta?.descricao)
  const cor = getMetafieldValue(meta?.cor)
  const material = getMetafieldValue(meta?.material)
  const disponivel = meta?.disponivel === true || meta?.disponivel === 'true'

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/" 
        className="inline-flex items-center text-brand-600 hover:text-brand-700 mb-6 font-medium"
      >
        ← Voltar
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          {meta?.imagem_principal?.imgix_url ? (
            <img
              src={`${meta.imagem_principal.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
              alt={nome}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          ) : (
            <div className="w-full h-96 bg-gradient-to-br from-brand-400 to-brand-700 rounded-xl flex items-center justify-center">
              <span className="text-white text-6xl">🪑</span>
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            {disponivel ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                ✓ Disponível
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-800">
                Indisponível
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {nome}
          </h1>

          {descricao && (
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {descricao}
            </p>
          )}

          <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 mb-6">
            <p className="text-sm text-brand-700 font-medium mb-1">Preço</p>
            <p className="text-4xl font-bold text-brand-900">
              {formatPrice(meta?.preco)}
            </p>
          </div>

          <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors text-lg">
            Solicitar Orçamento
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <SpecCard 
          label="Degraus" 
          value={meta?.numero_degraus ? `${meta.numero_degraus}` : 'N/A'} 
          icon="📏"
        />
        <SpecCard 
          label="Comprimento" 
          value={meta?.comprimento ? `${meta.comprimento}m` : 'N/A'} 
          icon="📐"
        />
        <SpecCard 
          label="Capacidade" 
          value={meta?.capacidade ? `${meta.capacidade} pessoas` : 'N/A'} 
          icon="👥"
        />
        <SpecCard 
          label="Material" 
          value={material || 'N/A'} 
          icon="🔧"
        />
      </div>

      {cor && (
        <div className="bg-white rounded-xl p-6 mb-12 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Detalhes Adicionais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Cor</p>
              <p className="text-lg font-medium text-gray-900">{cor}</p>
            </div>
          </div>
        </div>
      )}

      {meta?.galeria && Array.isArray(meta.galeria) && meta.galeria.length > 0 && (
        <Gallery images={meta.galeria} title={nome} />
      )}
    </div>
  )
}