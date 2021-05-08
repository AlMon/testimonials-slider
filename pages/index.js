import Head from 'next/head'

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
          <div className='mx-auto z-10'>
            <img
              src='/image-tanya.jpg'
              alt='Tanya'
              className='shadow-2xl z-20'
            />
            <div className='bg-white flex w-[110px] h-[60px] justify-between items-center px-[15px] rounded-full shadow-xl -mt-6 absolute ml-16'>
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
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
