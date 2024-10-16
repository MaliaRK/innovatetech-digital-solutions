import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className='bg-[#0c082c]'>
            <div className=' bg-[url("/footer.png")] bg-cover bg-center bg-no-repeat opacity-40 pt-[3%] mt-[3%]'>
                <div className=' text-white text-center md:mx-[20%] xs:mx-[8%] rounded py-8 bg-black bg-opacity-80 shadow-lg'>
                    <button className='bg-red-600 md:py-2 md:px-28 xs:px-4 font-semibold md:text-xl border-2 rounded'>Contact Us</button>
                    <div className='grid justify-center gap-4 pt-4'>
                        <input type="text" placeholder='Enter Your Name' className='bg-black md:pr-72 pl-2 md:py-2 border-2 rounded'/>
                        <input type="email" placeholder='Enter Your Email' className='bg-black pl-2 md:py-2 border-2 rounded'/>
                        <input type="tel" placeholder='Enter Your Phone Number' className='bg-black pl-2 md:py-2 border-2 rounded'/>
                        <button className='bg-red-600 hover:bg-red-800 md:text-xl md:py-2 border-2 rounded'>Submit</button>
                    </div>
                </div>
                <div className='md:flex xs:text-center md:text-left text-white justify-around mt-10 py-6 bg-black bg-opacity-80 shadow-lg'>
                    <div className='xs:text-sm md:text-lg xs:mt-6'>
                        <h3 id='about' className='md:text-2xl xs:text-lg font-bold'>About</h3>
                        <p className='mt-2'>How We Work</p>
                        <p>Terms & Condition</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='xs:text-sm md:text-lg xs:mt-6'>
                        <h3 className='md:text-2xl xs:text-lg font-bold'>Contact Us</h3>
                        <p className='mt-2'>Address: Dhaka, Bangladesh</p>
                        <p>Phone: +8801323456789</p>
                        <p>Email- info@gmail.com</p>
                    </div>
                    <div className='xs:text-sm md:text-lg xs:mt-6'>
                        <h3 className='md:text-2xl xs:text-lg font-bold'>Follow Us</h3>
                        <div className='flex gap-2 mt-2 md:mx-auto xs:mx-32'>
                            <Image src="/facebook.png" height={5} width={20} alt="facebook"></Image>
                            <p>Facebook</p>
                        </div>
                        <div className='flex gap-2 mt-2 md:mx-auto xs:mx-28'>
                            <Image src="/linkedin.png" height={5} width={20} alt="linkedin"></Image>
                            <p>Linkedin</p>
                        </div>
                        <div className='flex gap-2 mt-2 md:mx-auto xs:mx-28'>
                            <Image src="/youtube.png" height={5} width={20} alt="youtube"></Image>
                            <p>Youtube</p>
                        </div>
                    </div>
                </div>
                <p className=' text-white xs:text-xs md:text-lg text-center pb-4 pt-1 bg-black bg-opacity-80 shadow-lg'>Copright 2024 All Rights Reserved By <b>Rumi akhtar</b>.</p>
            </div>
    </footer>
  )
}

export default Footer