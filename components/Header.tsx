"use client";


import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function Header() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    return (
        <header className="flex items-center justify-between py-4">
            <h1 className="text-xl font-semibold">Francisca Basopo</h1>
            <nav className="flex items-center gap-4">
                <Link href="#projects" className="text-sm">Projects</Link>
                <Link href="#contact" className="text-sm">Contact</Link>

                <a href="https://www.linkedin.com/in/francesca-basopo-90b107183/" target="_blank" rel="noreferrer" className="text-sm">LinkedIn</a>
                <button
                    aria-label="Toggle theme"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-md border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800">
                    {mounted && (theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />)}
                </button>
            </nav>
        </header>
    )
}