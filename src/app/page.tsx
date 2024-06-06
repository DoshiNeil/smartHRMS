export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden before:absolute before:start-1/2 before:top-0 before:-z-[1] before:size-full before:-translate-x-1/2 before:transform before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-cover before:bg-top before:bg-no-repeat dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
      <div className='mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8'>
        <div className='flex justify-center'>
          <a
            className='inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-1 ps-3 text-sm text-gray-800 transition hover:border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-neutral-600'
            href='#'
          >
            PRO release - Join to waitlist
            <span className='inline-flex items-center justify-center gap-x-2 rounded-full bg-gray-200 px-2.5 py-1.5 text-sm font-semibold text-gray-600 dark:bg-neutral-700 dark:text-neutral-400'>
              <svg
                className='size-4 flex-shrink-0'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='m9 18 6-6-6-6' />
              </svg>
            </span>
          </a>
        </div>

        <div className='mx-auto mt-5 max-w-2xl text-center'>
          <h1 className='block text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl dark:text-neutral-200'>
            Smart
            <span className='bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent'>
              HRMS
            </span>
          </h1>
        </div>

        <div className='mx-auto mt-5 max-w-3xl text-center'>
          <p className='text-lg text-gray-600 dark:text-neutral-400'>
            A HRMS build with preline on next 14
          </p>
        </div>

        <div className='mt-8 flex justify-center gap-3'>
          <a
            className='inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-medium text-white hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:focus:ring-offset-gray-800'
            href='/authenticate/signin'
          >
            Sign in
            <svg
              className='size-4 flex-shrink-0'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='m9 18 6-6-6-6' />
            </svg>
          </a>
          <a
            className='inline-flex items-center gap-x-1.5 text-sm font-medium text-blue-600 decoration-2 hover:underline'
            href='#'
          >
            Product features
            <svg
              className='size-4 flex-shrink-0'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='m9 18 6-6-6-6' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
