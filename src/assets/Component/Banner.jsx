import img from '../Images/banner.png'
import { VscCircleLargeFilled } from "react-icons/vsc";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto flex gap-20 py-[85px] md:flex-row flex-col justify-between '>
            <div className='my-auto space-y-4'>
                <div className='bg-[#E1E7FF] rounded-full w-fit  '>
                    <p className='flex items-center gap-1 bg-[#E1E7FF] rounded-full p-2 text-[16px] bg-linear-500 from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'><VscCircleLargeFilled className='bg-linear-60 from-blue-300 to-purple-300 text-[12px] border border-2 border-blue-100  text-blue-400 rounded-full' /> New: AI-Powered Tools Available</p>
                </div>
                <h1 className='text-7xl font-bold leading-[80px]'>Supercharge  Your <br />Digital Workflow</h1>
                <p className='text-[18px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products
                </p>
                <div className='flex gap-3'>
                    <button className='text-white bg-linear-500 from-[#4F39F6] to-[#9514FA] p-4 rounded-full font-bold'>Explore Products</button>
                    <button className='flex items-center gap-1 border border-2 border-blue-500 rounded-full p-4 font-bold bg-linear-500 from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'><IoPlayOutline className='text-blue-600 font-bold'/> Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={img} alt="Hero" />
            </div>
        </div>
    );
};

export default Banner;