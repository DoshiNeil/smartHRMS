import { useEffect, useState } from 'react';

type DOBProps = {
  defaultDate?: Date;
  updateDate: (date: Date) => void;
};

const DOB: React.FC<DOBProps> = ({ defaultDate, updateDate }) => {
  const [value, setValue] = useState<Date | undefined>(defaultDate);

  useEffect(() => value && updateDate(value), [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(new Date(e.target.value));

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-6'>
      <div className='grid md:col-span-2'>
        <label className=''> Date of Birth </label>
      </div>
      <div className='grid md:col-span-4'>
        <div className='space-y- w-48'>
          <input
            onChange={handleChange}
            name='date'
            type='date'
            className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
            placeholder='First Name'
          />
        </div>
      </div>
    </div>
  );
};

export default DOB;
