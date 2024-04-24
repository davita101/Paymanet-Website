import React, { useContext, useState } from 'react'
import { selectPlanText } from '../constants'

import { Context } from './Hero';
import { Link } from 'react-router-dom';
function SelectPlan() {
    const [switcher, setSwitcher] = useState(true)
    const [click, setClick] = useState(true)
    const [clickIndex, setClickIndex] = useState(0)
    const [calculate, setCalculate] = useState(0)

    let [number, setNumber] = useContext(Context)
    return (
        <div className='flex gap-5 flex-col w-full sm:p-0 p-[1rem]'>
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
                            className={`flex gap-5 sm:w-[8rem] items-center w-full p-[1rem] border-[1px] border-gray-200 rounded-xl  cursor-pointer transition-all  ${(index == clickIndex && click) ? 'select--active' : 'select--active--hover'}`}>
                            <img src={item.icon} alt={item.title} title={item.title} />
                            <div className='flex flex-col'>
                                <div className='sm:mt-[2rem] mt-0' />
                                <h3 className='primary-100--text ubuntu--bold font-bold'>{item.text}</h3>
                                <span className='natural-100--text'>{`${switcher ? '$' + item.monthlyPay + '/mo' : '$' + item.yearlyPay + '/yr'}`}</span>
                                {switcher && <h3 className='primary-100--text text-[.9em] ubuntu--bold font-bold '>{selectPlanText[0].yearlyGift}</h3>}
                            </div>
                        </div>)
                ))}
            </div>
            <div className='flex gap-5 w-full justify-center items-center bg-gray-100 rounded-lg py-[.5rem]'>
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
            <div className=' mt-[4rem] flex items-center w-full justify-between'>
                <Link to='/'>
                    <button onClick={() => setNumber(number - 1)} className=' ubuntu--bold  text-gray-500 hover:primary-100--text ' >Go Back</button>
                </Link>
                <Link to='/addons'>
                    <button onClick={() => setNumber(number + 1)} className=' next--btn' >Next Step</button>
                </Link>

            </div>
        </div >
    )
}

export default SelectPlan
