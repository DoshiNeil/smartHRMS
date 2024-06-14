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
const Name: React.FC<NameProps> = ({ updateName }: NameProps) => {
  const [name, setName] = useState<NameFieldType>({
    firstName: '',
    lastName: '',
  });

  useEffect(() => updateName(name), [name]);

  const handleName = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: 'first' | 'middle' | 'last'
  ) => {
    switch (key) {
      case 'first':
        setName((old) => ({
          ...old,
          firstName: e.target.value as string,
        }));
        break;

      case 'middle':
        setName((old) => ({
          ...old,
          middleName: e.target.value as string,
        }));
        break;

      case 'last':
        setName((old) => ({
          ...old,
          lastName: e.target.value as string,
        }));
        break;
      default:
        throw Error('Error with form/Name/handleName');
    }
  };

  return (
    <div className='grid  sm:grid-cols-1 md:grid-cols-6'>
      <div className='grid md:col-span-2'>
        <label className=''> Name </label>
      </div>
      <div className='grid md:col-span-4'>
        <div className="max-w-sm space-y-3">
          <input type="text"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" 
          placeholder="This is placeholder"/>
        </div>
      </div>
    </div>
  );
};
export default Name;
