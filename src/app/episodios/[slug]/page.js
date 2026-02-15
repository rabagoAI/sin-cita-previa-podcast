import Hero from '@/components/Hero'
import podcastsConfig from '../../../../config/podcasts.json'
import { getRssFeed } from '@/lib/getRssFeed'
import { ArrowLeft, Play, Clock, Calendar, Share2, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function EpisodePage({ params }) {
    const podcast = podcastsConfig['sin-cita-previa-salud-en-la-mujer']
    const episodes = await getRssFeed(podcast.rssFeed)

    // En un ejemplo real, buscaríamos por slug. Aquí simulamos.
    const episode = episodes.find(e => e.id === params.slug) || {
        title: 'El Arte de la Inteligencia Artificial',
        description: 'Exploramos cómo la IA está transformando la creatividad y el arte. Conversamos con artistas digitales sobre el futuro de la creación humana en la era de los algoritmos.',
        date: '10 Feb 2024',
        duration: '45:23',
        image: 'https://images.unsplash.com/photo-1675557009875-436f595b1842?q=80&w=1000&auto=format&fit=crop',
        longDescription: 'Este episodio profundiza en el impacto de los modelos generativos en las artes visuales y la música. Invitamos a expertos de la industria para discutir si la IA es una herramienta o un competidor para los artistas tradicionales. Analizamos casos de estudio, desde obras generadas por redes neuronales hasta composiciones orquestales asistidas por computadora.'
    }

    return (
        <div className="min-h-screen bg-[#0a0510] pt-32 pb-24">
            <div className="container mx-auto px-4">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="relative aspect-square w-full max-w-xl mx-auto lg:mx-0">
                        <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />
                        <img
                            src={episode.image}
                            alt={episode.title}
                            className="relative w-full h-full object-cover rounded-[3rem] shadow-2xl border border-white/10"
                        />
                    </div>

                    <div className="space-y-8">
                        <div className="flex flex-wrap gap-4 text-sm font-medium">
                            <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-orange-400">
                                <Clock className="w-4 h-4" />
                                {episode.duration}
                            </span>
                            <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-purple-400">
                                <Calendar className="w-4 h-4" />
                                {episode.date}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            {episode.title}
                        </h1>

                        <p className="text-xl text-gray-300 font-light leading-relaxed">
                            {episode.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-7 text-lg font-bold flex gap-3 shadow-lg shadow-orange-500/20">
                                <Play className="w-6 h-6 fill-current" />
                                Escuchar ahora
                            </Button>
                            <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full px-6 py-7">
                                <Heart className="w-6 h-6 mr-2" />
                                Favoritos
                            </Button>
                            <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full w-14 h-14 p-0">
                                <Share2 className="w-6 h-6" />
                            </Button>
                        </div>

                        <div className="pt-12 border-t border-white/5">
                            <h2 className="text-2xl font-bold text-white mb-6">Sobre este episodio</h2>
                            <div className="text-gray-400 font-light leading-relaxed space-y-4">
                                <p>{episode.longDescription || episode.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
