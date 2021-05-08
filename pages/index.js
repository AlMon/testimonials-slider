import Head from 'next/head'
import { useState } from 'react'
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
    <div className='text-[#202046] text-[32px] relative w-full overflow-hidden'>
      <Head>
        <title>Bootcamp Testimonials Slider</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <img
        src='/pattern-quotes.svg'
        alt='Pattern Quotes'
        className='absolute lg:top-[12.5rem] lg:left-[265px] top-[47.5%] left-1/3 transform scale-50 lg:scale-100 z-0'
      />
      <img
        src='/pattern-curve.svg'
        alt='Pattern Curve'
        className='absolute bottom-0 left-0 z-0'
      />
      <img
        src='/pattern-bg.svg'
        alt='Pattern Curve'
        className='absolute lg:bottom-20 lg:right-10 transform z-0 lg:scale-100 scale-90'
      />

      <main className='min-h-screen container mx-auto flex lg:items-center'>
        {SliderData.map(({ image, quote, name, title }, index) => (
          <div key={index}>
            {index === current && (
              <div className='grid lg:grid-cols-2 grid-cols-1 lg:text-left text-center'>
                <img
                  src={image}
                  alt={name}
                  className='shadow-lg mx-auto z-10 lg:hidden my-10 max-w-[70%] lg:max-w-full'
                />
                <div className='lg:-mr-28 z-20 lg:pl-28'>
                  <h2 className='font-light lg:leading-[43px] lg:text-[32px] text-lg leading-6 px-8 lg:px-0 lg:mt-0 mt-10'>
                    {quote}
                  </h2>
                  <p className='lg:text-[20px] mt-7 font-bold text-[15px]'>
                    {name}{' '}
                    <span className='text-[#babacf] ml-1 font-medium block lg:inline'>
                      {title}
                    </span>
                  </p>
                </div>
                <img
                  src={image}
                  alt={name}
                  className='shadow-2xl mx-auto z-10 absolute right-44 bottom-32 hidden lg:block'
                />
              </div>
            )}
          </div>
        ))}
        {/* <SliderController /> */}
        <div className='scale-75 transform lg:scale-100 bg-white flex w-[110px] h-[60px] justify-between items-center px-[15px] rounded-full shadow-xl absolute z-20 lg:right-[475px] lg:bottom-24 right-1/3 top-[17rem] lg:top-auto'>
          <button onClick={prevSlide} aria-label='previous-slide'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='#8585AC'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <button onClick={nextSlide} aria-label='next-slide'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='#8585AC'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  )
}
