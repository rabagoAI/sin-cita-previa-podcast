'use client'
import { motion } from 'framer-motion'
import { SiInstagram, SiX, SiLinkedin, SiSpotify, SiApplepodcasts, SiYoutube } from 'react-icons/si'
import { Mail, MapPin, Phone, Podcast } from 'lucide-react'

export default function Footer({ podcast }) {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#0a0510] border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 blur-3xl rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">
                            {podcast.title}
                        </h2>
                        <p className="text-gray-400 font-light leading-relaxed">
                            {podcast.description}
                        </p>
                        <div className="flex gap-4">
                            <a href={podcast.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
                                <SiInstagram className="w-5 h-5" />
                            </a>
                            <a href={podcast.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
                                <SiX className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
                                <SiLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
                        <ul className="space-y-4">
                            {['Episodios', 'Sobre el Podcast', 'Contacto', 'Patrocinadores'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 font-light flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-orange-500/50" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400 font-light">
                                <Mail className="w-5 h-5 text-orange-500" />
                                <span>hola@sincitaprevia.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 font-light">
                                <MapPin className="w-5 h-5 text-orange-500" />
                                <span>Madrid, España</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 font-light">
                                <Phone className="w-5 h-5 text-orange-500" />
                                <span>+34 000 000 000</span>
                            </li>
                        </ul>
                    </div>

                    {/* Platforms */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Escúchanos en</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { name: 'Spotify', icon: <SiSpotify />, color: 'hover:text-[#1DB954]' },
                                { name: 'Apple', icon: <SiApplepodcasts />, color: 'hover:text-[#A259FF]' },
                                { name: 'YouTube', icon: <SiYoutube />, color: 'hover:text-[#FF0000]' },
                                { name: 'iVoox', icon: <Podcast />, color: 'hover:text-orange-400' },
                            ].map((platform) => (
                                <a
                                    key={platform.name}
                                    href="#"
                                    className={`flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-gray-400 ${platform.color} transition-all duration-300 hover:bg-white/10`}
                                >
                                    {platform.icon}
                                    <span className="text-sm font-medium">{platform.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm font-light">
                        © {currentYear} {podcast.title}. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-500 hover:text-white text-sm font-light transition-colors duration-300">Privacidad</a>
                        <a href="#" className="text-gray-500 hover:text-white text-sm font-light transition-colors duration-300">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
