import React, { useContext, useEffect, useState } from 'react'
import { selectPlanText } from '../constants'

import { Context } from './Hero';
import { Button } from './index';
function SelectPlan() {
    const [switcher, setSwitcher] = useState(false);
    const [click, setClick] = useState(true);
    const [calculate, setCalculate] = useState(0);

    const [number, setNumber] = useContext(Context);

    const [clickIndex, setClickIndex] = useState(() => {
        // Retrieve form data from local storage when the component mounts
        const storedClickIndex = localStorage.getItem('clickIndex')
        return storedClickIndex ? JSON.parse(storedClickIndex) : 0
    });


    useEffect(() => {
        // Save clickIndex to local storage whenever it changes
        localStorage.setItem('clickIndex', JSON.stringify(clickIndex));
    }, [clickIndex]);

    return (

        <form className={`flex ${switcher ? 'gap-2' : 'gap-[1.2rem]'} flex-col w-full sm:p-0 p-[1rem]`}>
            <div>
                <h2 className='header--hero'>{selectPlanText[0].heading}</h2>
                <p className='paragraph--hero'>{selectPlanText[0].paragraph}</p>
            </div>
            <div className='flex items-center justify-between gap-5 sm:flex-row flex-col'>
                {selectPlanText.map((item, index) => (
                    index != 0 && (
                        <div
                            onClick={() => { setClick(click), setClickIndex(index), setCalculate(switcher ? item.monthlyPay : item.yearlyPay) }}
                            key={index}
                            className={`sm:block flex gap-5 sm:w-[8rem] items-center w-full p-[1rem] border-[1px] border-gray-200 rounded-xl  cursor-pointer transition-all  ${(index == clickIndex && click) ? 'select--active' : 'select--active--hover'}`}>
                            <img src={item.icon} alt={item.title} title={item.title} />
                            <div className='flex flex-col'>
                                <div className='sm:mt-[2rem] mt-0' />
                                <h3 className='primary-100--text ubuntu--bold font-bold'>{item.text}</h3>
                                <span className='natural-100--text'>{`${!switcher ? '$' + item.monthlyPay + '/mo' : '$' + item.yearlyPay + '/yr'}`}</span>
                                {switcher && <h3 className='primary-100--text text-[.9em] ubuntu--bold font-bold '>{selectPlanText[0].yearlyGift}</h3>}
                            </div>
                        </div>)
                ))}
            </div>
            <div action='/' className='flex gap-5 w-full justify-center items-center bg-gray-100 rounded-lg py-[.5rem]'>
                <h2 className={`${!switcher ? ' primary-100--text' : 'natural-100--text  '} ubuntu--bold `}>Monthly</h2>
                <div className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        id="switch"
                        className="sr-only cursor-pointer"
                        checked={switcher}
                        onChange={() => setSwitcher(!switcher)}
                        onClick={() => setSwitcher(!switcher)}
                    />
                    <label
                        htmlFor="switch"
                        className={`relative inline-block w-10 h-6 rounded-full cursor-pointer primary-100--bg`}>
                        <span
                            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition transform ${switcher ? 'translate-x-4' : 'translate-x-0'}`} />
                    </label>
                </div>
                <h2 className={`${switcher ? ' primary-100--text' : 'natural-100--text  '} ubuntu--bold `}>Yearly</h2>

            </div>
            <Button />
        </form >
    )
}

export default SelectPlan
