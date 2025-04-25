'use client'

import { useEffect, useState } from 'react'

const Banner = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className={`transition-all duration-700 ease-out rounded-xl transform ${
        scrolled ? 'px-1.5 lg:px-8' : 'px-0 lg:px-2'
      }`}
    >
      <div className="drop-shadow-xl min-h-[67.5vh] lg:min-h-[90vh] bg-[url(../../public/images/sunroof5.webp)] bg-center bg-no-repeat bg-cover grid justify-center lg:place-content-start">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-prose pt-4 sm:pt-2 lg:pt-0 text-left leading-relaxed">
            <div className="py-14 px-7 rounded-lg drop-shadow-2xl bg-gray-100/85 sm:bg-gradient-to-r sm:via-gray-100/75">
              <h1 className="mb-4 text-xl sm:text-2xl font-bold text-gray-900 md:text-4xl">
                <strong className="text-black"> Reliable </strong>
                Roofing. Done Right.
              </h1>

              <p className="text-base text-pretty text-gray-900 sm:text-lg/relaxed">
                We handle all your roofing needs — repairs, maintenance, coatings, and more. No job too big or small.
              </p>

              <div className="flex gap-4 mt-8 mb-2">
                <button className="drop-shadow-xl">
                  <a
                    className="rounded-md bg-gray-900 px-5 py-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800"
                    href="tel:2013970552"
                  >
                    Get Free Estimate: (201) 397-0552
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
