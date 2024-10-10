import Image from 'next/image'
import React from 'react'
import { FaPhone } from 'react-icons/fa';


const Header = () => {
  return (
    <header>
        <div className='flex justify-between m-3 bg--900'>
            <Image src="/logo.png" height={10} width={80} alt={"logo"} className='pl-3'></Image>
            <div className='p-5'>
                <ul className='flex gap-[25px] text-indigo-900 cursor-pointer'>
                    <li className='text-red-500'>Home</li>
                    <li>About</li>
                    <li>How We Work</li>
                    <li>Career</li>
                    <li className='flex gap-2 bg-indigo-950 rounded-full py-[3px] px-[12px] text-white '>
                        Contact
                        <h5 className='mt-1'><FaPhone/></h5>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header