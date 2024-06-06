import { Search } from 'react-feather';

export default function () {
  return (
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
  );
}
