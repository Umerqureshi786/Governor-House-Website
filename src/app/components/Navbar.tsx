import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Navbar = () => {
    return (
        <div className='flex justify-around bg-sky-900 h-16'>

            <div className='mt-5 ml-96'> <Image src={"/Logo.png"} alt='logo' width={80} height={75} /> </div>

            <div className=' mt-4 text-xl font-bold text-sky-200 ml-24'> <h1>Tuition Free Education Program on Latest Technologies</h1>
            </div>

            <div className='ml-auto'>
                <nav className='flex text-white mt-4 space-x-8 mr-96'>
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