import { use, useState } from 'react';
import Card from './Card';
import Selectedcardsection from './Selectedcardsection';

const Digitaltoolsitem = ({ mainData, selectedItems, setSelectedItems }) => {
    const [togolingBtn, setTogolingBtn] = useState('Products'); 

    const getData = use(mainData);

    return (
        <div className='w-10/12 mx-auto py-[85px] space-y-10'>
            <header className='text-center space-y-4'>
                <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                <p className='text-[#627382] text-[16px]'>Choose from our curated collection of premium digital <br /> products designed to boost your productivity and creativity.</p>
                <div className='flex justify-center gap-2 shadow-blue-300 shadow w-[280px] mx-auto rounded-full p-1'>
                    <button onClick={() => setTogolingBtn('Products')} className={`cursor-pointer hover:scale-105 duration-300 ${togolingBtn === 'Products' ? 'bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white' : 'bg-gray-200 text-gray-700'} py-3 px-8 rounded-full font-bold cursor-pointer`}>Products</button>
                    <button onClick={() => setTogolingBtn('Cart')} className={`cursor-pointer hover:scale-105 duration-300 ${togolingBtn === 'Cart' ? 'bg-linear-500 from-[#4F39F6] to-[#9514FA] text-white' : 'bg-gray-200 text-gray-700'} py-3 px-8 rounded-full font-bold cursor-pointer`}>Cart ({selectedItems.length})</button>
                </div>
            </header>
            <main>
                {
                    togolingBtn === 'Products'
                        ? <Card getData={getData} selectedItems={selectedItems} setSelectedItems={setSelectedItems}></Card>
                        : <Selectedcardsection selectedItems={selectedItems} setSelectedItems={setSelectedItems}></Selectedcardsection>
                }

            </main>
        </div>
    );
};

export default Digitaltoolsitem; 