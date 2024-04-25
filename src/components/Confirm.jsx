import React from 'react'
import { confirmText } from '../constants'

function Confirm() {
    return (
        <div className='flex flex-col items-center justify-center gap-5 p-[1rem] h-[25rem] sm:shadow-none shadow-md '>
            <img className='w-12' src={confirmText[0].icon} alt={confirmText[0].title} title={confirmText[0].title} />
            <h1 className='header--hero'>{confirmText[0].heading}</h1>
            <p className='paragraph--hero text-center'>{confirmText[0].paragraph}</p>
        </div>
    )
}

export default Confirm
