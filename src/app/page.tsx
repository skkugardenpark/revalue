import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Service from '@/components/Service'
import SocialValue from '@/components/SocialValue'
import Partnership from '@/components/Partnership'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div id="hero">
          <Hero />
        </div>
        <div id="problem">
          <Problem />
        </div>
        <div id="service">
          <Service />
        </div>
        <div id="social-value">
          <SocialValue />
        </div>
        <div id="partnership">
          <Partnership />
        </div>
        <Footer />
      </main>
    </>
  )
}
