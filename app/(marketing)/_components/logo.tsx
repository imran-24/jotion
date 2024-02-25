'use client'

import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

const Logo = () => {
    return ( 
        <div className="hidden md:flex items-center gap-x-2">
            <Image
            alt="Logo"
            src={'/logo.svg'}
            width={30}
            height={30} 
            className="dark:hidden"           
            />
            <Image
            alt="Logo"
            src={'/logo-dark.svg'}
            width={30}
            height={30} 
            className="dark:block hidden"           
            />
            <p className={cn(font.className, "font-semibold text-sm")}>
                Jotion
            </p>
        </div>
     );
}
 
export default Logo;