'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Play, Clock, Calendar } from 'lucide-react'

export default function EpisodeCard({ episode, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <Card className="group bg-white/5 border-white/10 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors duration-300">
                <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                        <motion.img
                            src={episode.image}
                            alt={episode.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0510] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                            <div className="flex gap-4 text-xs text-gray-300 font-medium">
                                <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                                    <Clock className="w-3.5 h-3.5 text-orange-400" />
                                    {episode.duration}
                                </span>
                                <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                                    {episode.date}
                                </span>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                            >
                                <Play className="w-5 h-5 fill-current" />
                            </motion.div>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                            {episode.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-3 mb-6 font-light leading-relaxed">
                            {episode.description}
                        </p>

                        <button
                            className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors duration-300"
                        >
                            Escuchar episodio
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
