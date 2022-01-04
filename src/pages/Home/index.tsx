import { Hero } from './Hero'
import { About } from './About/intex'
import { Products } from './Products'
import Contact from './Contact'

export const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Contact />
    </main>
  )
}
