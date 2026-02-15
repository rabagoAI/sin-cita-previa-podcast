'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SiSpotify, SiApplepodcasts, SiYoutube } from 'react-icons/si'
import { Podcast } from 'lucide-react'

const PlatformButton = ({ platform, url }) => {
    const icons = {
        spotify: <SiSpotify className="w-5 h-5" />,
        apple: <SiApplepodcasts className="w-5 h-5" />,
        youtube: <SiYoutube className="w-5 h-5" />,
        ivoox: <Podcast className="w-5 h-5" />
    }

    const labels = {
        spotify: 'Spotify',
        apple: 'Apple Podcasts',
        youtube: 'YouTube',
        ivoox: 'iVoox'
    }

    return (
        <Button
            variant="outline"
            asChild
            className="bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full px-6 py-6 transition-all duration-300"
        >
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                {icons[platform]}
                <span>{labels[platform]}</span>
            </a>
        </Button>
    )
}

export default function Hero({ podcast }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[#0a0510]" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/20" />

            <div className="container relative z-10 mx-auto px-4 text-center mt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block mb-12"
                >
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm text-gray-300 mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        Nuevo episodio cada semana
                    </div>

                    <motion.div
                        className="relative mx-auto w-64 h-64 md:w-80 md:h-80 mb-12"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="absolute inset-0 bg-orange-500/30 blur-3xl rounded-full" />
                        <motion.img
                            src={podcast.coverImage}
                            alt={podcast.title}
                            className="relative w-full h-full object-cover rounded-[2.5rem] shadow-2xl border border-white/10"
                            initial={{ scale: 0.8, rotate: -5 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.2, type: "spring" }}
                        />
                    </motion.div>
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <span className="bg-gradient-to-r from-orange-400 to-yellow-200 bg-clip-text text-transparent">
                        {podcast.title.split(' ')[0]}
                    </span>{' '}
                    <span className="text-white">
                        {podcast.title.split(' ').slice(1).join(' ')}
                    </span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {podcast.description}
                </motion.p>

                <motion.div
                    className="text-sm text-gray-500 mb-12 font-medium tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    Con <span className="text-gray-300">{podcast.author}</span>
                </motion.div>

                <motion.div
                    className="flex flex-wrap gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <span className="text-gray-500 mr-2">Escucha en:</span>
                    <PlatformButton platform="spotify" url={podcast.platforms.spotify} />
                    <PlatformButton platform="ivoox" url={podcast.platforms.ivoox} />
                </motion.div>
            </div>
        </section>
    )
}
