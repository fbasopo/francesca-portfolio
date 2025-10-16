"use client";

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="pt-6">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <p className="text-sm">Full Stack Engineer • C# / .NET • React • SQL</p>
                <h2 className="text-4xl font-bold mt-2">Hi, I’m Francesca 👋</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
                    I build maintainable and testable backend systems and polished frontend experiences. I like clean architecture, async patterns, and readable code.
                </p>
            </motion.div>
        </section>
    )
}