export default function PersonalDetails() {
  return (
    <div className='flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70'>
      <div className='flex flex-col p-4'>
        <h3 className='space-y-4 text-lg font-bold text-gray-800 dark:text-white'>
          Personal Details
        </h3>
        <h6 className='mt-1 text-gray-500 dark:text-neutral-400'>
          Manage all your personal details
        </h6>
      </div>
      {/** form **/}
      <div className='grid p-4 sm:grid-cols-1 md:grid-cols-6'>
        <div className='grid sm:pb-2 md:col-span-2'>
          <label className='my-1 text-gray-500 dark:text-neutral-400'>
            Salutation
          </label>
        </div>
        <div className='grid md:col-span-4'>
          <div className='w-80 space-y-3'>
            <input
              type='text'
              className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              placeholder='This is placeholder'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
