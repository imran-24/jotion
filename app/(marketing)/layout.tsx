import Navbar from "./_components/navbar";

export default function MarketingLayout({
    children
}: {children: React.ReactNode}){
    return (
        <div className="h-full dark:bg-[#1F1F1F]">
            <Navbar />
            <div className="pt-20 h-full ">
                {children}
            </div>
        </div>
    )
}