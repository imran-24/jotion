"use client"

import Image from "next/image";

const Hero = () => {
    return ( 
        <div className="max-w-5xl ">
            <div className="flex relative items-center gap-x-6">
                <div className="flex relative  items-center h-[280px] w-[280px] md:w-[300px] md:h-[300px] ">
                    <Image 
                    alt="document"
                    src={'/documents.png'}
                    fill
                    className="object-contain"
                    />
                </div>
                <div className="w-[300px] relative lg:flex hidden h-[300px]">
                    <Image 
                    alt="document"
                    src={'/reading.png'}
                    fill
                    className="object-contain"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Hero;