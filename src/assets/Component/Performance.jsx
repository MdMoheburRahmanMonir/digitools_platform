import React from 'react';

const Performance = () => {
    return (

        <div className='w-full bg-linear-500 from-[#4F39F6] to-[#9514FA]'>
            <div className='w-10/12 mx-auto flex md:flex-row gap-5 flex-col items-center justify-around my-10 py-[60px] itecm text-white text-center'>
                <div>
                    <h1 className='text-[60px] font-bold'>50K+</h1>
                    <p className='text-lg text-[#FFFFFF]'>Active User </p>
                </div>
                <div>
                    <h1 className='text-[60px] font-bold'>200+</h1>
                    <p className='text-lg text-[#FFFFFF]'>Premium Tools </p>
                </div>
                <div>
                    <h1 className='text-[60px] font-bold'>4.9</h1>
                    <p className='text-lg text-[#FFFFFF]'>Rating </p>
                </div>
            </div>
        </div>
    );
};

export default Performance;