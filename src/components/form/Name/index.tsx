import { useEffect, useState } from 'react';

export type NameFieldType = {
  firstName: string;
  lastName: string;
  middelName?: string;
};

type NameProps = {
  updateName: (name: NameFieldType) => void;
  defaultName?: NameFieldType;
};
const Name: React.FC<NameProps> = ({
  updateName,
  defaultName = {
    firstName: '',
    lastName: '',
  },
}: NameProps) => {
  const [name, setName] = useState<NameFieldType>(defaultName);

  useEffect(() => updateName(name), [name]);

  const handleName = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: 'first' | 'middle' | 'last'
  ) => {
    switch (key) {
      case 'first':
        setName((old) => ({
          ...old,
          firstName: (e.target.value as string).trim(),
        }));
        break;

      case 'middle':
        setName((old) => ({
          ...old,
          middleName: (e.target.value as string).trim(),
        }));
        break;

      case 'last':
        setName((old) => ({
          ...old,
          lastName: (e.target.value as string).trim(),
        }));
        break;
      default:
        throw Error('Error with form/Name/handleName');
    }
  };

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-6'>
      <div className='grid md:col-span-2'>
        <label className=''> Name </label>
      </div>
      <div className='grid md:col-span-4'>
        <div className='flex gap-x-5'>
          <div className='space-y- w-48'>
            <input
              value={name.firstName}
              onChange={(e) => handleName(e, 'first')}
              name='firstName'
              type='text'
              className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              placeholder='First Name'
            />
          </div>
          <div className='w-48 space-y-3'>
            <input
              value={name.middelName}
              onChange={(e) => handleName(e, 'middle')}
              name='middleName'
              type='text'
              className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              placeholder='Middle Name'
            />
          </div>
          <div className='w-48 space-y-3'>
            <input
              value={name.lastName}
              onChange={(e) => handleName(e, 'last')}
              name='lastName'
              type='text'
              className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              placeholder='Last Name'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Name;
