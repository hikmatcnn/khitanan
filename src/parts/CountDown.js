import React from 'react'

function CountDown() {
    return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-5">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Acara dimulai dalam</h1>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-blue-400 px-4 py-6 rounded-lg">         
          <h2 className="title-font font-medium text-3xl text-gray-900">2</h2>
          <p className="leading-relaxed">Hari</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-blue-400 px-4 py-6 rounded-lg">          
          <h2 className="title-font font-medium text-3xl text-gray-900">1</h2>
          <p className="leading-relaxed">Jam</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-blue-400 px-4 py-6 rounded-lg">          
          <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
          <p className="leading-relaxed">Menit</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-blue-400 px-4 py-6 rounded-lg">
          <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
          <p className="leading-relaxed">Detik</p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default CountDown;
