import React from 'react';
import writing from '../Images/writing_2327400 1.png'
import { IoCheckmarkSharp } from "react-icons/io5";

const Digitaltoolsitem = () => {
    return (
        <div className='w-10/12 mx-auto py-[85px] space-y-10'>
            <header className='text-center space-y-4'>
                <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                <p className='text-[#627382] text-[16px]'>Choose from our curated collection of premium digital <br /> products designed to boost your productivity and creativity.</p>
                <div className='flex justify-center gap-4'>
                    <button className='cursor-pointer bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white py-3 px-8 rounded-full font-bold cursor-pointer'>Products</button>
                    <button className='flex gap-4 items-center rounded-full cursor-pointer  py-4 px-8  border border-2 border-blue-500 font-bold cursor-pointer' >Cart (0)</button>

                </div>
            </header>
            <main  >
                <div className='grid grid-cols-3 gap-6'>
                    <div className='p-6 shadow space-y-4 rounded-3xl'>
                        <div className='flex justify-between'>
                            <div className='border border-2 border-gray-300 rounded-full p-4'>
                                <img src={writing} alt="writing images" className='' />
                            </div>
                            <button className='btn rounded-full text-[#BB4D00] bg-[#FEF3C6]'>Best Seller</button>
                        </div>
                        <h1 className='font-bold text-[24px] '>Ai writing Pro</h1>
                        <p className='text-[#627382] text-[16px] '>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        <h3 className=''><span className='font-bold text-[24px]'>$<span>29</span></span>/mo</h3>
                        <div className=' '>
                            <p className='flex gap-2 items-center'><IoCheckmarkSharp className='text-green-500' /> Unlimited AI generations</p>
                            <p className='flex gap-2 items-center'><IoCheckmarkSharp className='text-green-500' /> 50+ writing templates</p>
                            <p className='flex gap-2 items-center'><IoCheckmarkSharp className='text-green-500' /> Grammar checker</p>
                        </div>
                        <button className='btn rounded-full bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white px-8 py-[15px] w-full' >Buy Now</button>
                    </div>
                    <div className='p-6 shadow space-y-4 rounded-3xl'>
                        <div className='flex justify-between'>
                            <div className='border border-2 border-gray-300 rounded-full p-4'>
                                <img src={writing} alt="writing images" className='' />
                            </div>
                            <button className='btn rounded-full text-[#BB4D00] bg-[#FEF3C6]'>Best Seller</button>
                        </div>
                        <h1 className='font-bold text-[24px] '>Ai writing Pro</h1>
                        <p className='text-[#627382] text-[16px] '>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        <h3 className=''><span className='font-bold text-[24px]'>$<span>29</span></span>/mo</h3>
                        <div className=' '>
                            <p className='flex gap-2 items-center'><IoCheckmarkSharp className='text-green-500' /> Unlimited AI generations</p>
                            <p className='flex gap-2 items-center'><IoCheckmarkSharp className='text-green-500' /> 50+ writing templates</p>
                            <p className='flex gap-2 items-center'><IoCheckmarkSharp className='text-green-500' /> Grammar checker</p>
                        </div>
                        <button className='btn rounded-full bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white px-8 py-[15px] w-full' >Buy Now</button>
                    </div>
                    <div className='p-6 shadow space-y-4 rounded-3xl'>
                        <div className='flex justify-between'>
                            <div className='border border-2 border-gray-300 rounded-full p-4'>
                                <img src={writing} alt="writing images" className='' />
                            </div>
                            <button className='btn rounded-full text-[#BB4D00] bg-[#FEF3C6]'>Best Seller</button>
                        </div>
                        <h1 className='font-bold text-[24px] '>Ai writing Pro</h1>
                        <p className='text-[#627382] text-[16px] '>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        <h3 className=''><span className='font-bold text-[24px]'>$<span>29</span></span>/mo</h3>
                        <div className=' '>
                            <p className='flex gap-2 items-center'><IoCheckmarkSharp className='text-green-500' /> Unlimited AI generations</p>
                            <p className='flex gap-2 items-center'><IoCheckmarkSharp className='text-green-500' /> 50+ writing templates</p>
                            <p className='flex gap-2 items-center'><IoCheckmarkSharp className='text-green-500' /> Grammar checker</p>
                        </div>
                        <button className='btn rounded-full bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white px-8 py-[15px] w-full' >Buy Now</button>
                    </div>
                </div>
                <div className='space-y-6'>
                    <h1 className='font-bold text-2xl w-full'>Your Cart</h1>
                    <div className='space-y-4'>
                        <div className='flex justify-between bg-[#F9FAFC] rounded-3xl p-6 items-center'>
                            <div className='flex gap-4 items-center'>
                                <div className='border border-2 border-gray-300 rounded-full p-4 bg-white'>
                                    <img src={writing} alt="" />
                                </div>
                                <div className=''>
                                    <h2 className='font-bold text-[20px]'>AI Writing Pro</h2>
                                    <p>$<span>29</span></p>
                                </div>
                            </div>
                            <button className='btn btn-error text-white rounded-full'>remove</button>
                        </div>
                        <div className='flex justify-between bg-[#F9FAFC] rounded-3xl p-6 items-center'>
                            <div className='flex gap-4 items-center'>
                                <div className='border border-2 border-gray-300 rounded-full p-4 bg-white'>
                                    <img src={writing} alt="" />
                                </div>
                                <div className=''>
                                    <h2 className='font-bold text-[20px]'>AI Writing Pro</h2>
                                    <p>$<span>29</span></p>
                                </div>
                            </div>
                            <button className='btn btn-error text-white rounded-full'>remove</button>
                        </div>

                    </div>
                    <div className='flex justify-between items-center py-4 px-3 rounded-2xl bg-[#F9FAFC]'>
                        <span className='text-[16px] text-[#627382]'>Total: <span>0</span></span>
                        <span className='text-[20px] font-bold'>$<span>0</span></span>
                    </div>
                    <button className='btn rounded-full bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white px-8 py-[20px] w-full' >Proceed to Checkout</button>

                </div>
            </main>
        </div>
    );
};

export default Digitaltoolsitem; 