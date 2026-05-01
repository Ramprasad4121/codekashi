import Nav from '@/components/nav'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Audits from '@/components/audits'
import BlogPreview from '@/components/blog-preview'
import Connect from '@/components/connect'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="px-8">
        <About />
        <Projects />
        <Audits />
        <BlogPreview />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
