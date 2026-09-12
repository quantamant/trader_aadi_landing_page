import { TELEGRAM_URL } from "./components/CTA"
import { profileImage } from "./components/HeroProfileImage"
import Hero from "./sections/Hero"






function App() {
  return (
    <main className="page">
      <header className="navbar">
        <a className="brand" href={TELEGRAM_URL} aria-label="Trader Aadi Telegram channel">
          <img src={profileImage} alt="Trader Aadi" />
        </a>

        <a className="top-cta" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
          Join Telegram
        </a>
      </header>
      <Hero/>
    </main>
  )
}

export default App
