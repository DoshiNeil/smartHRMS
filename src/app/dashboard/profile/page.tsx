export default function Page() {
  return (
    <div className='flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70'>
      <img
        className='h-auto w-full rounded-t-xl'
        src='https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80'
        alt='Image Description'
      />
      <div className='p-4 md:p-5'>
        <h3 className='text-lg font-bold text-gray-800 dark:text-white'>Card title</h3>
        <p className='mt-1 text-gray-500 dark:text-neutral-400'>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <a
          className='mt-2 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50'
          href='#'
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
}
