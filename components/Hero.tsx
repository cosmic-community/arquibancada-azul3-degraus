import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-3xl">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            🏟️ Qualidade e Segurança
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Arquibancada Azul
            <span className="block text-brand-200 mt-2">3 Degraus</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-100 mb-8 leading-relaxed">
            Arquibancadas com <strong>3 metros de comprimento</strong>, perfeitas para eventos esportivos, escolares e corporativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#produtos"
              className="inline-block bg-white text-brand-700 font-bold py-4 px-8 rounded-xl hover:bg-brand-50 transition-colors text-center"
            >
              Ver Produtos
            </Link>
            <a
              href="#contato"
              className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/20 transition-colors text-center"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}