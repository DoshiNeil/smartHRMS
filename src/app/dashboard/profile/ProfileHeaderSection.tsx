export default function ProfileHeaderSection() {
  return (
    <div className='flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70'>
      <div className='flex flex-col items-center p-10 md:p-12'>
        {/** profile image **/}
        <img
          className='m-4 inline-block size-[128px] rounded-full md:m-5'
          src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
          alt='Image Description'
        />
        <h2 className='text-lg font-bold text-gray-800 dark:text-white'>
          James Doe
        </h2>
        <p className='mt-1 text-gray-500 dark:text-neutral-400'>
          Senior Software Engineer | EMP001
        </p>
      </div>
      <div className='border-b border-gray-200 px-4 dark:border-neutral-700'>
        <nav
          className='flex space-x-2'
          aria-label='Tabs'
          role='tablist'
        >
          <button
            type='button'
            className='active inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm text-gray-500 hover:text-blue-600 disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-blue-600 hs-tab-active:font-semibold hs-tab-active:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500'
            id='basic-tabs-item-1'
            data-hs-tab='#basic-tabs-1'
            aria-controls='basic-tabs-1'
            role='tab'
          >
            Personal Details
          </button>
          <button
            type='button'
            className='inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm text-gray-500 hover:text-blue-600 disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-blue-600 hs-tab-active:font-semibold hs-tab-active:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500'
            id='basic-tabs-item-2'
            data-hs-tab='#basic-tabs-2'
            aria-controls='basic-tabs-2'
            role='tab'
          >
            Employee Documents
          </button>
          <button
            type='button'
            className='inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm text-gray-500 hover:text-blue-600 disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-blue-600 hs-tab-active:font-semibold hs-tab-active:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500'
            id='basic-tabs-item-3'
            data-hs-tab='#basic-tabs-3'
            aria-controls='basic-tabs-3'
            role='tab'
          >
            Login Credentials
          </button>
        </nav>
      </div>
    </div>
  );
}
