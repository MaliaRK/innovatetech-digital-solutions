import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <section className='bg-[url("/bg.png")] h-[495px] rounded'>
            <h1 className='font-semibold text-3xl text-white mx-[25%] pt-[18%]'>The Ultimate Guide to Software, App, and <br /> Website Development for Startups</h1>
            <button className='mx-[45%] mt-[5%] bg-white text-black py-1 px-3 rounded font-semibold '>Contact Us</button>
            <Image src="/dotted.png" height={10} width={50} alt="dotted" className='mx-[47%] mt-[8%]'></Image>
        </section>
        <section>
            <h2 className='text-center py-4 font-semibold'>Our Services</h2>
            <div className='grid grid-cols-3 gap-7 mx-5 '>
                <div className='px-[10px] py-[25px] rounded text-center border-gray-400 border-[2px] shadow-lg shadow-gray-800'>
                    <Image src="/mobile-app.png" height={5} width={40} alt="mobile-app-dev " className='mx-[40%]'></Image>
                    <p className='text-indigo-950 font-semibold'>Mobile App Development</p>
                    <p className='text-gray-500 mt-2'>Mobile and development involves creating, software applications that run on mobile devices, such as smartphones and tablets.</p>
                </div>
                <div className='px-[10px] py-[25px] rounded text-center border-gray-400 border-[2px] shadow-lg shadow-gray-800'>
                    <Image src="/web-dev.png" height={5} width={40} alt="mobile-app-dev" className='mx-[40%]'></Image>
                    <p className='text-indigo-950 font-semibold'>Web Development</p>
                    <p className='text-gray-500 mt-2'>Web development involves bilding and maintaining websites, focusing on aspects like web design, coding and content management.</p>
                </div>
                <div className='px-[10px] py-[25px] rounded text-center border-gray-400 border-[2px] shadow-lg shadow-gray-800'>
                    <Image src="/custom-software.png" height={5} width={40} alt="mobile-app-dev" className='mx-[40%]'></Image>
                    <p className='text-indigo-950 font-semibold'>Custom Software</p>
                    <p className='text-gray-500 mt-2'>Custom software is tailored specifically to meet the unique needs of a business or user, offering specialized functionality that off-the-shelf.</p>
                </div>
            </div>
        </section>
        <section>
            <div className="flex justify-between bg-gray-200 mt-[30px] py-[30px] px-[100px] rounded">
                <div className='ml-[3%] mt-[3%]'>
                    <h5 className='text-indigo-950 font-semibold'>Mobile App Development</h5>
                    <p className='max-w-[70%] text-gray-500 mt-2'>It includes designing user-friendly interfaces, coding for performance, and ensuring compatibility across different
                    platforms like iOS and Android. The process also involves testing, debugging, and continuously updating the 
                    app to improve user experience and functionality.</p>
                </div>
                <Image src="/app-dev.png" height={10} width={300} alt="app-development"></Image>
            </div>
        </section>
        <section>
            <div className="flex justify-between mt-[30px] py-[30px] px-[100px] rounded">
                <Image src="/web-1.png" height={10} width={300} alt="app-development" className='ml-8'></Image>
                <div className='ml-[25%] mt-[3%]'>
                    <h5 className='text-indigo-950 font-semibold'>Web Development</h5>
                    <p className='max-w-[100%] text-gray-500 mt-2'>It includes designing user-friendly interfaces, coding for performance, and ensuring compatibility across different
                    platforms like iOS and Android. The process also involves testing, debugging, and continuously updating the app to improve user experience and functionality.
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div className='mt-[3%]'>
                <h5 className='text-center text-indigo-950 font-semibold'>Innovative Technologies We Utilize</h5>
                <div className='mx-[28%] mt-[2%] flex gap-3 '>
                    <button className='bg-indigo-950 px-[30px] text-white border-[1px] border-gray-900 rounded'>All</button>
                    <button className='px-[10px] text-indigo-950 border-[1px] border-gray-400 shadow-gray-400 shadow-lg rounded'>Frontend</button>
                    <button className='px-[10px] text-indigo-950 border-[1px] border-gray-400 shadow-gray-400 shadow-lg rounded'>Backend</button>
                    <button className='px-[10px] text-indigo-950 border-[1px] border-gray-400 shadow-gray-400 shadow-lg rounded'>Mobile App</button>
                    <button className='px-[10px] text-indigo-950 border-[1px] border-gray-400 shadow-gray-400 shadow-lg rounded'>Database</button>
                </div>
                <div className='grid grid-cols-8 mt-[2%]'>
                    <Image src="/ios.png" height={10} width={80} alt="ios"></Image>
                    <Image src="/android.png" height={10} width={80} alt="android"></Image>
                    <Image src="/flutter.png" height={10} width={80} alt="flutter"></Image>
                    <Image src="/mysql.png" height={10} width={80} alt="mysql"></Image>
                    <Image src="/mongodb.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/redis.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/postgreql.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/graphql.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/sqlite.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/firebase.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/php.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/laravel.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/java.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/kotlin.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/nodejs.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/expressjs.png" height={10} width={80} alt="mongodb"></Image>
                </div>
            </div>
        </section>
        <br /><br />
    </div>
  )
}

export default HomePage