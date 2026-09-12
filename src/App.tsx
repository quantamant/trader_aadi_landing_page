import './style.css'

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import SkillSection from './sections/SkillSection'
import VIPSection from './sections/VIPSection'
import JourneySection from './sections/JourneySection'
import FinalCTA from './sections/FinalCTA'

function App() {
  return (
    <main className="page">
      <Navbar />
      <Hero />

      <div className="content">
        <SkillSection />
        <VIPSection />
        <JourneySection />
        <FinalCTA />

        <p className="disclaimer">
          Educational content only. Trading involves substantial risk and
          losses can occur. No profit or return is guaranteed.
        </p>
      </div>
    </main>
  )
}

export default App
