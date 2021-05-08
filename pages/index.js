import Head from 'next/head'
import { useState } from 'react'
import SliderController from '../components/SliderController'
import { SliderData } from '../services/SliderData'

export default function Home() {
  const [current, setCurrent] = useState(0)

  const length = SliderData.length

  console.log(current)

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div className='text-[#202046] text-[32px]'>
      <Head>
        <title>Bootcamp Testimonials Slider</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <img
        src='/pattern-quotes.svg'
        alt='Pattern Quotes'
        className='absolute top-52 left-[265px] z-0'
      />
      <img
        src='/pattern-curve.svg'
        alt='Pattern Curve'
        className='absolute bottom-0 left-0 z-0'
      />
      <img
        src='/pattern-bg.svg'
        alt='Pattern Curve'
        className='absolute bottom-20 right-10 z-0'
      />

      <main className='min-h-screen container mx-auto flex items-center'>
        {SliderData.map(({ image, quote, name, title }, index) => (
          <div key={index}>
            {index === current && (
              <div className='grid grid-cols-2'>
                <div className='mt-36 -mr-28 z-20 pl-28'>
                  <h2 className='font-light leading-[43px]'>{quote}</h2>
                  <p className='text-[20px] mt-7 font-bold'>
                    {name}{' '}
                    <span className='text-[#babacf] ml-1 font-medium'>
                      {title}
                    </span>
                  </p>
                </div>
                <img
                  src={image}
                  alt={name}
                  className='shadow-2xl mx-auto z-10'
                />
              </div>
            )}
          </div>
        ))}
        {/* <SliderController /> */}
        <div className='bg-white flex w-[110px] h-[60px] justify-between items-center px-[15px] rounded-full shadow-xl absolute z-20 right-[475px] bottom-24'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 cursor-pointer'
            fill='none'
            viewBox='0 0 24 24'
            stroke='#8585AC'
            onClick={prevSlide}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={3}
              d='M15 19l-7-7 7-7'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 cursor-pointer'
            fill='none'
            viewBox='0 0 24 24'
            stroke='#8585AC'
            onClick={nextSlide}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={3}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </div>
      </main>
    </div>
  )
}
