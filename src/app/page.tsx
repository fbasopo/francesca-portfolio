import Head from 'next/head'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Projects from '../../components/Projects'
import About from '../../components/About'
import Contact from '../../components/Contact'

const Home = () => {
  return (
    <>
      <Head>
        <title>Francesca Basopo — Full Stack Engineer</title>
        <meta name="description" content="Francesca Basopo — Full Stack Engineer. Portfolio and code showcase." />
      </Head>

      <div className="min-h-screen max-w-4xl mx-auto px-6 py-10">
        <Header />
        <main className="space-y-16">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default Home