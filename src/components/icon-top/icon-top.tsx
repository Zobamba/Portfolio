'use client'
import Link from 'next/link'

const IconTop = () => {
  const slowScrollToTop = () => {
    const scrollDuration = 1000
    const start = window.scrollY
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime()

    const scrollStep = (timestamp: number) => {
      const currentTime = timestamp - startTime
      const progress = Math.min(currentTime / scrollDuration, 1)
      window.scrollTo(0, start - start * progress)
      if (progress < 1) {
        requestAnimationFrame(scrollStep)
      }
    }

    requestAnimationFrame(scrollStep)
  }

  return (
    <div>
      <Link
        href="#"
        aria-label="Go to top"
        role="button"
        className="fixed bottom-10 right-2 w-10 h-10 shadow-md overflow-hidden opacity-50 bg-black bg-opacity-80 bg-no-repeat bg-center transition-all duration-300 hover:bg-[#3c3c3c] sm:bottom-5 sm:right-5 sm:w-10 sm:h-10 lg:w-15 lg:h-15 lg:bottom-7 lg:right-7 rounded-[4px]"
        style={{
          backgroundImage: 'url("/icon-top-arrow.svg")',
        }}
        onClick={(e) => {
          e.preventDefault()
          slowScrollToTop()
        }}
      ></Link>
    </div>
  )
}

export default IconTop
