import React, { useContext, useEffect, useState } from 'react';
import { addOnsText } from '../constants';
import { checkmarkIcon } from '../assets/images';
import { Button } from "./index";
import { Context } from './Hero';
import { Link } from 'react-router-dom';

function AddOns() {

    let [summary1, setSummary1, summary, setSummary, switcher, setSwitcher, number, setNumber, submitEr, setSubmitEr] = useContext(Context);


    const [selectedItems, setSelectedItems] = useState(() => {
        const storedSelectedItems = localStorage.getItem('selectedItems')
        return storedSelectedItems ? JSON.parse(storedSelectedItems) : []
    });

    let summer = 0
    for (let i of selectedItems) {
        summer += !switcher ? addOnsText[i].monthlyPay : addOnsText[i].yearlyPay
    }

    useEffect(() => {
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
        setSummary1(summer)
    }, [selectedItems]);
    const handleItemClick = (index) => {
        const selectedIndex = selectedItems.indexOf(index);
        let newSelectedItems = [...selectedItems];

        if (selectedIndex === -1) {
            newSelectedItems.push(index);
        } else {
            newSelectedItems.splice(selectedIndex, 1);
        }

        setSelectedItems(newSelectedItems);
    };


    return (
        <div className='w-full sm:p-0 p-[1rem] sm:shadow-none shadow-md '>
            <div className='mt-2' />
            <form action="/" className='flex flex-col gap-5'>
                <div>
                    <h2 className='header--hero'>{addOnsText[0].heading}</h2>
                    <p className='paragraph--hero'>{addOnsText[0].paragraph}</p>
                </div>

                <div className='flex flex-col gap-[1rem] '>
                    {addOnsText.map((item, index) =>
                        (index >= 1 && index <= 3) && (
                            <div key={index}
                                onClick={() => handleItemClick(index)}
                                className={`justify-between flex items-center gap-[1rem] py-[.6rem] px-[1.2rem] cursor-pointer rounded-lg ${selectedItems.includes(index) ? 'select--active' : 'border-[1px] border-gray-300'} `}>
                                <div
                                    className={` relative z-[1] flex items-center justify-center ${selectedItems.includes(index) ? 'primary-200--bg' : 'bg-white border-2 border-slate-200'} p-[.6rem] rounded-[.2rem] border-1 w-[1.2rem]`}>
                                    {selectedItems.includes(index) && (

                                        <img className=" absolute z-[2] inline-block w-[1rem]" src={checkmarkIcon} alt="checkmark" title='checkmark' />
                                    )}
                                </div>
                                <div className='sm:w-[14rem] w-full text-start flex flex-col justify-start'>
                                    <h3 className='primary-100--text font-bold'>{item.heading}</h3>
                                    <p className='sm:text-[1em] text-[.8em] natural-100--text font-normal'>{item.paragraph}</p>
                                </div>
                                <div>
                                    <span className='font-bold text-[.8em] primary-200--text'>{`+$${!switcher ? item.monthlyPay : item.yearlyPay}/${!switcher ? 'mo' : 'ye'}`}</span>
                                </div>
                            </div>)
                    )}
                </div>
            </form >
            <Button />
        </div >
    );
}

export default AddOns;
