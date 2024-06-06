import Logo from '@@/svgs/logo';
import { Activity, Bell, Download, Search, ShoppingBag, Users } from 'react-feather';
import SearchBox from './SearchBox';

export default function Header() {
  return (
    <header className='sticky inset-x-0 top-0 z-[48] flex w-full flex-wrap border-b bg-white py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4 lg:ps-64 dark:border-neutral-700 dark:bg-neutral-800'>
      <nav className='mx-auto flex w-full basis-full items-center px-4 sm:px-6' aria-label='Global'>
        <div className='me-5 lg:me-0 lg:hidden'>
          <a
            className='inline-block flex-none rounded-xl text-xl font-semibold focus:opacity-80 focus:outline-none'
            href='../templates/admin/index.html'
            aria-label='Preline'
          >
            <Logo />
          </a>
        </div>

        <div className='ms-auto flex w-full items-center justify-end sm:order-3 sm:justify-between sm:gap-x-3'>
          <div className='sm:hidden'>
            <button
              type='button'
              className='inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700'
            >
              <Search width={18} height={18} />
            </button>
          </div>

         <SearchBox/> 
          <div className='flex flex-row items-center justify-end gap-2'>
            <button
              type='button'
              className='inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700'
            >
              <Bell width={18} height={18} />
            </button>
            <button
              type='button'
              className='inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700'
              data-hs-offcanvas='#hs-offcanvas-right'
            >
              <Activity width={18} height={18} />
            </button>

            <div className='hs-dropdown relative inline-flex [--placement:bottom-right]'>
              <button
                id='hs-dropdown-with-header'
                type='button'
                className='inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700'
              >
                <img
                  className='inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800'
                  src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
                  alt='Image Description'
                />
              </button>

              <div
                className='hs-dropdown-menu duration hidden min-w-60 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:border dark:border-neutral-700 dark:bg-neutral-900'
                aria-labelledby='hs-dropdown-with-header'
              >
                <div className='-m-2 rounded-t-lg bg-gray-100 px-5 py-3 dark:bg-neutral-800'>
                  <p className='text-sm text-gray-500 dark:text-neutral-400'>Signed in as</p>
                  <p className='text-sm font-medium text-gray-800 dark:text-neutral-300'>
                    james@site.com
                  </p>
                </div>
                <div className='mt-2 py-2 first:pt-0 last:pb-0'>
                  <a
                    className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300'
                    href='#'
                  >
                    <Bell width={18} height={18} />
                    Newsletter
                  </a>
                  <a
                    className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300'
                    href='#'
                  >
                    <ShoppingBag width={18} height={18} />
                    Purchases
                  </a>
                  <a
                    className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300'
                    href='#'
                  >
                    <Download width={18} height={18} />
                    Downloads
                  </a>
                  <a
                    className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300'
                    href='#'
                  >
                    <Users width={18} height={18} />
                    Team Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
