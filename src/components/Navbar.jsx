'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Play } from 'lucide-react'

export default function Navbar({ podcast }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Episodios', href: '#episodios' },
        { name: 'Sobre el Podcast', href: '#info' },
        { name: 'Contacto', href: '#contacto' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-[#0a0510]/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                            <Play className="w-5 h-5 fill-current" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">
                            {podcast.title}
                        </span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 font-semibold shadow-lg shadow-orange-500/10">
                                Suscribirse
                            </Button>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0a0510] border-b border-white/5 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-semibold text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-6 text-lg font-bold">
                                Suscribirse
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
