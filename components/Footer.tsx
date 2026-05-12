export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🪑</span>
              <h3 className="text-xl font-bold">Arquibancada Azul</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Arquibancadas de qualidade com 3 degraus e 3 metros de comprimento para todos os eventos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 (11) 99999-9999</li>
              <li>✉️ contato@arquibancadaazul.com.br</li>
              <li>📍 São Paulo, SP</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horário</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 9h às 13h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Arquibancada Azul. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}