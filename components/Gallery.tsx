import { CosmicImage } from '@/types'

export default function Gallery({ images, title }: { images: CosmicImage[]; title: string }) {
  if (!images || images.length === 0) return null

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Galeria de Imagens</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, idx) => {
          if (!image || !image.imgix_url) return null
          return (
            <a
              key={idx}
              href={`${image.imgix_url}?w=1600&auto=format,compress`}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
            >
              <img
                src={`${image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                alt={`${title} - imagem ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}