import React, { useState } from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Sling as Hamburger, Sling } from 'hamburger-react'

const Navbar = ({selectedItems}) => {
    const [value, setValue] = useState(false);
    const showNavItem = (value) => {
        setValue(value);
    }
    return (
        <div>

            <div className='w-10/12 mx-auto flex justify-between items-center py-2 font-bold '>
                <div className="hidden md:hidden lg:block font-black text-4xl pb-1 bg-linear-500 from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
                    DigiTools
                </div>
                <div>
                    <ul className='flex gap-5 text-gray-700 font-light hidden  lg:flex'>
                        <li className='cursor-pointer'>Products </li>
                        <li className='cursor-pointer'>Features </li>
                        <li className='cursor-pointer'>Pricing </li>
                        <li className='cursor-pointer'>Testimonials </li>
                        <li className='cursor-pointer'>FAQ </li>
                    </ul>
                    <div
                        tabIndex="-1"
                        className=" sm:block lg:hidden menu menu-sm dropdown-content  "> 
                        <Sling toggled={value} toggle={setValue} size={40} color="#4F39F6" className='lg:hidden ' onToggle={(toggled) => showNavItem(toggled)} />
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='relative flex items-center gap-1 border border-2 border-gray-300 rounded-full  px-5'>
                        <MdOutlineLocalGroceryStore className='text-3xl'></MdOutlineLocalGroceryStore>
                        {selectedItems.length > 0 ? <span className='absolute top-1 left-9 z-10 text-[12px] text-white rounded-full bg-blue-700 px-2'>{selectedItems.length}</span>: null}
                        <button className='flex gap-4 items-center rounded-full cursor-pointer  py-3 px-6  ' >  Login</button>
                    </div>
                    <button className='cursor-pointer bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white py-3 px-6 rounded-full'>Get Started</button>
                </div>
            </div>
            {
                value ?
                    <ul className='lg:hidden absolute left-[75px] flex-col gap-5 text-gray-700 font-light   lg:flex bg-linear-500 from-[#4F39F6] to-[#9514FA] p-3 rounded-2xl'>
                        <li className='cursor-pointer hover:bg-blue-400 text-white rounded-xl p-2'>Products </li>
                        <li className='cursor-pointer hover:bg-blue-400 text-white rounded-xl p-2'>Features </li>
                        <li className='cursor-pointer hover:bg-blue-400 text-white rounded-xl p-2'>Pricing </li>
                        <li className='cursor-pointer hover:bg-blue-400 text-white rounded-xl p-2'>Testimonials </li>
                        <li className='cursor-pointer hover:bg-blue-400 text-white rounded-xl p-2'>FAQ </li>
                    </ul> : null
            }
        </div>

    );
};

export default Navbar;