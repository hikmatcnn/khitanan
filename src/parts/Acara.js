import React from 'react'
import IconCalendar from 'public/images/icon-calendar.svg'
import IconMaps from 'public/images/icon-maps.svg'
import IconTimes from 'public/images/icon-time.svg'
import Image from 'next/image'

function Acara() {
    return (
      <section className="text-gray-600 body-font bg-indigo-900">
        <div className="trapesium-white">
  <div className="container px-5 py-24 mx-auto">
  <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">WIRAADHITAMA NISMARA SOEMANTRI</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">PUTRA KETIGA DARI <br/> BPK. HENDRA KUSUMA SOEMANTRI & IBU ARTIKA RAHMASARI</p>
    </div>
    <div className="flex md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center md:pl-8"><span>Acara</span> diselenggarakan pada :
      </h2>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <IconCalendar className="text-indigo-500 w-8 h-8 flex-shrink-0 mr-4"/>
          <span className="title-font font-medium">Sabtu, 26 Juni 2021</span>
        </div>
      </div>     
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <IconMaps className="text-indigo-500 w-8 h-8 flex-shrink-0 mr-4"/>
          <span className="title-font font-medium">Jl. Bengawan No 17 Bandung</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <IconTimes className="text-indigo-500 w-8 h-8 flex-shrink-0 mr-4"/>
          <span className="title-font font-medium">Sesi Pertama (10.00 - 11.30)</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <IconTimes className="text-indigo-500 w-8 h-8 flex-shrink-0 mr-4"/>         
          <span className="title-font font-medium">Sesi Kedua (11.30 - 13.00)</span>
        </div>
      </div>

      
    </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-5 text-center">
      <Image src="/images/wiraadhitama.png" alt="anak_muslim" width="362" height="450" />
    </div>
  </div>    
  </div>
  </div>
</section>
        
    )
}

export default Acara;
