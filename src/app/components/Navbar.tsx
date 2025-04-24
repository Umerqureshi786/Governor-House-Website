import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Navbar = () => {
    return (
        <div className='flex justify-around bg-sky-900 h-20 gap-2'>

            <div className='mt-5 ml-1 lg:ml-60'>
                <Image src={"/Logo.png"} alt='logo' width={80} height={75} />
            </div>

            <div className="hidden md:block md:mt-4 md:text-xl md:font-bold text-sky-200 md:ml-16 
                lg:mt-4 lg:text-xl lg:font-bold lg:ml-16">
  <h1>Tuition Free Education Program on Latest Technologies</h1>
</div>


            <div className='ml-auto'>
                <nav className='flex text-white mt-4 space-x-8 mr-80'>
                    <Link href="/home">Home</Link>
                    <Link href="/apply">Apply</Link>
                    <Link href="/jobs">Jobs</Link>
                    <Link href="/Result">Result</Link>
                    <Link href="/Courses">Courses</Link>
                </nav>
            </div>



        </div>
    )
}
export default Navbar