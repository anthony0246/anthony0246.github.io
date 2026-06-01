import { useState, useEffect, useRef } from 'react'

export function useTypewriter(phrases, typingSpeed = 80, deletingSpeed = 40, pauseTime = 1800) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const phraseIndex = useRef(0)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex.current]

    const tick = () => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
          return
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length
        }
      }
    }

    const timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phrases, typingSpeed, deletingSpeed, pauseTime])

  return { displayText, isDeleting }
}
