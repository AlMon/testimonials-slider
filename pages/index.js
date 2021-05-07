import Head from 'next/head'

export default function Home() {
  return (
    <div className='text-[#202046] text-[32px]'>
      <Head>
        <title>Bootcamp Testimonials Slider</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className='min-h-screen bg-black relative'>
        <div className='flex flex-wrap'>
          <h2 className='font-light'>
            “ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”
          </h2>
          <img src='/image-tanya.jpg' alt='Tanya' />
        </div>
      </main>
    </div>
  )
}
