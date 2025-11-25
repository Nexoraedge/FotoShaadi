import Image from "next/image"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <section className="h-[91vh] w-full relative ">
      <div className="absolute top-0 left-0 z-0 w-full h-full">
        <Image src="/assets/Hero-Img.png" alt="hero-bg" fill className="object-cover" />
      </div>
      <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/35" ></div>

      <div className=" z-2 w-full h-full  absolute px-2 py-4  lg:px-10 lg:py-10 top-0 left-0">

        <div className="center w-full h-full  p-1 gap-1 flex max-lg:flex-col  ">

          {/* cHEading text*/}

          <div className="  flex p-2 pb-10 lg:pb-20 max-md:items-start  items-center justify-center  md:justify-start lg:justify-center h-1/2 w-full  lg:h-full">
            <h2 className="text-4xl md:w-4/6 lg:w-full  sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white font-[Aboreto] md:text-shadow-lg text-shadow-sm text-shadow-white/30  ">Share the day, Keep the moments.</h2>
          </div>

          {/* CTA && SubHeading */}

          <div className=" font-[v]   h-1/2 p-2 flex items-end-safe justify-end  max-md:pb-10  w-full lg:h-full">
            <div className="items items-center  flex flex-col gap-6 lg:gap-8 md:w-1/2 lg:w-3/4  ">
              <h4 className="text-white/88 text-sm font-[Lexend] max-md:w-4/5 max-sm:w-full max-md:text-center  lg:text-xl md:text-base">A simple platform for capturing and preserving wedding memories. Connect photographers, couples, and families through seamless photo sharing.</h4>
              <div className="buttons flex justify-center md:justify-start gap-6 md:gap-8 lg:gap-10">
                <Button className="bg-[#5A0E15] rounded hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer font-medium text-white text-shadow-sm text-shadow-black/80">Create your Event</Button>
                <Button className="bg-[#EED9A4]/20 cursor-pointer hover:scale-105 rounded border  border-[#EED9A4]/60 hover:bg-[#EED9A4]/40 transition-all duration-300 ease-in-out font-medium text-white text-shadow-sm text-shadow-black/60">Watch Demo</Button>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>



  )
}

export default Hero