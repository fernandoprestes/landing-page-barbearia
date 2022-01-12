import { About } from './About'
import Contact from './Contact'
import { Hero } from './Hero'
import { Products } from './Products'

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
