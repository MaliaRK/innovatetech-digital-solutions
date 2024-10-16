'use client'

import Image from 'next/image'
import React, {useState} from 'react'
import { FaPhone, FaHome } from 'react-icons/fa';

const Header = () => {
    const [menu, setMenu] = useState(false);
    function handleMenu(){
        setMenu(!menu)
    }
  return (
    <header className='relative'>
        <div className='flex justify-between m-3'>
            <Image src="/logo.png" height={10} width={80} alt={"logo"} className='fixed top-0 left-0 bg-gray-200 w-[466px] pr-96 pl-3 md:block xs:hidden'></Image>
            <div className='fixed top-0 right-0 bg-gray-200 p-5 lg:pl-[500px] md:pl-[240px] 2xl:pl-[700px] xs:hidden md:flex'>
                <ul className='flex gap-[25px] text-indigo-900 cursor-pointer'>
                    <li className='text-red-700 hover:text-red-400'>Home</li>
                    <li><a href="#about" className='hover:text-indigo-600'>About</a></li>
                    <li className='hover:text-indigo-600'>How We Work</li>
                    <li className='hover:text-indigo-600'>Career</li>
                    <li className='flex gap-2 bg-indigo-950 hover:bg-indigo-600 rounded-full py-[3px] px-[12px] text-white'>
                        <a href="#contact">Contact</a>
                        <h5 className='mt-1'><FaPhone/></h5>
                    </li>
                </ul>
            </div>
            <Image src="/logo.png" height={8} width={50} alt={"logo"} className='fixed top-0 left-0 bg-gray-200 w-[199px] pr-40 md:hidden'></Image>
            <div className='md:hidden fixed top-0 right-0 bg-gray-200 xs:pl-[72%]'>
                <FaHome style={{fontSize: '34px', color: 'indigo', marginTop: '5px'}} onClick={handleMenu}/>
                {menu && (<div className='absolute right-4'>
                    <ul className='bg-indigo-950 text-gray-500 p-2 font-semibold'>
                        <li>Home</li>
                        <li><a href="#about">About</a></li>
                        <li>How We Work</li>
                        <li>Career</li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>)
                }
            </div>
        </div>
    </header>
  )
}

export default Header