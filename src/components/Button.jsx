import React, { useContext } from 'react'
import { Context } from './Hero'
import { Link } from 'react-router-dom'
import { sideBarText } from '../constants'

function Button(props) {
    let [number, setNumber, submitEr, setSubmitEr] = useContext(Context)
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
                <Link to={submitEr ? sideBarText[number + 1].path : '/'}>
                    <button
                        type='submit'
                        onClick={() => setNumber(submitEr ? number + 1 : 0)}
                        className=' next--btn' >Next Step</button>
                </Link>
            </div>

        </div>
    )
}

export default Button
