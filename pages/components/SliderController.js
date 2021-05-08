function SliderController() {
  return (
    <div className='bg-white flex w-[110px] h-[60px] justify-between items-center px-[15px] rounded-full shadow-xl absolute z-20 right-[475px] bottom-24'>
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
  )
}

export default SliderController
