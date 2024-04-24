import React, { useContext } from 'react'
import { Context } from './Hero'
import { Link } from 'react-router-dom'
import { sideBarText } from '../constants'

function Button(props) {
    console.log(props.inputType)
    let [number, setNumber] = useContext(Context)
    return (
        <div>
            {/* DESKTOP */}
            <div className={`sm:flex hidden  mt-[4rem] items-center w-full justify-between ${number == 0 ? ' justify-end' : ' justify-between '}`}>
                {number != 0 && (<Link to={props.inputType == '' ? sideBarText[number].path : sideBarText[number - 1].path}>
                    <button type='submit' onClick={() => setNumber(number - 1)} className=' ubuntu--bold  text-gray-500 hover:primary-100--text ' >Go Back</button>
                </Link>)}
                {<div />}
                <Link to={sideBarText[number + 1].path}>
                    <button type='submit' onClick={() => setNumber(number + 1)} className=' next--btn' >Next Step</button>
                </Link>
            </div>
            {/* MOBILE */}
            <div className={`sm:hidden fixed bottom-0 natural-500--bg p-[1rem] left-0  mt-[4rem] flex items-center w-full ${number == 0 ? ' justify-end' : ' justify-between '}`}>
                {number != 0 && (<Link to={sideBarText[number - 1].path}>
                    <button type='submit' onClick={() => setNumber(number - 1)} className=' ubuntu--bold  text-gray-500 hover:primary-100--text ' >Go Back</button>
                </Link>)}
                <Link to={sideBarText[number + 1].path}>
                    <button type='submit' onClick={() => setNumber(number + 1)} className=' next--btn' >Next Step</button>
                </Link>
            </div>
        </div>
    )
}

export default Button
