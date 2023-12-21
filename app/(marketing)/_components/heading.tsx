'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
    return ( 
        <div className="max-w-3xl space-y-4 text-center">
            <div className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Jotion</span>
            </div>
            <h3 className="font-semibold sm:text-lg md:text-xl ">
                Jotion is the connected workspace where <br />
                better, faster work happens.
            </h3>
            <Button>
                Enter Jotion
                <ArrowRight className="ml-2 h-5 w-5"/>
            </Button>
        </div>
     );
}
 
export default Heading;