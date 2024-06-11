import Logo from '@@/svgs/logo';
import {
  BookOpen,
  Briefcase,
  Calendar,
  ChevronRight,
  ChevronsRight,
  Home,
  User,
  Users,
} from 'react-feather';
import AccordionToggleIcon from '../AccordionToggleIcon/AccordionToggleIcon';

export default function Sidebar() {
  return (
    <>
      <div className='sticky inset-x-0 top-0 z-20 border-y bg-white px-4 sm:px-6 md:px-8 lg:hidden dark:border-neutral-700 dark:bg-neutral-800'>
        {/** breadcrumbs in mobile view **/}
        <div className='flex items-center justify-between py-2'>
          <ol className='ms-3 flex items-center whitespace-nowrap'>
            <li className='flex items-center text-sm text-gray-800 dark:text-neutral-400'>
              Home
              <div className='px-2'>
                <ChevronRight
                  strokeWidth={2}
                  width={18}
                  height={18}
                  color='grey'
                />
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
                <ul
                  className='hs-accordion-group ps-3 pt-2'
                  data-hs-accordion-always-open
                >
                  <li
                    className='hs-accordion'
                    id='users-accordion-sub-1'
                  >
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
                  <li
                    className='hs-accordion'
                    id='users-accordion-sub-2'
                  >
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
    </>
  );
}
