'use client'

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Spinner } from "@/components/spinner";

const Navbar = () => {

    const scrolled = useScrollTop()

    const {isAuthenticated, isLoading} = useConvexAuth()

    return ( 
        <div className={cn("w-full flex items-center fixed top-0 z-50 p-6 bg-background dark:bg-[#1F1F1F]",
        scrolled && 'border-b shadow-sm'
        )}>
            <Logo />
            <div className="
            flex items-center justify-between md:justify-end w-full md:ml-auto space-x-2
            ">
                {isLoading && <Spinner />}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant={'ghost'} size={'sm'}>
                                Log in
                            </Button>
                        </SignInButton>
                        <SignInButton>
                            <Button  size={'sm'}>
                                Get Jotion free
                            </Button>
                        </SignInButton>
                    </>
                )}
                {
                    isAuthenticated && !isLoading && (
                        <>
                            <Button size={'sm'} variant={'ghost'}>
                                <Link href={'/documents'}>
                                    Enter Jotion
                                </Link>
                            </Button>
                            <UserButton
                            afterSignOutUrl="/" />
                        </>
                    )
                }
                <ModeToggle />
            </div>
        </div>
     );
}
 
export default Navbar;