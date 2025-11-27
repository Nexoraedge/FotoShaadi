import Image from "next/image"

const Features = () => {
    return (
        <section className=" w-full    md:py-[112px] lg:pl-[56px] py-[64px] px-[24px] bg-[#EEE6E7]">

            <div className="container mx-auto  flex flex-col gap-[80px] ">

                <div className="topcon text-[#0C0A02] max-w-[800px]  flex gap-[20] md:gap-[30] flex-col">
                    <div className="heading">
                        <h3 className=" font-semibold font-serif ">Features</h3>
                    </div>
                    <div className="text flex flex-col gap-[18px]">
                        <h2 className="text-[35px] md:text-[43px] lg:text-[50px]  font-[Aboreto]  font-medium">
                            Capture every moment with powerful tools
                        </h2>
                        <h4 className="text-base text-[#0C0A02]  font-medium font-[v] max-md:w-4/5 max-sm:w-full  lg:text-xl md:text-base">ShaadiPic transforms wedding photography into a seamless digital experience. Our platform empowers photographers and couples to preserve memories with precision and ease.</h4>
                    </div>
                </div>

                <div className="bottomCon   flex flex-col lg:flex-row max-lg:h-[840px] bg-[#DECED0] rounded-2xl  w-full lg:h-[720px] ">

                    <div className="FeatureOne flex  max-lg:flex-col lg:gap-3 gap-1   lg:my-5 max-lg:mx-3">

                        <div className="styatic-top border  border-pink-700 max-lg:h-[70] max-lg:w-full lg:w-[80] lg:h-full flex p-2 lg:flex-col  items-center  justify-between ">

                            <h2 className="number text-3xl font-[v] font-normal text-[#0C0A02]">01</h2>
                            <h3 className="textTitle font-[Aboreto] relative lg:bottom-[20%] font-medium text-[24px] md:text-[28px] lg:text-[32px] lg:rotate-270 origin-center w-fit  flex "><span>Secure_ </span> <span> Storage</span> </h3>


                        </div>

                        <div className="mid flex flex-col border-sky-500 max-lg:h-[558] h-full max-lg:w-full w-[658] lg:px-[24] lg:py-[48] max-lg:py-[20] max-lg:px-[5] gap-[30px] ">
                            <div className="topt flex flex-col gap-[18px]">
                                <h2 className="font-[Aboreto] text-[30px] md:text-[40px] lg:text-[50px]">Digital wedding memories</h2>
                                <p className="text-[#0C0A02] font-[v] text-sm  md:text-[16px] ">Preserve your wedding photography in crystal-clear quality. Every image is stored securely in the cloud, ensuring your memories stay safe, organized, and always accessible</p>
                            </div>
                            <div className="img max-lg:mt-6 rounded-xl flex justify-center  max-lg:w-[350] h-[350] w-full self-center">
                                <Image src="/assets/Feature_1.png" width={500} height={500} alt="IMg" className="h-full  rounded-xl shadow-md shadow-black/35 " />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default Features