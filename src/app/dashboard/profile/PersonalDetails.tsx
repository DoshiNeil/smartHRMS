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
      <div className='flex p-4'>
        <div className='flex w-1/3'>
          <label className='mt-1 text-gray-500 dark:text-neutral-400'>
            Salutation
          </label>
        </div>
        <div className='w-2/3 flex-1'>
          <input
            type='text'
            className='block w-full w-80 rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
            placeholder='This is placeholder'
          />
        </div>
      </div>
    </div>
  );
}
