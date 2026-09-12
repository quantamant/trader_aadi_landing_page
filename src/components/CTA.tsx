import TelegramIcon from "./TelegramIcon";

export const TELEGRAM_URL = 'https://t.me/+21n8Nahi8ENjZTk1'

export default function CTA() {
  return (
    <a className="main-cta" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
      <TelegramIcon />
      <span>Join Community Now</span>
    </a>
  )
}