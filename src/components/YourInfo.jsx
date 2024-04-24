import React, { useContext, useState } from 'react';
import { yourInfoText } from '../constants';
import { Link } from 'react-router-dom';

import { Context } from './Hero';

function YourInfo() {

    let [number, setNumber] = useContext(Context)
    return (
        <div className='sm:p-0 p-[1rem] w-full flex flex-col'>
            <h2 className='header--hero'>{yourInfoText[0].heading}</h2>
            <p className='paragraph--hero'>{yourInfoText[0].paragraph}</p>
            <div className='mt-[1rem]' />
            <form action="/">
                {yourInfoText.map((item, index) => (
                    index != 0 && (<div key={index}>
                        <label htmlFor={item.name}>{item.label}</label>
                        <div className='my-[.2rem]' />
                        <input className='border border-gray-300 w-full p-[.5rem] rounded-lg' type={item.type} name={item.name} placeholder={item.placeholder} id={`y${item.name} 
                            `} />
                        <div className='my-[.5rem]' />
                    </div>)
                ))}
            </form>
            <div className='mt-[4rem] flex justify-between'>
                <div />
                <Link to='/selectPlans'>
                    <button onClick={() => setNumber(number + 1)} className='value next--btn' >Next Step</button>
                </Link>
            </div>
        </ div>
    );
}

export default YourInfo;
