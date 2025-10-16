// A tiny component to display a code snippet with a "View on GitHub" link
export default function CodeEmbed({ title, snippet, repo }: { title: string, snippet: string, repo?: string }) {
    return (
        <div className="mt-4">
            <div className="flex items-center justify-between">
                <strong>{title}</strong>
                {repo && <a href={repo} target="_blank" rel="noreferrer" className="text-sm">View on GitHub</a>}
            </div>
            <pre className="code-pre mt-2"><code>{snippet}</code></pre>
        </div>
    )
}