import React, { useState } from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const Navbar = () => {
    const [value, setValue] = useState(false);
    console.log(value);
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
                        <HiOutlineBars3 className='text-3xl' onClick={() => showNavItem(!value)}></HiOutlineBars3>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <button className='flex gap-4 items-center rounded-full cursor-pointer  py-4 px-4  border border-2 border-blue-500  ' ><MdOutlineLocalGroceryStore></MdOutlineLocalGroceryStore>  Login</button>
                    <button className='cursor-pointer bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white py-3 px-6 rounded-full'>Get Started</button>
                </div>
            </div>
            {
                value ?
                    <ul className='lg:hidden absolute left-[75px] flex-col gap-5 text-gray-700 font-light   lg:flex'>
                        <li className='cursor-pointer'>Products </li>
                        <li className='cursor-pointer'>Features </li>
                        <li className='cursor-pointer'>Pricing </li>
                        <li className='cursor-pointer'>Testimonials </li>
                        <li className='cursor-pointer'>FAQ </li>
                    </ul> : null
            }
        </div>

    );
};

export default Navbar;