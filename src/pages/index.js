import Head from 'next/head'
import Acara from 'src/parts/Acara'
import Awalan from 'src/parts/Awalan'
import CountDown from 'src/parts/CountDown'
import FooterA from 'src/parts/Footer'
import Hero from 'src/parts/Hero'
import Maps from 'src/parts/Maps'
import TerimaKasih from 'src/parts/TerimaKasih'
import ReactAudioPlayer from 'react-audio-player'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khitanan</title>
        <meta name="description" content="Khitanan" />
        <link rel="icon" href="/favicon.ico" />        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>

      <main>
      <div className="fixed left-0 top-0 h-16 w-16 z-50">
          <ReactAudioPlayer
            src="/files/backsound-instrumen.ogg"
            autoPlay
            controls
          />
        </div>
        <Hero></Hero>
        <Awalan></Awalan>
        <Acara></Acara>
        <TerimaKasih></TerimaKasih>
        <CountDown></CountDown>
        <Maps></Maps>
        <FooterA></FooterA>
      </main>

      
       
      
      

    </div>
  )
}
