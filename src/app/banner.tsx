const banner = () => {
    return (
<section className="drop-shadow-xl h-auto lg:h-[90vh] grid justify-items-center-center bg-[url(../../public/images/sceneryroof.webp)] bg-center bg-no-repeat bg-cover bg-gray-50 lg:grid place-content-center">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="max-w-prose pt-3 sm:pt-2 lg:pt-0 text-left leading-relaxed">
     <div className="py-14 px-7 rounded-lg drop-shadow-2xl bg-gray-100/90">
      <h1 className="mb-4  text-2xl sm:text-3xl font-bold text-gray-800 md:text-4xl">
        <strong className="text-gray-900"> Reliable </strong>
        Roofing. Done Right
      </h1>

      <p className="text-base text-pretty text-gray-800 sm:text-lg/relaxed">
        We handle all your roofing needs — repairs, maintenance, coatings, and more. No job too big or small.
      </p>

      <div className="flex gap-4 mt-8 mb-2">
         <button>
            <a
              className="rounded-md bg-gray-700 px-5 py-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600"
                href="tel:2013970552"
            >
             Get Free Estimate: (201) 397-0552
            </a>
            </button>
{/* 
        <a
          className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
          href="#"
        >
          Learn More
        </a> */}
      </div>
    </div>
    </div>
  </div>
</section>
    )
}

export default banner