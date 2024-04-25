import { advanceIcon, arcadeIcon, checkmarkIcon, proIcon, thankYouIcon } from "../assets/images"
export const sideBarText = [
    {
        index: 0,
        number: 1,
        step: 'step 1',
        heading: 'YOUR INFO',
        path: '/Payment-Website/'
    },
    {
        index: 1,
        number: 2,
        step: 'step 2',
        heading: 'SELECT PLAN',
        path: '/Payment-Website/selectPlans'
    },
    {
        index: 2,
        number: 3,
        step: 'step 3',
        heading: 'ADD-ONS',
        path: '/Payment-Website/addons'
    },
    {
        index: 3,
        number: 4,
        step: 'step 4',
        heading: 'SUMMARY',
        path: '/Payment-Website/summary'
    },
    {
        index: 3,
        number: 4,
        step: 'step 4',
        heading: 'SUMMARY',
        path: '/Payment-Website/confirm'
    }

]
export const yourInfoText = [
    {
        heading: "Personal info",
        paragraph: 'Please proved your name, email address and phone number.'
    },
    {
        type: 'name',
        name: 'name',
        label: 'Name',
        redLine: 'Enter Name',
        placeholder: 'e.g. Stephen King'
    },
    {
        type: 'email',
        name: 'email',
        label: 'Email Address',
        redLine: 'Enter full Email',
        placeholder: 'e.g. stephenking@lorem.com'
    },
    {
        type: 'number',
        name: 'number',
        label: 'Phone Number',
        redLine: 'Enter full Phone Number ',
        placeholder: 'e.g. +1 234 567 890'
    }
]

export const selectPlanText = [
    {
        heading: 'Select your plan',
        paragraph: 'You have the option of monthly or yearly billing',
        yearlyGift: '2 month free'
    },
    {
        index: 0,
        icon: arcadeIcon,
        text: 'Arcade',
        title: 'Arcade icon',
        monthlyPay: 9,
        path: '/',
        yearlyPay: 90
    },
    {
        index: 2,
        icon: advanceIcon,
        title: 'Advance icon',
        text: 'Advance',
        monthlyPay: 12,
        yearlyPay: 120
    },
    {
        index: 2,

        icon: proIcon,
        title: 'Pro icon',
        text: 'Pro',
        monthlyPay: 15,
        yearlyPay: 150
    }
]

export const addOnsText = [
    {
        heading: 'Pick add-ons',
        paragraph: 'Add-ons help enhance your gaming experience.',
    },
    {
        name: 'service',
        heading: 'Online service',
        paragraph: 'Access to multiplayer games',
        monthlyPay: 1,
        yearlyPay: 10,
    },
    {
        name: 'storage',
        heading: 'Larger storage',
        paragraph: 'Extra 1TB of cloud save',
        monthlyPay: 2,
        yearlyPay: 20,
    },
    {
        name: 'profile',
        heading: 'Customizable Profile',
        paragraph: 'Custom theme on your profile',
        monthlyPay: 3,
        yearlyPay: 30,
    },

]

export const summaryText = [
    {
        heading: 'Finishing up',
        paragraph: 'Double-check everything looks OK before confirming.',
    }
]
export const confirmText = [
    {
        icon: thankYouIcon,
        title: 'thankYou icon',
        heading: 'Thank you!',
        paragraph: `Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free 
        to email us at grdzelishvilidavti@gmail.com.`
    }

]