import ProjectCard from './ProjectCard'
import CodeEmbed from './CodeEmbed'

const projects = [
    {
        title: 'Web Crawler (demo)',
        desc: 'A simplified C# concurrent crawler showcasing async patterns, link parsing and error handling. (Recreated from scratch — safe to share).',
        tags: ['C#', '.NET', 'Async'],
        repo: 'https://github.com/your-username/web-crawler-demo'
    },
    {
        title: 'Portfolio (This site)',
        desc: 'Next.js + Tailwind + Framer Motion — the code powering this portfolio.',
        tags: ['React', 'Next.js', 'Tailwind'],
        repo: 'https://github.com/your-username/portfolio'
    },
    {
        title: 'Mini API App',
        desc: 'Small full-stack demo: API (C#) + React frontend showing integration and testing patterns.',
        tags: ['Full Stack', 'Tests'],
        repo: 'https://github.com/your-username/mini-api-app'
    }
]

export default function Projects() {
    return (
        <section id="projects" className="space-y-6">
            <h3 className="text-2xl font-semibold">Projects & Code Showcase</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(p => (
                    <ProjectCard key={p.title} title={p.title} desc={p.desc} tags={p.tags} repo={p.repo} />
                ))}
            </div>

            <div className="mt-8">
                <h4 className="text-lg font-semibold">Code Samples</h4>
                <CodeEmbed
                    title="Example: Simplified LINQ async query (C#)"
                    snippet={`// Simplified example — safe to share
        public async Task<List<string>> FetchUrlsAsync(string startUrl)
        {
            var client = new HttpClient();
            var html = await client.GetStringAsync(startUrl);
            // parse links (simplified)
            var links = HtmlParser.ParseLinks(html);
            return links;
        }`}
                    repo="https://github.com/your-username/web-crawler-demo"
                />

                <pre className="code-pre mt-4"><code>{`// Simplified example — safe to share
        public async Task<List<string>> FetchUrlsAsync(string startUrl)
        {
        var client = new HttpClient();
            var html = await client.GetStringAsync(startUrl);
            // parse links (simplified)
            var links = HtmlParser.ParseLinks(html);
            return links;
        }`}
</code></pre>
            </div>
        </section>
    )
}