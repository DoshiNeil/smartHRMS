import { useEffect, useState } from 'react';

type PhoneNumberProps = {
  defaultPhoneNumber?: string;
  updatePhoneNumber: (phoneNumber: string, type: 'primary' | 'secondary') => void;
  phoneType: 'primary' | 'secondary';
};

const PhoneNumber: React.FC<PhoneNumberProps> = ({
  defaultPhoneNumber = '',
  updatePhoneNumber,
  phoneType,
}) => {
  const [value, setValue] = useState<string>(defaultPhoneNumber);

  useEffect(() => updatePhoneNumber(value, phoneType), [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-6'>
      <div className='grid md:col-span-2'>
        <label className=''>
          {phoneType === 'primary' && `Primary Contact Details`}
          {phoneType === 'secondary' && `Secondary Contact Details`}
        </label>
      </div>
      <div className='grid md:col-span-4'>
        <div className='space-y- w-48'>
          <input
            onChange={handleChange}
            name='personalPhoneNumber'
            type='number'
            maxLength={10}
            minLength={10}
            className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
            placeholder='9876543210'
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneNumber;
