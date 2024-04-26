import React, { useEffect, useState } from 'react'
import { SideBar, AddOns, SelectPlan, Summary, YourInfo, Confirm } from '.'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { sideBarText } from '../constants'
export const Context = React.createContext()
function Hero() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/Payment-Website/')
    }, [])

    let [number, setNumber] = useState(0)
    let [submitEr, setSubmitEr] = useState(false)
    const [switcher, setSwitcher] = useState(false);


    const [summary, setSummary] = useState(() => {
        const storedSummary = localStorage.getItem('summary')
        return storedSummary ? JSON.parse(storedSummary) : 0
    });

    const [summary1, setSummary1] = useState(() => {
        const storedSummary1 = localStorage.getItem('summary1')
        return storedSummary1 ? JSON.parse(storedSummary1) : 0
    });


    useEffect(() => {

        localStorage.setItem('summary', JSON.stringify(summary));
        localStorage.setItem('summary1', JSON.stringify(summary1));
        if (number == 4) {
            setNumber(3)
        }
    }, [setSummary, setSummary1, number]);

    console.log(summary, summary1)
    return (
        <Context.Provider value={[summary1, setSummary1, summary, setSummary, switcher, setSwitcher, number, setNumber, submitEr, setSubmitEr]}>
            <div className={`hover:opacity-[1] transition-all flex sm:flex-row sm:b flex-col sm:justify-center items-center sm:w-[auto] w-[100vw] sm:h-[auto]  h-[100vh] rounded-xl md:gap-[4rem] sm:gap-[2rem] gap-0 sm:bg-white natural-300--bg p-[1rem]   sm:p-[1rem]`}>
                <SideBar />
                <div className='relative natural-500--bg sm:h-[24rem] h-[auto] sm:w-[25rem] w-full rounded-xl flex justify-center items-center sm:pb-[4rem] p-0'>
                    <Routes>
                        <Route path='/Payment-Website/' exeat element={<YourInfo />} />
                        <Route path='/Payment-Website/selectPlans' element={<SelectPlan />} />
                        <Route path='/Payment-Website/addons' element={<AddOns />} />
                        <Route path='/Payment-Website/summary' element={<Summary />} />
                        <Route path='/Payment-Website/confirm' element={<Confirm />} />
                    </Routes>
                </div>

            </div>
        </Context.Provider>
    )
}

export default Hero
