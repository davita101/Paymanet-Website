import React, { useContext, useEffect, useState } from 'react';
import { yourInfoText } from '../constants';
import { Context } from './Hero';
import { Button } from './index';

function YourInfo() {
    let [summary1, setSummary1, summary, setSummary, switcher, setSwitcher, number, setNumber, submitEr, setSubmitEr] = useContext(Context);

    const [formData, setFormData] = useState(() => {
        const savedFormData = localStorage.getItem('formData');
        return savedFormData ? JSON.parse(savedFormData) : {};
    });
    const handelChange = (e) => {
        const { name, value } = e.target;
        if (value.length < 30) {
            setFormData({ ...formData, [name]: value });
        }
    };

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
        const isCorrectForm = formData.name && (formData.email.includes('@') && formData.email.includes('gmail.com')) && formData.number
        setSubmitEr(isCorrectForm)
    }, [formData, setSubmitEr]);
    console.log(submitEr)
    return (
        <div className='sm:p-0 p-[1rem] sm:shadow-none shadow-md  w-full flex flex-col  justify-center'>
            <h1 className='header--hero'>{yourInfoText[0].heading}</h1>
            <p className='paragraph--hero'>{yourInfoText[0].paragraph}</p>
            <div className='mt-[1rem]' />
            <form className='flex flex-col gap-[.6rem]'>
                {yourInfoText.map((item, index) => (
                    index !== 0 && (
                        <div key={index}>
                            <div className='flex justify-between '>
                                <label
                                    className='primary-100--text font-bold text-[.8em]' htmlFor={item.name}>
                                    {item.label}
                                </label>
                                {(item.type == 'email' ? (!formData['email'].includes('@') || !formData.email.includes('gmail.com')) && formData['email'].length > 0 : !formData[item.type] > 0)
                                    && (
                                        <label
                                            className='primary-600--text font-bold text-[.8em] ' htmlFor={`red${item.name}`}>
                                            {item.redLine}
                                        </label>
                                    )}
                            </div>
                            <div className='my-[.2rem]' />
                            <input
                                className=' active: border primary-100--text border-1 hover:border-purple-500 cursor-pointer border-gray-300 w-full p-[.5rem] rounded-lg header--hero--bold'
                                onChange={handelChange}
                                type={item.type}
                                name={item.name}
                                value={formData[item.name] || ''}
                                maxLength={30}
                                placeholder={item.placeholder}
                                id={`y${item.name}`}
                                autoComplete='off'
                                required
                            />
                            <div className='my-[.5rem]' />
                        </div>
                    )
                ))}

                <Button />
            </form>
        </div>
    );
}

export default YourInfo;
