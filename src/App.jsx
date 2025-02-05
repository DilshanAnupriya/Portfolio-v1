
import { BrowserRouter } from "react-router-dom"

import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
const App = () => {
  
  return (
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-current">
            <Navbar/>
            <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <div className="bg-custom-gradient min-h-screen">
          <Works/>
          </div>
          <div className="relative z-0 bg-black">
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
    </BrowserRouter>
       
    
  )
}

export default App
