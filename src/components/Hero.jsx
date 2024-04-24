import React, { useState } from 'react'
import { SideBar, AddOns, SelectPlan, Summary, YourInfo } from '.'
import { Route, Routes } from 'react-router'

export const Context = React.createContext()

function Container() {

    const [number, setNumber] = useState(0)

    return (
        <Context.Provider value={[number, setNumber]}>
            <div className='flex sm:flex-row flex-col sm:justify-center items-center sm:w-[auto] w-[100vw] sm:h-[auto] h-[100vh] rounded-xl sm:gap-[4rem] gap-0 natural-500--bg p-[1rem]'>
                <SideBar />
                <div className='relative natural-500--bg sm:w-[auto] w-full rounded-xl flex justify-center items-center'>
                    <Routes>
                        <Route path='/' exeat element={<YourInfo />} />
                        <Route path='/selectPlans' element={<SelectPlan />} />
                        <Route path='/addons' element={<AddOns />} />
                        <Route path='/summary' element={<Summary />} />
                    </Routes>
                </div>
            </div>
        </Context.Provider>
    )
}

export default Container
