import React from 'react'
import Navbar from './components/Navbar'
import Image from 'next/image'
const Home = () => {
    return (
        <div>
            <Navbar />

            <div className='mt-10 sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                <div className='m-12 ml-6 mt-16 sm:ml-10 md:ml-24 lg:ml-60 '>
                    <h1 className='font-extrabold text-4xl text-sky-800'>Governor Sindh </h1>
                    <p className='text-3xl text-sky-800 tracking-widest'>Kamran Khan Tessori</p> <br />
                    <h1 className='text-sky-500 text-4xl font-extrabold tracking-wider'>Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)</h1> <br />
                    <p className='text-2xl text-sky-800 font-extrabold'>Earn up to $5,000 / month</p>
                    <p className='text-2xl text-sky-800 font-extrabold mt-4'>Now admissions are open in <br />Hyderabad</p>

                    <button className='bg-sky-800 text-white w-48 h-12 rounded-lg font-bold mt-10'>APPLY NOW</button>
                </div>


                <div className='-mt-3 '>
                    <Image src="/G.Kamran Tessori.png" alt='Kamrantesori' width={800} height={800} />
                </div>

            </div>


            <div><p className='text-3xl text-center mt-16 font-bold text-sky-800'>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur <br /> Developing Billion-Dollar Valued Developers and Solopreneurs
            </p>
            </div>



            <div className='mt-8  lg:w-full lg:px-72'>
                <p className=' px-6 text-xl text-justify '>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.

                </p>
            </div>



            <div className='grid grid-cols-1 ml-10 gap-6 mt-8 lg:grid-cols-3  lg:px-64  md:grid-cols-3 md:px-56'>

                <div><Image src={"/imageWebsite.jpg"} alt='Image' width={360} height={360} className='rounded-xl' /></div>

                <div><Image src={"/solopreneur.jpg"} alt='Image' width={360} height={360} className='rounded-xl shadow-lg' /></div>

                <div><Image src={"/Classroom.jpg"} alt='Image' width={360} height={360} className='rounded-xl shadow-lg' /></div>

            </div>

            {/* <div className='border-2 border-black mt-16'>
                <p>Scrol images</p>
            </div> */}



            <div className=''>

                <div>
                    <h1 className='ml-4 text-4xl mt-16 font-bold text-sky-800 lg:ml-64'>Core Courses Sequence</h1>

                </div >

                <br /> <br />

                <div className='ml-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-0 lg:px-80'>

                    <div className='  border-black text-center rounded-md items-center flex flex-col justify-center w-80'> <Image src={"/programming_fundamentals.jpg"} alt='programming fundamentals' height={500} width={500} className='rounded-t-xl' />  <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'>Programming Fundamentals</div>
                    </div>

                    <div className=' mt-8 border-black text-center rounded-md items-center flex flex-col justify-center w-80'> <Image src={"/nextjs..jpg"} alt='Web2 & nextjs' height={500} width={500} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'> Web2 Using NextJS </div></div>
                    <div className='mt-8 border-black text-center rounded-md items-center flex flex-col justify-center w-80'> <Image src={"/earn_as_your_learn.jpg"} alt='Earn as you learn' height={500} width={500} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700 '>Earn as You Learn</div></div>

                </div>

            </div>


            <br /> <br />



            <div className='' >


                <div className='ml-16 text-4xl mt-16 font-bold text-sky-800 md:ml-64 lg:ml-64 '>
                    Advanced Courses
                </div>
                <br /> <br />

                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 md:px-56 lg:px-60'>
                    <div className='  border-black text-center rounded-md items-center flex flex-col justify-center w-full'> <Image src={"/AI.jpg"} alt='AI' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'>Artificial Intelligence</div></div>

                    <div className='  border-black text-center rounded-md items-center flex flex-col justify-center w-full'> <Image src={"/metaverse.jpg"} alt='Metaverse' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'> Web 3 and Metaverse </div> </div>
                    <div className='  border-black text-center rounded-md items-center flex flex-col justify-center w-full'> <Image src={"/cloudComputing.jpg"} alt='Cloud Computing' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'>Cloud-Native Computing </div> </div>
                    <div className='  border-black text-center rounded-md items-center flex flex-col justify-center w-full'> <Image src={"/iot.jpg"} alt='Iot' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'> Ambient Computing and IOT </div></div>
                    <div className='  border-black text-center rounded-md items-center flex flex-col justify-center w-full'><Image src={"/genomics.jpg"} alt='Iot' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'> Genomics and Bioinformatics </div></div>
                    <div className=' mt-7 border-black text-center rounded-md items-center flex flex-col justify-center w-full'><Image src={"/automation.jpg"} alt='Iot' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'> Network Programmability and Automation </div></div>
                </div>


            </div>

            <br /> <br /> <br />

            <div className=' p-10 flex flex-col gap-12 md:flex-row md:justify-center lg:flex-row lg:gap-52 lg:justify-center '>


                <div className='flex flex-col gap-2'> <h2 className='text-xl font-bold'>Core Courses</h2>  <a href="#">Programming Fundamentals</a><a href="#">Web2 Using Nextjs </a><a href="#">Earn as You Learn</a></div>


                <div className='flex flex-col gap-2 '> <h2 className='text-xl font-bold'>Advanced Courses</h2>  <a href="#">Artificial Intelligence and Deep Learning</a><a href="#">Web3 and Metaverse</a><a href="#"> Cloud-Native Computing</a><a href="#">Ambient Computing and IOT</a><a href="#">Genomics and Bioinformatics</a><a href="#">Network Programmability and Automation </a></div>






                <div> <h2 className='text-xl font-bold  mr-36'>Social Links</h2>
                    <div className='mt-4 flex gap-3 '>
                      <a href="https://www.facebook.com/TeamKTessori" target='blank'>  <img src="/communication.png" alt="fb" className='w-7 h-7'/> </a>
                      <a href="https://www.youtube.com/@KamranTessorikk" target='blank'>  <img src="/youtube (1).png" alt="fb" className='w-7 h-7'/> </a>
                      <a href="https://www.facebook.com/TeamKTessori" target='blank'>  <img src="/twitter (1).png" alt="fb" className='w-7 h-7'/> </a>
                      <a href="https://www.instagram.com/KamranTessoriPk/" target='blank'>  <img src="/instagram (1).png" alt="fb" className='w-7 h-7'/> </a>
                      <a href="https://www.instagram.com/KamranTessoriPk/" target='blank'>  <img src="/tiktok.png" alt="fb" className='w-7 h-7'/> </a>
                    </div>
                </div>
            </div>


            <br /> <br />

        </div>
    )
}
export default Home