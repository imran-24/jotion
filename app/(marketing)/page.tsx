
import Heading from './_components/heading'
import Hero from './_components/hero'
import Footer from './_components/footer'

export default function MarketingPage() {
  return (
    <div className='min-h-full flex flex-col dark:bg-[#1F1F1F] '>
        <div className='flex flex-col items-center md:justify-center justify-start  flex-1 px-6 pb-10 space-y-6'>
            <Heading />
            <Hero />
        </div>
        <Footer />
    </div>
  )
}
