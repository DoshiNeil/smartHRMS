import { useEffect, useState } from "react";

type EmailProps = {
  defaultEmail?:string;
  updateEmail: (email: string) => void;
};

const Email: React.FC<EmailProps> = ({ defaultEmail = "", updateEmail}) => {
  const [value, setValue] = useState<string>(defaultEmail);

  useEffect(() => updateEmail(value), [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-6'>
      <div className='grid md:col-span-2'>
        <label className=''> Personal Email </label>
      </div>
      <div className='grid md:col-span-4'>
        <div className='space-y- w-48'>
          <input
            onChange={handleChange}
            name='personalEmail'
            type='email'
            className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
            placeholder='John.Doe@email.com'
          />
        </div>
      </div>
    </div>
  );
};

export default Email;
