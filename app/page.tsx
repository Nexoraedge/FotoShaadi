import Features from "@/components/Features"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <section className="h-screen bg-black ">
     <Navbar/>
     <Hero />
     <Features />

    </section>
  )
}

export default page