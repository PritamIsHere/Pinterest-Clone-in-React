import React from 'react'
import { FaPinterest, FaSearch } from "react-icons/fa";
import { FaBell, FaAngleDown } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className='w-full p-3 flex justify-between items-center fixed bg-white'>

            {/* left */}
            <div className="flex items-center justify-between">
                <div id="icon" className='bg-white rounded-full'>
                    <FaPinterest size={29} color='red' />
                </div>

                <button className='px-3 py-2 rounded-full text-l font-semibold text-white bg-black ml-2'>Home</button>
                <button className='px-3 py-2 rounded-full text-l font-semibold bg-white'>Explore</button>
                <button className='px-3 py-2 rounded-full text-l font-semibold bg-white'>Create</button>
            </div>

            {/* bottom */}
            <div className='flex w-full  items-center justify-between bg-[#F1F0F0] p-3 rounded-full'>
                <FaSearch color='#777677' size={20} />

                <input type="text" placeholder='Search' className='h-full w-full bg-transparent outline-none px-3 py-2 TEXT-LG' />
            </div>

            {/* right */}
            <div className="flex justify-between items-center">
                {/* Notification */}
                <div className=' hover:bg-[#E8E9E8] p-3 rounded-full cursor-pointer'>
                    <FaBell color='#777677' size={25} />
                </div>

                {/* Massages */}
                <div className=' hover:bg-[#E8E9E8] p-3 rounded-full cursor-pointer'>
                    <IoChatbubbleEllipses color='#777677' size={25} />
                </div>

                {/* profile */}
                <div className=' hover:bg-[#E8E9E8] p-3 rounded-full'>
                    <div className='p-3 bg-[#E8E9E8] text-xs rounded-full leading-3 cursor-pointer'>P</div>
                </div>

                {/* DropDown */}
                <div className=' hover:bg-[#E8E9E8] p-2 rounded-full cursor-pointer'>
                    <FaAngleDown color='#777677' size={15} />
                </div>
            </div>

        </nav>
    )
}

export default Navbar