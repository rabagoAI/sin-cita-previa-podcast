'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle2, Users } from 'lucide-react'

export default function Newsletter() {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            setIsSubmitted(true)
            setEmail('')
        }
    }

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto relative"
                >
                    {/* Decorative elements */}
                    <div className="absolute -top-12 -left-12 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full" />
                    <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full" />

                    <div className="relative bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl text-center">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/20 text-orange-500 mb-8"
                        >
                            <Mail className="w-8 h-8" />
                        </motion.div>

                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            Nunca te pierdas un <span className="bg-gradient-to-r from-orange-400 to-yellow-200 bg-clip-text text-transparent">episodio</span>
                        </motion.h2>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                        >
                            Suscríbete a nuestro newsletter y recibe notificaciones de nuevos episodios, contenido exclusivo y acceso anticipado a entrevistas especiales.
                        </motion.p>

                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    onSubmit={handleSubmit}
                                    className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto mb-8"
                                >
                                    <Input
                                        type="email"
                                        placeholder="tu@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-14 rounded-2xl focus:ring-orange-500/50"
                                    />
                                    <Button
                                        type="submit"
                                        className="h-14 px-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/20 transition-all duration-300 transform hover:scale-105"
                                    >
                                        Suscribirme
                                    </Button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 max-w-lg mx-auto mb-8 flex items-center justify-center gap-3 text-green-400"
                                >
                                    <CheckCircle2 className="w-6 h-6" />
                                    <span className="font-medium">¡Gracias por suscribirte! Revisa tu correo.</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center justify-center gap-3 text-sm text-gray-500"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0a0510] bg-gradient-to-br ${i % 2 === 0 ? 'from-orange-400 to-orange-600' : 'from-purple-400 to-purple-600'}`} />
                                ))}
                            </div>
                            <span className="flex items-center gap-1.5">
                                <Users className="w-4 h-4" />
                                Únete a más de 10,000 suscriptores
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
