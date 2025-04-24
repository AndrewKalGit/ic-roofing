const header = () => {
    return (
  <header className="bg-white drop-shadow-2xl">
  <div className="w-full py-1 px-7 lg:px-14 shadow">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 flex justify-start xl:items-center md:gap-12">
        <div className="text-gray-700">
          <span className="sr-only">Home</span>
     <svg className="h-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="8" width="24" height="4" rx="1" fill="currentColor" />
  <path d="M2 34L32 10L62 34V58H42V42H22V58H2V34Z" fill="currentColor" />
  <rect x="10" y="44" width="8" height="14" fill="white"/>
  <rect x="46" y="44" width="8" height="14" fill="white"/>
</svg>

        </div>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        {/* <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
            </li>
          </ul>
        </nav> */}

        <div className="hidden xl:flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <button>
            <a
              className="rounded-md bg-gray-700 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-600"
                href="tel:2013970552"
            >
             Get Free Estimate: (201) 397-0552
            </a>
            </button>
            {/* <div className="hidden sm:flex">
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-600"
                href="#"
              >
                Register
              </a>
            </div> */}
          </div>
{/* 
          <div className="block md:hidden">
            <button
              className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</header>
    )
}

export default header