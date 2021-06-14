import React from 'react'
import IconChecked from 'public/images/icon-checked.svg'

function Maps() {
    return (
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
  <div className="lg:w-2/3 md:w-1/2 h-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10">
      <div className="h-full" dangerouslySetInnerHTML={{ __html: "<iframe className='absolute inset-0' style='filter: grayscale(1) contrast(1.2) opacity(0.4);' title='map' marginheight='0' marginwidth='0' scrolling='no' src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=jl.%20bengawan%20no.17&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed' width='100%' height='100%' frameborder='0'></iframe>"}} />
      {/* <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md"> flex items-end justify-start relative */}
        {/* <div className="lg:w-full px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Jl. Bengawan No.17, Cihapit Kota Bandung</p>
          <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Arahkan ke lokasi</button>
        </div> */}
        {/* <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          
        </div> */}
      {/* </div> */}
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Informasi Protokol Kesehatan</h2>
      <ul>
        <li className="leading-relaxed mb-3 text-gray-600 flex items-center">
        <IconChecked className="text-indigo-500 w-4 h-4"/>&emsp; Menggunakan Masker Selama Acara 
        </li>
        <li className="leading-relaxed mb-3 text-gray-600 flex">
        <IconChecked className="text-indigo-500 w-4 h-4 "/>&emsp; Mencuci Tangan Sebelum dan Sesudah Memasuki Acara 
        </li>
        <li className="leading-relaxed mb-5 text-gray-600 flex">
        <IconChecked className="text-indigo-500 w-4 h-4 mr-1"/>&emsp; Menjaga Jarak Satu Sama Lain 
        </li>
      </ul>
      <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-3xl text-lg mb-2">Reservasi</button>
      <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-3xl text-lg"><a href="https://www.google.com/maps/dir/?api=1&destination=jl.%20bengawan%20no.17&dir_action=navigate">Arahkan Ke Lokasi</a></button>
      
    </div>
  </div>
</section>
    )
}

export default Maps;
