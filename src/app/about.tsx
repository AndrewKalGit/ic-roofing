import Image from "next/image"
import roofimg1 from "../../public/images/workingonroof.webp";
import roofimg2 from "../../public/images/upscaledbeforeafter.webp"

const about = () => {
    return (
 <section className="mx-1 bg-gray-100 pt-7 pb-1">
  <div className="mx-auto py-8 sm:px-6 lg:px-8 mb-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="bg-gray-50 bg-no-repeat bg-cover md:p-12 lg:px-16 lg:py-32 flex flex-col items-center text-center drop-shadow-2xl rounded-lg  mx-1 sm:mx-0">
      <div className="p-14 lg:p-0">
          <h2 className="drop-shadow-2xl text-lg sm:text-2xl lg:text-4xl font-bold xl:pt-4 text-gray-900">
            Big or Small, We Handle It All
          </h2>

              <p className="text-gray-900 text-xs pb-2 lg:text-xl px-0 sm:px-4 mt-2 sm:mt-4 sm:block">
          We service all of your roofing needs, no matter the size. We specialize in roof repairs, roof maintenance, protective roof coatings, and more.
          </p>

          <div className="mt-4 md:mt-8">
        <button className="flex justify-center w-full">
        <a
          className="rounded-md bg-gray-800 drop-shadow-2xl px-4 py-4  text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-gray-800/75 flex justify-center"
            href="tel:2013970552"
        >
             Get Free Estimate: (201) 397-0552
            </a>
            </button>
          </div>
      </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mx-1 sm:mx-0">
        <Image
          alt="Man on roof working"
          src={roofimg1}
          className="rounded-lg  h-40 w-full drop-shadow-lg object-cover sm:h-56 md:h-full"
        />

        <Image
          alt="Before after roof job"
          src={roofimg2}
          className="rounded-lg h-40 w-full drop-shadow-lg object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>
    )
}

export default about