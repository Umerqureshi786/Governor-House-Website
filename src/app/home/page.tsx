import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
const Home = () => {
    return (
        <div>
            <Navbar />

            <div className='flex justify-evenly mt-10 '>
                <div className='m-12 ml-64 mt-16'>
                    <h1 className='font-extrabold text-6xl text-sky-800'>Governor Sindh </h1><p className='text-4xl text-sky-800 tracking-widest'>Kamran Khan Tessori</p> <br />
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



            <div className='mt-8'>
                <p className=' ml-96 mr-96 text-xl text-justify'>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.

                </p>
            </div>



            <div className='flex justify-center gap-6 mt-8'>

                <div><Image src={"/imageWebsite.jpg"} alt='Image' width={360} height={360} className='rounded-xl' /></div>

                <div><Image src={"/solopreneur.jpg"} alt='Image' width={360} height={360} className='rounded-xl shadow-lg' /></div>

                <div><Image src={"/Classroom.jpg"} alt='Image' width={360} height={360} className='rounded-xl shadow-lg' /></div>

            </div>

            <div className='border-2 border-black mt-16'>
                <p>Scrol images</p>
            </div>



            <div className='ml-96'>

                <div>
                    <h1 className='text-4xl mt-16 font-bold text-sky-800'>Core Courses Sequence</h1>

                </div >

                <br /> <br />

                <div className='grid grid-cols-4 '>

                    <div className=' border-black text-center rounded-md items-center flex flex-col justify-center w-80'> <Image src={"/programming_fundamentals.jpg"} alt='programming fundamentals' height={350} width={300} className='rounded-t-xl' />  <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'>Programming Fundamentals</div>
                    </div>

                    <div className=' border-black text-center rounded-md items-center flex flex-col justify-center w-80'> <Image src={"/nextjs..jpg"} alt='Web2 & nextjs' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'> Web2 Using NextJS </div></div>
                    <div className=' border-black text-center rounded-md items-center flex flex-col justify-center w-80'> <Image src={"/earn_as_your_learn.jpg"} alt='Earn as you learn' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700 '>Earn as You Learn</div></div>

                </div>

            </div>


            <br /> <br />



            <div className='ml-96' >


                <div className='text-4xl mt-16 font-bold text-sky-800'>
                    Advanced Courses
                </div>
                <br /> <br />

                <div className='grid grid-cols-4'>
                    <div className='  border-black text-center rounded-md items-center flex flex-col justify-center w-80'> <Image src={"/AI.jpg"} alt='AI' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'>Artificial Intelligence</div></div>

                    <div className='  border-black text-center rounded-md items-center flex flex-col justify-center w-80'> <Image src={"/metaverse.jpg"} alt='Metaverse' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'> Web 3 and Metaverse </div> </div>
                    <div className='  border-black text-center rounded-md items-center flex flex-col justify-center w-80'> <Image src={"/cloudComputing.jpg"} alt='Cloud Computing' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'>Cloud-Native Computing </div> </div>
                    <div className='  border-black text-center rounded-md items-center flex flex-col justify-center w-80'> <Image src={"/iot.jpg"} alt='Iot' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'> Ambient Computing and IOT </div></div>
                    <div className='  border-black text-center rounded-md items-center flex flex-col justify-center w-80'><Image src={"/genomics.jpg"} alt='Iot' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'> Genomics and Bioinformatics </div></div>
                    <div className=' mt-7 border-black text-center rounded-md items-center flex flex-col justify-center w-80'><Image src={"/automation.jpg"} alt='Iot' height={350} width={300} className='rounded-t-xl' /> <div className='bg-white text-lg font-bold rounded-b-lg mt-4 text-neutral-700'> Network Programmability and Automation </div></div>
                </div>


            </div>

            <br /> <br /> <br /> <br />

            <div className='bg-slate-100 p-10 flex justify-center gap-40 '>


                <div className='flex flex-col gap-2  mr-6'> <h2 className='text-xl font-bold'>Core Courses</h2>  <a href="#">Programming Fundamentals</a><a href="#">Web2 Using Nextjs </a><a href="#">Earn as You Learn</a></div>


                <div className='flex flex-col gap-2  mr-12'> <h2 className='text-xl font-bold'>Advanced Courses</h2>  <a href="#">Artificial Intelligence and Deep Learning</a><a href="#">Web3 and Metaverse</a><a href="#"> Cloud-Native Computing</a><a href="#">Ambient Computing and IOT</a><a href="#">Genomics and Bioinformatics</a><a href="#">Network Programmability and Automation </a></div>


                
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