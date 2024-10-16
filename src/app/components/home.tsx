import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div className='md:mt-16 xs:mt-8'>
        <section className='bg-[url("/bg.png")] md:h-[435px] xs:h-[250px] bg-cover bg-center rounded'>
            <h1 className='font-semibold md:text-3xl xs:text-xl text-white md:mx-[25%] xs:mx-[15%] pt-[10%]'>The Ultimate Guide to Software, App, and <br /> Website Development for Startups</h1>
            <button className='md:mx-[45%] xs:mx-[30%] sm:mx-[41%] mt-[8%] bg-white text-black py-2 px-4 rounded font-semibold hover:bg-transparent hover:border-2 hover:text-white'><a href="#contact">Contact Us</a></button>
        </section>
        <section>
            <h2 className='text-center text-2xl py-6 font-semibold'>Our Services</h2>
            <div className='grid md:grid-cols-3 gap-7 mx-5 '>
                <div className='px-[10px] py-[25px] rounded text-center hover:scale-105 duration-200 border-gray-400 border-[2px] shadow-lg shadow-gray-800'>
                    <Image src="/mobile-app.png" height={5} width={40} alt="mobile-app-dev " className='mx-[40%]'></Image>
                    <p className='text-indigo-950 font-semibold'>Mobile App Development</p>
                    <p className='text-gray-500 mt-2'>Mobile and development involves creating, software applications that run on mobile devices, such as smartphones and tablets.</p>
                </div>
                <div className='px-[10px] py-[25px] rounded text-center hover:scale-105 duration-200 border-gray-400 border-[2px] shadow-lg shadow-gray-800'>
                    <Image src="/web-dev.png" height={5} width={40} alt="mobile-app-dev" className='mx-[40%]'></Image>
                    <p className='text-indigo-950 font-semibold'>Web Development</p>
                    <p className='text-gray-500 mt-2'>Web development involves bilding and maintaining websites, focusing on aspects like web design, coding and content management.</p>
                </div>
                <div className='px-[10px] py-[25px] rounded text-center hover:scale-105 duration-200 border-gray-400 border-[2px] shadow-lg shadow-gray-800'>
                    <Image src="/custom-software.png" height={5} width={40} alt="mobile-app-dev" className='mx-[40%]'></Image>
                    <p className='text-indigo-950 font-semibold'>Custom Software</p>
                    <p className='text-gray-500 mt-2'>Custom software is tailored specifically to meet the unique needs of a business or user, offering specialized functionality that off-the-shelf.</p>
                </div>
            </div>
        </section>
        <section>
            <div className="md:flex justify-between bg-gray-200 hover:scale-105 duration-200 mt-[35px] py-[30px] md:px-[100px] xs:px-[5px] xs:mx-4 rounded">
                <div className='ml-[3%] mt-[3%]'>
                    <h5 className='text-indigo-950 font-semibold'>Mobile App Development</h5>
                    <p className='max-w-[70%] text-gray-500 mt-2'>It includes designing user-friendly interfaces, coding for performance, and ensuring compatibility across different
                    platforms like iOS and Android. The process also involves testing, debugging, and continuously updating the 
                    app to improve user experience and functionality.</p>
                </div>
                <Image src="/app-dev.png" height={10} width={300} alt="app-development" className='xs:pt-6 xs:w-[200px] md:w-[300px]'></Image>
            </div>
        </section>
        <section>
            <div className="flex flex-col md:flex-row justify-between mt-[30px] py-[30px] md:px-[100px] xs:px-[5px] rounded hover:scale-105 duration-200">
                <Image src="/web-1.png" height={10} width={300} alt="app-development" className='md:ml-8 xs:w-[200px] xs:mt-5 md:w-[300px] md:order-1 xs:order-2'></Image>
                <div className='ml-[5%] mt-[3%] md:order-2 xs:order-1'>
                    <h5 className='text-indigo-950 font-semibold'>Web Development</h5>
                    <p className='max-w-[100%] text-gray-500 mt-2'>Web Development involves creating and maintaining websites by focusing on both front-end and back-end development. This includes designing responsive layouts, coding for optimal performance, and ensuring compatibility across various browsers and devices. The process also entails testing, debugging, and regularly updating the website to enhance user experience and functionality.
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div className='mt-[4%]'>
                <h5 className='text-center xs:mb-3 md:text-xl text-indigo-950 font-semibold'>Innovative Technologies We Utilize</h5>
                <div className='md:mx-[28%] xs:mx-[5%] mt-[2%] grid xs:grid-cols-2 md:flex gap-3 '>
                    <button className='bg-indigo-950 px-[30px] text-white border-[1px] border-gray-900 hover:bg-indigo-900 rounded'>All</button>
                    <button className='px-[10px] text-indigo-950 border-[1px] border-gray-400 shadow-gray-400 shadow-lg rounded hover:bg-indigo-900 hover:text-white'>Frontend</button>
                    <button className='px-[10px] text-indigo-950 border-[1px] border-gray-400 shadow-gray-400 shadow-lg rounded hover:bg-indigo-900 hover:text-white'>Backend</button>
                    <button className='px-[10px] text-indigo-950 border-[1px] border-gray-400 shadow-gray-400 shadow-lg rounded hover:bg-indigo-900 hover:text-white'>Mobile App</button>
                    <button className='px-[10px] text-indigo-950 border-[1px] border-gray-400 shadow-gray-400 shadow-lg rounded hover:bg-indigo-900 hover:text-white'>Database</button>
                </div>
                <div className='grid md:grid-cols-7 xs:grid-cols-4 gap-6 mt-[3%] mx-[4%] '>
                    <Image src="/ios.png" height={10} width={90} alt="ios"></Image>
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
                    <Image src="/swiftui.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/jetpack.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/react.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/vuejs.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/nextjs.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/tailwind.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/woocom.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/nuxtjs.png" height={10} width={80} alt="mongodb"></Image>
                    <Image src="/sass.png" height={10} width={80} alt="mongodb"></Image>
                </div>
            </div>
        </section>
        <section className='bg-[#0c082c]'>
            <div className=' bg-[url("/projects.png")] bg-cover bg-center opacity-40 md:flex xs:grid gap-3 justify-around p-[8%] mt-[3%]'>
                <div className='border-[1px] border-gray-300 text-white rounded text-center py-2 px-12 font-semibold bg-black bg-opacity-80 shadow-lg hover:scale-110 duration-200'>
                    <p>168</p>
                    <p>Complete</p>
                    <p>Project</p>
                </div>
                <div className='border-[1px] border-gray-300 text-white rounded text-center py-2 px-12 font-semibold bg-black bg-opacity-80 shadow-lg hover:scale-110 duration-200'>
                    <p>140</p>
                    <p>Happy</p>
                    <p>Customer</p>
                </div>
                <div className='border-[1px] border-gray-300 text-white rounded text-center py-2 px-12 font-semibold bg-black bg-opacity-80 shadow-lg hover:scale-110 duration-200'>
                    <p>40</p>
                    <p>Experienced</p>
                    <p>Staff</p>
                </div>
                <div className='border-[1px] border-gray-300 text-white rounded text-center py-2 px-12 font-semibold bg-black bg-opacity-80 shadow-lg hover:scale-110 duration-200'>
                    <p>20</p>
                    <p>Ongoing</p>
                    <p>Project</p>
                </div>      
            </div>
        </section>
        <section>
            <h5 className='text-indigo-950 text-center md:text-2xl font-semibold mt-[3%]'>Meet Our Experts</h5>
            <div className="md:flex justify-between mt-[30px] py-[30px] md:px-[100px] xs:px-[5px] rounded hover:scale-105 duration-200">
                <Image src="/people.png" height={10} width={350} alt="app-development" className='md:ml-8 xs:ml-20 xs:w-[150px] md:w-[250px]'></Image>
                <div className='ml-[15%] mt-[1%]'>
                    <p className=' text-gray-500 md:text-lg xs:text-md mt-2'>It includes designing user-friendly interfaces, coding for performance, and ensuring compatibility across different
                    platforms like iOS and Android. The process also involves testing, debugging, and continuously updating the app to improve user experience and functionality.
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HomePage