export default function FeaturesSection() {
  const features = [
    { icon: '🛡️', title: 'Segurança Garantida', desc: 'Estrutura reforçada e testada' },
    { icon: '📐', title: '3 Metros de Comprimento', desc: 'Espaço ideal para múltiplos usuários' },
    { icon: '🎨', title: 'Cor Azul Vibrante', desc: 'Visual moderno e atrativo' },
    { icon: '🚚', title: 'Entrega Rápida', desc: 'Logística eficiente em todo Brasil' },
  ]

  return (
    <section id="produtos" className="bg-white py-16 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 rounded-xl hover:bg-brand-50 transition-colors">
              <div className="text-5xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}