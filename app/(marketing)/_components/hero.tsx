"use client"

import Image from "next/image";

const Hero = () => {
    return ( 
        <div className="max-w-5xl ">
            <div className="flex relative items-center gap-x-6">
                <div className="flex relative  items-center h-[300px] w-[300px] md:w-[350px] md:h-[350px] ">
                    <Image 
                    alt="document"
                    src={'/documents.png'}
                    fill
                    className="object-contain dark:hidden"
                    />
                    <Image 
                    alt="document"
                    src={'/documents-dark.png'}
                    fill
                    className="object-contain dark:block hidden"
                    />
                </div>
                <div className="w-[350px] relative lg:flex hidden h-[350px]">
                    <Image 
                    alt="document"
                    src={'/reading.png'}
                    fill
                    className="object-contain dark:hidden"
                    />
                    <Image 
                    alt="document"
                    src={'/reading-dark.png'}
                    fill
                    className="object-contain dark:block hidden"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Hero;