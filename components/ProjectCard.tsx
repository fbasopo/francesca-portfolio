import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

type Props = {
    title: string,
    desc: string,
    tags?: string[],
    repo?: string | null,
    demo?: string | null
}

export default function ProjectCard({ title, desc, tags = [], repo, demo }: Props) {
    return (
        <article className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-start justify-between">
                <h4 className="text-lg font-semibold">{title}</h4>
                <div className="flex items-center gap-2">
                    {repo && <a href={repo} target="_blank" rel="noreferrer" aria-label="repo"><ArrowTopRightOnSquareIcon className="w-5 h-5" /></a>}
                    {demo && <a href={demo} target="_blank" rel="noreferrer" className="text-sm">Demo</a>}
                </div>
            </div>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700">{t}</span>)}
            </div>
        </article>
    )
}