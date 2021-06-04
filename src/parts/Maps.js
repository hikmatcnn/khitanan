import React from 'react'

function Maps() {
    return (
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <div dangerouslySetInnerHTML={{ __html: " <iframe className='absolute inset-0' style='filter: grayscale(1) contrast(1.2) opacity(0.4);' title='map' marginheight='0' marginwidth='0' scrolling='no' src='https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed' width='100%' height='100%' frameborder='0'></iframe>"}} />
     
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Informasi Protokol Kesehatan</h2>
      <ul>
        <li className="leading-relaxed mb-5 text-gray-600">
          - Menggunakan Masker Selama Acara 
        </li>
        <li className="leading-relaxed mb-5 text-gray-600">
          - Mencuci Tangan Sebelum dan Sesudah Memasuki Acara 
        </li>
        <li className="leading-relaxed mb-5 text-gray-600">
          - Menjaga Jarak Satu Sama Lain 
        </li>
      </ul>
      
      
      <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Reservasi</button>
      
    </div>
  </div>
</section>
    )
}

export default Maps;
