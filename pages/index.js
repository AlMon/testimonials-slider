import Head from 'next/head'
import SliderController from './components/SliderController'

export default function Home() {
  return (
    <div className='text-[#202046] text-[32px]'>
      <Head>
        <title>Bootcamp Testimonials Slider</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <img
        src='/pattern-quotes.svg'
        alt='Pattern Quotes'
        className='absolute top-56 left-[265px] z-0'
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
        <div className='grid grid-cols-2'>
          <div className='mt-40 -mr-28 z-20 pl-28'>
            <h2 className='font-light leading-[43px]'>
              “ I’ve been interested in coding for a while but never taken the
              jump, until now. I couldn’t recommend this course enough. I’m now
              in the job of my dreams and so excited about the future. ”
            </h2>
            <p className='text-[20px] mt-7 font-bold'>
              Tanya Sinclair{' '}
              <span className='text-[#babacf] ml-1 font-medium'>
                UX Engineer
              </span>
            </p>
          </div>
          <img
            src='/image-tanya.jpg'
            alt='Tanya'
            className='shadow-2xl mx-auto z-10'
          />
        </div>
        <SliderController />
      </main>
    </div>
  )
}
