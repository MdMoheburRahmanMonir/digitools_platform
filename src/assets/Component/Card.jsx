import React, { useState } from 'react';
import CardItem from './CardItem';

const Card = ({ getData, selectedItems, setSelectedItems }) => {
    const [btnDisable, setBtnDisable] = useState(true);

    

    const data = getData.data;


    return (
        <div data-aos="fade-up" data-aos-delay={100} className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shadow p-5 rounded-3xl' >
            {
                data.map(i => <CardItem key={i.id} i={i} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />)
            }
        </div>

    );
};

export default Card;