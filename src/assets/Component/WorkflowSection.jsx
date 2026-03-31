import React from 'react';
import { toast } from 'react-toastify';

const WorkflowSection = () => {
    return (
        <div className='w-full bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white'>
            <div className='w-10/12 mx-auto flex flex-col gap-2 py-[120px]'>
                <div className='text-center space-y-4 mb-10 space-y-4'>
                    <h1 className='font-extrabold text-5xl  '>Ready to Transform Your Workflow?</h1>
                    <p className='text-[#ffffff] text-[16px] leading-[20px] opacity-80'> Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                </div>
                <div className=' space-y-4'>
                    <div className='flex gap-3 items-center justify-center'>
                        <button onClick={() => toast('🫣Implementation ongoing!')} className='btn rounded-full hover:scale-105 hover:bg-blue-600 hover:text-white text-[16px] bg-white text-[#4F39F6] px-12 py-[30px]'>Explore Products</button>

                        <button onClick={() => toast('😩 Implementation ongoing!')} className='btn rounded-full hover:scale-105 text-[16px] bg-transparent border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500 border-white text-white px-12 py-[30px] '>View Pricing</button>
                    </div>
                    <div className='text-[14px] text-[#ffffff] text-center opacity-80'>14-day free trial • No credit card required • Cancel anytime</div>
                </div>
            </div>
        </div>
    );
};

export default WorkflowSection;