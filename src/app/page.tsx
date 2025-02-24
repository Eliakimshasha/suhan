import { Suspense } from 'react'
import Navigation from '@/components/shared/Navigation'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import Header from '@/components/shared/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Technologies from '@/components/sections/Technologies'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section id="home">
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
        </section>

        <section id="about">
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        </section>

        <section id="services">
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
        </section>

        <section id="projects">
          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>
        </section>

        <section id="technologies">
          <Suspense fallback={<LoadingSpinner />}>
            <Technologies />
          </Suspense>
        </section>

        <section id="contact">
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  )
}