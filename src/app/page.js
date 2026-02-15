import Hero from '@/components/Hero'
import EpisodeCard from '@/components/EpisodeCard'
import Newsletter from '@/components/Newsletter'
import { getRssFeed } from '@/lib/getRssFeed'
import podcastsConfig from '../../config/podcasts.json'

export default async function Home() {
  const podcast = podcastsConfig['sin-cita-previa-salud-en-la-mujer']

  // En un entorno real, usaríamos la URL de podcast.rssFeed
  // Para este ejemplo, usaremos datos locales si el feed falla
  let episodes = await getRssFeed(podcast.rssFeed)

  if (episodes.length === 0) {
    episodes = [
      {
        id: '1',
        title: 'El Arte de la Inteligencia Artificial',
        description: 'Exploramos cómo la IA está transformando la creatividad y el arte. Conversamos con artistas digitales sobre el futuro de la creación humana en la era de los algoritmos.',
        date: '10 Feb 2024',
        duration: '45:23',
        image: 'https://images.unsplash.com/photo-1675557009875-436f595b1842?q=80&w=1000&auto=format&fit=crop',
        slug: 'el-arte-de-la-ia'
      },
      {
        id: '2',
        title: 'Ciudades Sostenibles del Mañana',
        description: '¿Cómo serán las ciudades en 2050? Arquitectos y urbanistas nos cuentan sobre diseño urbano sostenible, energía renovable y movilidad inteligente.',
        date: '3 Feb 2024',
        duration: '52:18',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop',
        slug: 'ciudades-sostenibles'
      },
      {
        id: '3',
        title: 'Blockchain: Más Allá de las Criptomonedas',
        description: 'La tecnología blockchain está revolucionando industrias completas. Descubre aplicaciones innovadoras en salud, logística y gobernanza digital.',
        date: '27 Ene 2024',
        duration: '48:55',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop',
        slug: 'blockchain-mas-alla'
      }
    ]
  }

  return (
    <div className="flex flex-col">
      <Hero podcast={podcast} />

      <section id="episodios" className="py-24 bg-[#0a0510]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm text-gray-400 mb-6 backdrop-blur-md">
              Últimos episodios
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Conversaciones que <span className="bg-gradient-to-r from-orange-400 to-yellow-200 bg-clip-text text-transparent">inspiran</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Explora nuestros episodios más recientes y sumérgete en conversaciones profundas sobre tecnología, cultura e innovación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode, index) => (
              <EpisodeCard key={episode.id} episode={episode} index={index} />
            ))}
          </div>
        </div>
      </section>

      <div id="info">
        <Newsletter />
      </div>
    </div>
  )
}
