import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🪑</span>
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-tight">Arquibancada Azul</h1>
              <p className="text-xs text-gray-500 leading-tight">3 Degraus • 3 Metros</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Início
            </Link>
            <Link href="/#produtos" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Produtos
            </Link>
            <a 
              href="#contato" 
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}