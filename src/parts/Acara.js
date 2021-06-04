import React from 'react'

function Acara() {
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Ananda Afwan 
            <br className="hidden sm:block"/>Putra dari Bapak dan Ibu
            </h1>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/2 flex">
               
                <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Yang diselenggarakan pada:</h2>
                <p className="leading-relaxed text-base"><span className="font-extrabold">Tanggal &emsp;: </span>Sabtu</p>
                <p className="leading-relaxed text-base"><span className="font-extrabold">Waktu &emsp;: </span>09.00 s.d. Selesai</p>
                <p className="leading-relaxed text-base"><span className="font-extrabold">Tempat &emsp;: </span>Jl. Bengawan Kota Bandung</p>
            </div>
            </div>
            <div className="p-4 md:w-1/2 flex">
                <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">*Keterangan waktu</h2>
                <p className="leading-relaxed text-base"><span className="font-extrabold">Sesi 1 &emsp;: </span>10.00 - 11.30</p>
                <p className="leading-relaxed text-base"><span className="font-extrabold">Sesi 2 &emsp;: </span>11.30 - 13.00</p>
                <p className="leading-relaxed text-base"><span className="font-extrabold">Sesi 3 &emsp;: </span>13.00 - 14.30</p>
            </div>
            </div>
            
            </div>
        </div>
        </section>
    )
}

export default Acara;
