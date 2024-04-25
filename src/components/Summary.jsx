import React, { useContext } from 'react'
import { addOnsText, selectPlanText, summaryText } from '../constants'
import { Context } from './Hero';
import Button from './Button';
import { Link } from 'react-router-dom';

function Summary() {
    let [summary1, setSummary1, summary, setSummary, switcher, setSwitcher, number, setNumber, submitEr, setSubmitEr] = useContext(Context);
    return (
        <div className=' w-full sm:p-[0] p-[1rem] sm:shadow-none shadow-md '>
            <div className='flex flex-col w-full gap-[2.5rem]'>
                <div>
                    <h2 className='header--hero'>{summaryText[0].heading}</h2>
                    <p className='paragraph--hero'>{summaryText[0].paragraph}</p>
                </div>
                <div className='flex justify-between  natural-300--bg'>
                    {selectPlanText.map((item, index) => (
                        index < ((item.monthlyPay == summary || item.yearlyPay == summary) && item.index + 3) && (<div key={index} className='flex w-full flex-col gap-[2rem] justify-between p-[1rem]'>
                            <div className='flex justify-between items-center'>
                                <div >
                                    {(item.monthlyPay == summary || item.yearlyPay == summary) &&
                                        (<h2 className='primary-100--text font-bold'>
                                            {`${(item.monthlyPay == summary || item.yearlyPay == summary) && item.text} (${!switcher ? 'monthly' : 'yearly'})`}
                                        </h2>)}
                                    <Link to='/addons' onClick={() => setNumber(1)} className='underline text-[.8em] natural-100--text'>Change</Link>

                                </div>
                                {(<h3 className='font-bold primary-100--text'>
                                    {`+$${summary || 0}/${switcher ? 'yr' : 'mo'}`}
                                </h3>)}
                            </div>

                            < div className='h-[1px] w-full bg-black' />
                            {addOnsText.map((item, index) => (
                                (item.monthlyPay == summary || item.yearlyPay == summary) && (<div key={index}>
                                    {(<h2>{item.heading}</h2>)}
                                </div>)
                            ))}
                        </div>)
                    ))}
                </div>
                <div className='flex justify-between items-center p-[1rem]'>
                    <p className='text-[.8em] natural-100--text'>{`Total (per ${switcher ? 'year' : 'month'})`}</p>
                    <h3 className='primary-200--text font-bold'>{`+$ ${summary + summary1 || 0}/${switcher ? 'yr' : 'mo'}`}</h3>
                </div>
            </div>
            <Button className=' absolute' />
        </div>
    )
}

export default Summary
