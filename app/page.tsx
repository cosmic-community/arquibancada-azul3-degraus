import { getArquibancadas } from '@/lib/cosmic'
import ArquibancadaCard from '@/components/ArquibancadaCard'
import Hero from '@/components/Hero'
import FeaturesSection from '@/components/FeaturesSection'

export default async function HomePage() {
  const arquibancadas = await getArquibancadas()

  return (
    <div>
      <Hero />
      <FeaturesSection />
      
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossas Arquibancadas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira nosso catálogo completo de arquibancadas azuis com 3 degraus e 3 metros de comprimento
          </p>
        </div>

        {arquibancadas.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500 text-lg">Nenhuma arquibancada cadastrada no momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {arquibancadas.map((arquibancada) => (
              <ArquibancadaCard key={arquibancada.id} arquibancada={arquibancada} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}