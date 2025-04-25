'use client';

import { useEffect, useState } from 'react';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Prevent flicker and disable hiding near the top
      if (currentScrollY < 100) {
        setShowHeader(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (Math.abs(currentScrollY - lastScrollY) < 5) return;

      if (currentScrollY > lastScrollY) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed z-10 w-full sm:bg-transparent shadow-2xl transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full py-0 sm:py-1 px-7 lg:px-14 shadow">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 flex justify-start xl:items-center md:gap-12">
            <div className="text-gray-700">
              <span className="sr-only">Home</span>
              <svg
                className="h-10 bg-gray-50/75 p-1 rounded-full"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="20" y="8" width="24" height="4" rx="1" fill="currentColor" />
                <path d="M2 34L32 10L62 34V58H42V42H22V58H2V34Z" fill="currentColor" />
                <rect x="10" y="44" width="8" height="14" fill="white" />
                <rect x="46" y="44" width="8" height="14" fill="white" />
              </svg>
            </div>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <div className="hidden xl:flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <button className='drop-shadow-xl'>
                  <a
                    className="rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800"
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
    </header>
  );
};

export default Header;
