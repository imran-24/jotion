"use client"

import { Button } from "@/components/ui/button";
import Logo from "./logo";

const Footer = () => {
    return ( 
        <div className="w-full flex items-center p-6 z-50 bg-background dark:bg-[#1F1F1F]">
            <Logo />
            <div className="md:ml-auto text-muted-foreground  flex w-full justify-between md:justify-end items-center gap-x-2 ">
                <Button 
                variant={'ghost'}
                size={'sm'}>
                    Privacy Pocily
                </Button>
                <Button 
                variant={'ghost'}
                size={'sm'}>
                    Terms & Conditions
                </Button>
            </div>
        </div>
     );
}
 
export default Footer;