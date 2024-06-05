import AccordionToggleIcon from '@@/components/AccordionToggleIcon/AccordionToggleIcon';
import Logo from '@@/svgs/logo';
import {
  Activity,
  Bell,
  BookOpen,
  Briefcase,
  Calendar,
  ChevronRight,
  ChevronsRight,
  Download,
  Home,
  Search,
  ShoppingBag,
  User,
  Users,
} from 'react-feather';
export default function page() {
  return (
    <div>
      <header className='sticky inset-x-0 top-0 z-[48] flex w-full flex-wrap border-b bg-white py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4 lg:ps-64 dark:border-neutral-700 dark:bg-neutral-800'>
        <nav
          className='mx-auto flex w-full basis-full items-center px-4 sm:px-6'
          aria-label='Global'
        >
          <div className='me-5 lg:me-0 lg:hidden'>
            <a
              className='inline-block flex-none rounded-xl text-xl font-semibold focus:opacity-80 focus:outline-none'
              href='../templates/admin/index.html'
              aria-label='Preline'
            ></a>
            <Logo />
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

            <div className='hidden sm:block'>
              <label htmlFor='icon' className='sr-only'>
                Search
              </label>
              <div className='relative min-w-72 md:min-w-80'>
                <div className='pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4'>
                  <Search width={18} height={18} color='grey' />
                </div>
                <input
                  type='text'
                  id='icon'
                  name='icon'
                  className='block w-full rounded-lg border-gray-200 px-4 py-2 ps-11 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
                  placeholder='Search'
                />
              </div>
            </div>

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
      <div className='sticky inset-x-0 top-0 z-20 border-y bg-white px-4 sm:px-6 md:px-8 lg:hidden dark:border-neutral-700 dark:bg-neutral-800'>
        <div className='flex items-center justify-between py-2'>
          <ol className='ms-3 flex items-center whitespace-nowrap'>
            <li className='flex items-center text-sm text-gray-800 dark:text-neutral-400'>
              Home
              <div className='px-2'>
                <ChevronRight strokeWidth={2} width={18} height={18} color='grey' />
              </div>
            </li>
            <li
              className='truncate text-sm font-semibold text-gray-800 dark:text-neutral-400'
              aria-current='page'
            >
              Dashboard
            </li>
          </ol>
          <button
            type='button'
            className='flex items-center justify-center gap-x-1.5 rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-500 hover:text-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
            data-hs-overlay='#application-sidebar'
            aria-controls='application-sidebar'
            aria-label='Sidebar'
          >
            <ChevronsRight width={18} height={18} color='grey' />
            <span className='sr-only'>Sidebar</span>
          </button>
        </div>
      </div>
      <div
        id='application-sidebar'
        className='hs-overlay fixed inset-y-0 start-0 z-[60] hidden w-[260px] -translate-x-full transform border-e border-gray-200 bg-white transition-all duration-300 [--auto-close:lg] hs-overlay-open:translate-x-0 lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 dark:border-neutral-700 dark:bg-neutral-800'
      >
        <div className='px-8 pt-4'>
          <a
            className='inline-block flex-none rounded-xl text-xl font-semibold focus:opacity-80 focus:outline-none'
            href='../templates/admin/index.html'
            aria-label='Preline'
          >
            <Logo />
          </a>
        </div>

        <nav
          className='hs-accordion-group flex w-full flex-col flex-wrap p-6'
          data-hs-accordion-always-open
        >
          <ul className='space-y-1.5'>
            <li>
              <a
                className='flex items-center gap-x-3.5 rounded-lg bg-gray-100 px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-neutral-700 dark:text-white'
                href='#'
              >
                <Home width={18} height={18} />
                Dashboard
              </a>
            </li>

            <li className='hs-accordion' id='users-accordion'>
              <button
                type='button'
                className='hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-neutral-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white'
              >
                <Users width={18} height={18} />
                Users
                <AccordionToggleIcon />
              </button>

              <div
                id='users-accordion-child'
                className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
              >
                <ul className='hs-accordion-group ps-3 pt-2' data-hs-accordion-always-open>
                  <li className='hs-accordion' id='users-accordion-sub-1'>
                    <button
                      type='button'
                      className='hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-neutral-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white'
                    >
                      Sub Menu 1
                      <AccordionToggleIcon />
                    </button>

                    <div
                      id='users-accordion-sub-1-child'
                      className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                    >
                      <ul className='ps-2 pt-2'>
                        <li>
                          <a
                            className='flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300'
                            href='#'
                          >
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a
                            className='flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300'
                            href='#'
                          >
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a
                            className='flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300'
                            href='#'
                          >
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className='hs-accordion' id='users-accordion-sub-2'>
                    <button
                      type='button'
                      className='hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-neutral-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white'
                    >
                      Sub Menu 2
                      <AccordionToggleIcon />
                    </button>

                    <div
                      id='users-accordion-sub-2-child'
                      className='hs-accordion-content hidden w-full overflow-hidden ps-2 transition-[height] duration-300'
                    >
                      <ul className='ps-2 pt-2'>
                        <li>
                          <a
                            className='flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300'
                            href='#'
                          >
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a
                            className='flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300'
                            href='#'
                          >
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a
                            className='flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300'
                            href='#'
                          >
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li className='hs-accordion' id='account-accordion'>
              <button
                type='button'
                className='hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-neutral-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white'
              >
                <User width={18} height={18} />
                Account
                <AccordionToggleIcon />
              </button>

              <div
                id='account-accordion-child'
                className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
              >
                <ul className='ps-2 pt-2'>
                  <li>
                    <a
                      className='flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300'
                      href='#'
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      className='flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300'
                      href='#'
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      className='flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300'
                      href='#'
                    >
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className='hs-accordion' id='projects-accordion'>
              <button
                type='button'
                className='hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-neutral-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white'
              >
                <Briefcase width={18} height={18} />
                Projects
                <svg
                  className='ms-auto hidden size-4 hs-accordion-active:block'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path d='m18 15-6-6-6 6' />
                </svg>
                <svg
                  className='ms-auto block size-4 hs-accordion-active:hidden'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path d='m6 9 6 6 6-6' />
                </svg>
              </button>

              <div
                id='projects-accordion-child'
                className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
              >
                <ul className='ps-2 pt-2'>
                  <li>
                    <a
                      className='flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300'
                      href='#'
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      className='flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300'
                      href='#'
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      className='flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300'
                      href='#'
                    >
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                className='flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300'
                href='#'
              >
                <Calendar width={18} height={18} />
                Calendar
              </a>
            </li>
            <li>
              <a
                className='flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-300'
                href='#'
              >
                <BookOpen width={18} height={18} />
                Documentation
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='w-full lg:ps-64'>
        <div className='space-y-4 p-4 sm:space-y-6 sm:p-6'>Main Page content</div>
      </div>
    </div>
  );
}
