import Nav from '@/components/nav'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Stack from '@/components/stack'
import Experience from '@/components/experience'
import Audits from '@/components/audits'
import BlogPreview from '@/components/blog-preview'
import BookAudit from '@/components/book-audit'
import Connect from '@/components/connect'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="px-8">
        <About />
        <Stack />
        <Experience />
        <Audits />
        <Projects />
        <BlogPreview />
        <BookAudit />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
