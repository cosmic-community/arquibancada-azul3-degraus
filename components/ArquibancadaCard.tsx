import Link from 'next/link'
import { Arquibancada } from '@/types'
import { getMetafieldValue, formatPrice } from '@/lib/cosmic'

export default function ArquibancadaCard({ arquibancada }: { arquibancada: Arquibancada }) {
  const meta = arquibancada.metadata
  const nome = getMetafieldValue(meta?.nome) || arquibancada.title
  const descricao = getMetafieldValue(meta?.descricao)
  const disponivel = meta?.disponivel === true || meta?.disponivel === 'true'

  return (
    <Link 
      href={`/arquibancadas/${arquibancada.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-400 to-brand-700">
        {meta?.imagem_principal?.imgix_url ? (
          <img
            src={`${meta.imagem_principal.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={nome}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white text-7xl">🪑</span>
          </div>
        )}

        <div className="absolute top-4 right-4">
          {disponivel ? (
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              ✓ Disponível
            </span>
          ) : (
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              Indisponível
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
          {nome}
        </h3>

        {descricao && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {descricao}
          </p>
        )}

        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
          {meta?.numero_degraus && (
            <span>📏 {meta.numero_degraus} degraus</span>
          )}
          {meta?.comprimento && (
            <span>📐 {meta.comprimento}m</span>
          )}
          {meta?.capacidade && (
            <span>👥 {meta.capacidade}</span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500">A partir de</p>
            <p className="text-2xl font-bold text-brand-600">
              {formatPrice(meta?.preco)}
            </p>
          </div>
          <span className="text-brand-600 group-hover:translate-x-1 transition-transform font-semibold">
            Ver detalhes →
          </span>
        </div>
      </div>
    </Link>
  )
}