import React, { useState } from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import { toast } from 'react-toastify';


const Navitem = ({ i, selectedItems, setSelectedItems }) => {
    const [btnDisable, setBtnDisable] = useState(false);
    const hendebtn = (i, value, price) => {
        setSelectedItems([...selectedItems, i]); 
        setBtnDisable(value);
        toast(`📈 Item added to cart! & Price is:💵 $${price}`);
    }
    const { id, title, description, img, price, badge, features, button_text } = i;
    return (
        <div key={id} className='p-6 shadow space-y-4 rounded-3xl hover:scale-105 duration-300'>
            <div className='flex justify-between'>
                <div className='border border-2 border-gray-300 rounded-full p-4'>
                    <img src={img} alt={title} className='' />
                </div>
                <button className={`btn rounded-full ${badge === 'Best Seller' ? 'bg-[#FEF3C6] text-[#BB4D00]' : badge === 'Popular' ? 'bg-[#E1E7FF] text-[#4F39F6]' : 'bg-[#D1FAE5] text-[#047857]'}`}>{badge}</button>
            </div>
            <h1 className='font-bold text-[24px] '>{title}</h1>
            <p className='text-[#627382] text-[16px] '>{description}</p>
            <h3 className=''><span className='font-bold text-[24px]'>$<span>{price}</span></span>/mo</h3>
            <div className=' '>
                {
                    features.map((feature, index) => {
                        return (
                            <p key={index} className='flex gap-2 items-center'><IoCheckmarkSharp className='text-green-500' /> {feature}</p>
                        )
                    })
                }
            </div>
            <button
                className='btn rounded-full bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white px-8 py-[15px] w-full hover:scale-x-105 duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed'
                onClick={() => hendebtn(i, true, price)}
                disabled={btnDisable}
            >
                {btnDisable ? `Added to Cart ` : button_text}
            </button> 
        </div>
    )
};

export default Navitem;