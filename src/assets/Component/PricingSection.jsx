import React from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";

const PricingSection = () => {
    return (
        <div className='w-full bg-[#F9FAFC]'>
            <div className='w-10/12 mx-auto flex flex-col gap-20 py-[120px] '>
                <div className='text-center space-y-4 mb-10'>
                    <h1 className='font-extrabold text-5xl text-[#101727]'>Simple, Transparent Pricing</h1>
                    <p className='text-[#627382] text-[16px] leading-[20px]'> Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between text-center items-center gap-10 flex-col md:flex-row px-10'>
                    <div className='flex flex-col items-start shadow p-10 rounded-2xl bg-white space-y-6'>
                        <div className='space-y-2 flex items-start flex-col'>
                            <h1 className='text-2xl font-bold'>Starter</h1>
                            <p className='text-[#627382] text-[16px]'>Perfect for getting started</p>
                        </div>
                        <p><span>$9.99/</span>month</p>
                        <ul className='space-y-4 my-6'>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> Access to 10 free tools</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> Basic templates</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> Community support</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> 1 project per month</li>
                        </ul>
                        <button className='btn rounded-full bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white px-8 py-[20px] w-full' >Get Started Free</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PricingSection;