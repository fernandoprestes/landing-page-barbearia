import { Hero } from './Hero'
import { About } from './About'
import { Products } from './Products'
import Contact from './Contact'
import { Footer } from '../../components/Footer'

export const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </main>
  )
}
