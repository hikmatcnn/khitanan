import React, { useState, useEffect } from 'react';
import Image from 'next/image'

function Hero() {
    return (
        <section className="text-gray-200 body-font bg-warmGray-50">
            <div className="trapesium-indigo-500">
        <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
            <Image src="/images/anak_muslim.png" className="lg:w-2/6 md:w-3/6 sm:w-1/4 h-auto sm:h-1/4 object-cover object-center rounded" alt="anak_muslim" width="500" height="500" />
            <div className="text-center lg:w-2/3 w-full">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out" data-aos-delay="200">Tasyakur <span className="text-white" data-aos="zoom-y-out" data-aos-delay="300">Khitan</span></h1>            
            </div>
        </div>
        </div>
        </section>
    )
}

export default Hero;
