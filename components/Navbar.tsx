"use client"
import Image from 'next/image'
import { useState } from 'react'
import { Button } from './ui/button'

const Navbar = () => {
    const [login, setLogin] = useState(true)

    return (
        <div className='bg-[#DECED0] p-2 px-5 h-16 w-full'>
            <div className="center w-full  h-full  flex justify-between">
                
                <div className="flex items-center gap-2">
                    <Image src="/assets/Logo_Png-removebg-preview.png" alt=" LoGo" width={200} height={200} className='w-[48] ' />
                </div>

                {!login ? <div className="flex items-center">
                    <Button className='px-4 h-[80%]  font-[Lexen] text-lg xl:px-6 xl:h-[85%]  xl:font-bold border border-[#d6b289] hover:bg-[#84270f] text-center flex justify-center bg-[#5A0E15] text-white/85 transition-colors duration-200 ease-linear hover:cursor-pointer '>Login</Button>
                </div> : <div className="flex items-center ">
                    <Button className='p-0'><Image src="/assets/Menu.svg" alt=" LoGo" width={100} height={100} className='w-[30] cursor-pointer' /></Button>
                </div>}

            </div>
        </div>
    )
}

export default Navbar