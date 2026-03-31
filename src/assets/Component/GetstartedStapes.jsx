import React from 'react';

const GetstartedStapes = () => {
    return (
        <div className='w-full bg-[#F9FAFC]'>
            <div className='w-10/12 mx-auto flex flex-col gap-20 py-[120px] '>
                <div className='text-center space-y-4 mb-10'>
                    <h1 className='font-extrabold text-5xl text-[#101727]'>Get Started in 3 stapes</h1>
                    <p className='text-[#627382] text-[16px] leading-[20px]'> Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between text-center items-center gap-10 flex-col md:flex-row px-10'>
                    <div className='flex flex-col hover:scale-105 duration-200 shadow p-10 rounded-2xl bg-white'>
                        <span className='self-end bg-linear-500 from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 flex items-center justify-center text-white'>01</span>
                        <div className='space-y-4 flex items-center flex-col'>
                            <div className='relative  rounded-full p-4 bg-linear-500 before:absolute before:opacity-10 before:inset-0 before:bg-gradient-to-r before:from-[#4F39F6] before:to-[#9514FA] before:rounded-full before:z-10'>
                                <img src="./images/user.png" alt="" />
                            </div>
                            <h1 className='font-bold text-2xl '>Create Account</h1>
                            <p className='text-[16px] text-[#627382] pb-16'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className='flex flex-col hover:scale-105 duration-200 shadow p-10 rounded-2xl bg-white'>
                        <span className='self-end bg-linear-500 from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 flex items-center justify-center text-white'>02</span>
                        <div className='space-y-4  flex items-center flex-col'>
                            <div className='relative  rounded-full p-4 bg-linear-500 before:absolute before:opacity-10 before:inset-0 before:bg-gradient-to-r before:from-[#4F39F6] before:to-[#9514FA] before:rounded-full before:z-10'>
                                <img src="./images/package.png" className='' alt="" />
                            </div>
                            <h1 className='font-bold text-2xl '>Choose Products</h1>
                            <p className='text-[16px] text-[#627382] pb-16 '>Browse our catalog and select the toolsthat fit your needs.</p>
                        </div>
                    </div>
                    <div className='flex flex-col hover:scale-105 duration-200 shadow p-10 rounded-2xl bg-white'>
                        <span className='self-end bg-linear-500 from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 flex items-center justify-center text-white'>03</span>
                        <div className='space-y-4 flex items-center flex-col'>
                            <div className='relative  rounded-full p-4 bg-linear-500 before:absolute before:opacity-10 before:inset-0 before:bg-gradient-to-r before:from-[#4F39F6] before:to-[#9514FA] before:rounded-full before:z-10'>
                                <img src="./images/rocket.png" alt="" />
                            </div>
                            <h1 className='font-bold text-2xl '>Start Creating</h1>
                            <p className='text-[16px] text-[#627382] pb-16 '>Start creating your projects with the tools you've selected.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetstartedStapes;