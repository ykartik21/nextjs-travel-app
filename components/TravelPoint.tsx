import React from 'react'
import Title from './Title'
import Image from 'next/image'

const TravelPoint = () => {
  return (
    <section className='relative max-container padding-container py-20 flex xs:flex-col md:flex-row items-end'>

      {/* LEFT */}
      <div className='sm:w-[65%] xs:h-[500px] xs:w-full'>
         <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
      />
      </div>

      {/* RIGHT */}
      <div className='relative md:w-[35%] xs:w-full flex flex-col gap-12'>
        <Image className='absolute right-[-10%] lg:top-[50%] xl:top-[45%] xs:top-[45%]' src='/travelpoin-object.png' alt='object' width={80} height={80} />
        <div className='top flex flex-col gap-8'>
          <Title title='Travel Point' subtitle='We hepl you to see the real Inida' />
          <p className='text-lg opacity-50'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>   
        </div>
        <div className='bottom grid grid-cols-2 gap-8'>
          <TravelPointCard title='500+' subtitle='Holiday Package' />
          <TravelPointCard title='100' subtitle='Luxury Hotel' />
          <TravelPointCard title='7' subtitle='Premium Airlines' />
          <TravelPointCard title='2k+' subtitle='Happy Customer' />
        </div>
      </div>
    </section>
  )
}

interface TravelPointCardProps {
  title: string;
  subtitle: string;
}

const TravelPointCard = ({title, subtitle} : TravelPointCardProps) => {
  return (
    <div className='border py-6 px-4 rounded-3xl flexCenter flex-col gap-2 bg-white'>
      <h3 className='text_orange text-3xl font-bold'>{title}</h3>
      <p className='font-semibold text-center'>{subtitle}</p>
    </div>
  )
}

export default TravelPoint