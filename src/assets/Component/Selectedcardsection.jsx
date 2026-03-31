 import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { toast } from 'react-toastify';


const Selectedcardsection = ({ selectedItems, setSelectedItems }) => {
    const removeSingleData = (id) => {
        const remainingData = selectedItems.filter(item => item.id !== id);
        setSelectedItems(remainingData);
        toast('🗑️ Item removed from cart! ');
    }




    const procideToCheckout = () => {
        setSelectedItems([]);
        toast('👽 All items removed from cart! ');
    }

    return (
        <div>
            <div className='space-y-6'>
                <div className=''>
                    <h1 className='font-bold text-2xl w-full'>Your Cart</h1>
                    {
                        selectedItems.length === 0
                            ? <div className='flex flex-col items-center justify-center py-16 w-full bg-[#F9FAFC] rounded-3xl py-16 text-center  text-[#627382] text-[20px] font-bold align-center shadow'>
                                <MdOutlineLocalGroceryStore className='text-7xl text-[#627382]' />
                                <p className='w-full py-2'>Your cart is empty. Please add some products to proceed.</p>
                            </div>
                            : <div>
                                <div className='space-y-4'>
                                    {
                                        selectedItems.map((item, index) => {
                                            const { title, price, img } = item;

                                            return (
                                                <div key={index} className='flex justify-between bg-[#F9FAFC] rounded-3xl p-6 items-center'>
                                                    <div className='flex gap-4 items-center'>
                                                        <div className='border border-2 border-gray-300 rounded-full p-4 bg-white'>
                                                            <img src={img} alt={title} />
                                                        </div>
                                                        <div className=''>
                                                            <h2 className='font-bold text-[20px]'>{title}</h2>
                                                            <p>$<span>{price}</span></p>
                                                        </div>
                                                    </div>
                                                    <button onClick={() => removeSingleData(item.id)} className='btn btn-error text-white rounded-full'>remove</button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='flex justify-between items-center py-4 px-3 rounded-2xl bg-[#F9FAFC]'>
                                    <span className='text-[16px] text-[#627382]'>Total: <span>{selectedItems.length}</span></span>
                                    <span className='text-[20px] font-bold'>$ <span>{selectedItems.reduce((total, item) => total + item.price, 0)}</span></span>
                                </div>
                                <button onClick={() => procideToCheckout()} className='btn rounded-full bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white px-8 py-[20px] w-full' >Proceed to Checkout</button>

                            </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Selectedcardsection;