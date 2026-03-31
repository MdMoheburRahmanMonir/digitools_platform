import { IoCheckmarkSharp } from "react-icons/io5";
import { toast } from 'react-toastify';


const PricingSection = () => {
    return (
        <div className='w-full bg-white'>
            <div className='w-10/12 mx-auto flex flex-col gap-20 py-[120px] '>
                <div className='text-center space-y-4 mb-10'>
                    <h1 className='font-extrabold text-5xl text-[#101727]'>Simple, Transparent Pricing</h1>
                    <p className='text-[#627382] text-[16px] leading-[20px]'> Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between text-center items-center gap-10 flex-col md:flex-row px-10'>
                    <div className='flex flex-col hover:scale-105 duration-200 items-start shadow p- rounded-2xl bg-[#F9FAFC] space-y-6 p-6'>
                        <div className='space-y-2 flex items-start flex-col'>
                            <h1 className='text-2xl font-bold'>Starter</h1>
                            <p className='text-[#627382] text-[16px]'>Perfect for getting started</p>
                        </div>
                        <p className='text-[#627382] font-bold text-[20px]'><span className='text-black text-[40px] font-bold'>$9.99/</span>month</p>
                        <ul className='space-y-2 h-[200px]'>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> Access to 10 free tools</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> Basic templates</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> Community support</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> 1 project per month</li>
                        </ul>
                        <button onClick={()=> toast('😫Implementation ongoing!')}  className='btn rounded-full bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white px-8 py-[20px] w-full' >Get Started Free</button>
                    </div>
                    <div className='relative flex flex-col hover:scale-105 duration-200 items-start shadow p- rounded-2xl bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white space-y-6 p-6'>
                        <span className='absolute -top-5 left-1/2 -translate-x-1/2  bg-[#FEF3C6] text-[#BB4D00] px-6 py-2 rounded-full '>Most Popular</span>
                        <div className='space-y-2 flex items-start flex-col'>
                            <h1 className='text-2xl font-bold'>Pro</h1>
                            <p className='  text-[16px]'>Best for professionals</p>
                        </div>
                        <p className=' font-bold text-[20px]'><span className='  text-[40px] font-bold'>$29.99</span>/month</p>
                        <ul className='space-y-2 h-[200px]'>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500 font-bold text-white' /> Access to all premium tools</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500 font-bold text-white' /> Unlimited templates </li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500 font-bold text-white' /> Priority support</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500 font-bold text-white' /> Unlimited projects</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500 font-bold text-white' /> Cloud sync</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500 font-bold text-white' /> Advanced analytics</li>
                        </ul>
                        <div className='bg-white w-full rounded-full'>
                            <button onClick={()=> toast('🤩Implementation ongoing!')}  className='btn rounded-full bg-linear-500  bg-clip-text text-transparent from-[#4F39F6] to-[#9514FA] px-8 py-[20px] w-full' >Start Pro Trial</button>
                        </div>
                    </div>
                    <div className='flex flex-col hover:scale-105 duration-200 items-start shadow p- rounded-2xl bg-[#F9FAFC] space-y-6 p-6'>
                        <div className='space-y-2 flex items-start flex-col'>
                            <h1 className='text-2xl font-bold'>Enterprise</h1>
                            <p className='text-[#627382] text-[16px]'>For teams and businesses</p>
                        </div>
                        <p className='text-[#627382] font-bold text-[20px]'><span className='text-black text-[40px] font-bold'>$99</span>/month</p>
                        <ul className='space-y-2 h-[200px]'>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> Everything in Pro</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> Team collaboration</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> Custom integrations</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> Dedicated support</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> SLA guarantee</li>
                            <li className='flex items-center gap-2'><IoCheckmarkSharp className='text-green-500' /> Custom branding</li>
                        </ul>
                        <button onClick={()=> toast('😻Implementation ongoing!')}  className='btn rounded-full bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white px-8 py-[20px] w-full' >Get Started Free</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PricingSection;