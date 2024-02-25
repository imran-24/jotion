'use client'

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";


const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth()
    return ( 
        <div className="max-w-3xl space-y-4 flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Jotion</span>
            </h1>
            <h3 className="font-semibold sm:text-lg md:text-xl ">
                Jotion is the connected workspace where <br />
                better, faster work happens.
            </h3>
            {isLoading && <Spinner size={'lg'}/>}
            {isAuthenticated && !isLoading && (
                <>
                <Button asChild>
                    <Link href={'/documents'}>
                    Enter Jotion
                    <ArrowRight className="ml-2 h-5 w-5"/>
                    </Link>
                </Button>
                </>)
            }
            {!isAuthenticated && !isLoading && (
                <>
                    <SignInButton mode="modal">
                        <Button  >
                            Get Jotion Free
                            <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                    </SignInButton>
                </>
            )}
            
        </div>
     );
}
 
export default Heading;