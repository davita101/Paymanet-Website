import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Hero'
import { Link } from 'react-router-dom'
import { sideBarText } from '../constants'

function Button(props) {
    let [summary1, setSummary1, summary, setSummary, switcher, setSwitcher, number, setNumber, submitEr, setSubmitEr] = useContext(Context)
    console.log(number)
    const [click, setClick] = useState(0)
    console.log(sideBarText[1].path)

    console.log(number)
    return (
        <div className='absolute bottom-[-2.5rem] w-full '>
            {/* DESKTOP */}
            <div className={`flex items-center w-full justify-between
             ${number == 0 ? ' justify-end' : ' justify-between '}
            sm:sticky fixed bottom-0 natural-500--bg p-[1rem] left-0 flex items-center w-full `}>
                {number != 0 && (
                    <Link to={sideBarText[number - 1].path}>
                        <button
                            type='submit'
                            onClick={() => setNumber(number - 1)}
                            className=' ubuntu--bold font-bold transition-all natural-200--text hover:text-blue-900 ' >Go Back</button>
                    </Link>)}
                {<div />}
                <Link onClick={() => submitEr ? setNumber(number + 1) : setNumber(0)}
                    to={submitEr ? (sideBarText[number + 1]?.path) : '/'}>
                    <button
                        type='submit'
                        onClick={() => setNumber(!submitEr ? number + 1 : 0)}
                        className=' next--btn' >{`${number < 3 ? 'Next Step' : 'Confirm'}`}</button>
                </Link>
            </div>

        </div>
    )
}

export default Button
