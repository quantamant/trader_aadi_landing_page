import TelegramIcon from './TelegramIcon'

interface CTAProps {
  children: string
  className?: string
}

const TELEGRAM_URL = 'https://t.me/+21n8Nahi8ENjZTk1'

function CTA({ children, className = '' }: CTAProps) {
  return (
    <a
      className={`main-cta ${className}`.trim()}
      href={TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
    >
      <TelegramIcon />
      <span>{children}</span>
    </a>
  )
}

export default CTA
