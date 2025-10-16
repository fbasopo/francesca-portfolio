import ProjectCard from './ProjectCard'
import CodeEmbed from './CodeEmbed'

const projects = [
    {
        title: 'Web Crawler (demo)',
        desc: 'A simplified C# concurrent crawler showcasing async patterns, link parsing and error handling. (Recreated from scratch — safe to share).',
        tags: ['C#', '.NET', 'Async','Tests'],
        repo: 'https://github.com/fbasopo/web-crawler-demo'
    },
    {
        title: 'Portfolio (This site)',
        desc: 'Next.js + Tailwind + Framer Motion — the code powering this portfolio.',
        tags: ['React', 'Next.js', 'Tailwind'],
        repo: 'https://github.com/fbasopo/francesca-portfolio'
    },
    {
        title: 'Mini Expenses Tracker',
        desc: 'Small full-stack demo: API (C#) + React frontend showing integration and testing patterns.',
        tags: ['Full Stack', 'C#', 'React'],
        repo: 'https://github.com/fbasopo/mini-expenses-tracker'
    },
    {
        title: 'MFA Redirect Frontend',
        desc: 'A React frontend for handling multi-factor authentication redirects, built with TypeScript and Tailwind CSS.',
        tags: ['React', 'TypeScript', 'Tailwind'],
        repo: 'https://github.com/fbasopo/mfa-redirect-frontend'
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
        private async Task CrawlInternal(string url, int depth, List<string> results)
        {
            if (depth < 0) return;
            if (!_visited.TryAdd(url, true)) return;

            try
            {
                var html = await _http.GetStringAsync(url);
                var doc = new HtmlDocument();
                doc.LoadHtml(html);`}
                    repo="https://github.com/fbasopo/web-crawler-demo"
                />
         </div>
        </section>
    )
}