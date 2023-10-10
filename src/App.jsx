import { BrowserRouter } from "react-router-dom"
import {About, Hero, Navbar, Works, Education} from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-background">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Works />
      </div>
    </BrowserRouter>
  )
}

export default App
