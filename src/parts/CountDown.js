import React from 'react'

function CountDown() {
    return (

<section className="max-w-screen-xl bg-green-500 dark:bg-gray-800 px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-20">
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl text-base leading-9 text-white sm:text-4xl sm:leading-10">
            Acara dimulai dalam
        </h2>        
    </div>
    <div className="mt-10 text-center sm:max-w-4xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
        <div>
            <p className="text-5xl font-extrabold leading-none text-white">
                24
            </p>
            <p className="mt-2 text-base font-medium leading-6 text-white">
                Days
            </p>
        </div>
        <div className="mt-10 sm:mt-0">
            <p className="text-5xl font-extrabold leading-none text-white">
                6
            </p>
            <p className="mt-2 text-base font-medium leading-6 text-white">
                Hours
            </p>
        </div>
        <div className="mt-10 sm:mt-0">
            <p className="text-5xl font-extrabold leading-none text-white">
                8
            </p>
            <p className="mt-2 text-base font-medium leading-6 text-white">
                Minutes
            </p>
        </div>
        <div className="mt-10 sm:mt-0">
            <p className="text-5xl font-extrabold leading-none text-white">
                24
            </p>
            <p className="mt-2 text-base font-medium leading-6 text-white">
                Second
            </p>
        </div>
    </div>    
</section>

    )
}

export default CountDown;
