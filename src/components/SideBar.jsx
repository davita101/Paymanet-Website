import React, { useContext, useEffect, useState } from 'react'
import { sideBarText } from '../constants'
import { bgSlideBarDesktop, bgSlideBarMobile } from '../assets/images'
import { Link } from 'react-router-dom'

import { Context } from './Hero'
function SideBar() {
    let [number, setNumber] = useContext(Context)
    const [hover, setHover] = useState(true)
    const [numberHover, setNumberHover] = useState(null)
    return (
        <div className='relative flex flex-col sm:items-start items-center gap-[1rem] sm:w-[auto] w-[100vw] sm:h-[27rem] p-[1.5rem] '>
            <div className='w-[10rem]'>
                <img className='top-0  left-0 absolute sm:block hidden z-[1] ' src={bgSlideBarDesktop} alt="Sidebar Desktop" title='Sidebar Desktop' />
                <img className='absolute left-0 top-[-1rem] w-[100%] sm:hidden block' src={bgSlideBarMobile} alt="Sidebar Mobile" title='Sidebar Mobile' />
            </div>
            {/* DESKTOP */}
            {sideBarText.map((item, index) => (
                <Link className='sm:flex hidden ' key={index} to={item.path}>
                    <div onMouseOver={() => { setHover(true), setNumberHover(index) }} onMouseLeave={() => setHover(false)} onClick={() => setNumber(index)} className='relative z-[2] sm:flex hidden transitions-all  items-center gap-[1.5rem] cursor-pointer'>
                        <div className={` main--border w-7 h-7 cursor-pointer text-[.7em] cursor- flex justify-center items-center rounded-full transition-all ${(numberHover == index && hover) && 'active'} ${number == index ? 'active' : 'active-hover natural-500--text'}`}>
                            <span >{item.number}</span>
                        </div>
                        <div>
                            <h3 className=' uppercase natural-200--text text-[.8em]'>{item.step}</h3>
                            <h2 className='ubuntu--bold natural-500--text text-[.8em]'>{item.heading}</h2>
                        </div>
                    </div>
                </Link>

            ))}
            {/* MOBILE */}
            <div className='flex sm'>
                {sideBarText.map((item, index) => (
                    <Link className='' key={index} to={item.path}>
                        <div onMouseOver={() => { setHover(true), setNumberHover(index) }} onMouseLeave={() => setHover(false)} onClick={() => setNumber(index)} key={index} className='
                    sm:hidden relative transitions-all pl-[1.5rem] flex items-center justify-center gap-[1.5rem] cursor-pointer'>
                            <div className={` main--border w-7 h-7 cursor-pointer text-[.7em] cursor- flex justify-center items-center rounded-full transition-all ${(numberHover == index && hover) && 'active'} ${number == index ? 'active' : 'active-hover natural-500--text'}`}>
                                <span >{item.number}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default SideBar  
