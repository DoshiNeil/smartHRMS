import { useEffect, useState } from 'react';

export const GenderOptions = {
  male: 'Male',
  female: 'Female',
  transgender: 'Transgender',
} as const;

export type GenderOptionType =
  | (typeof GenderOptions)[keyof typeof GenderOptions]
  | '';

type GenderProps = {
  updateGender: (value: GenderOptionType) => void;
  defaultValue?: GenderOptionType;
};

const Gender: React.FC<GenderProps> = ({
  updateGender,
  defaultValue = '',
}) => {
  const [value, setValue] = useState<GenderOptionType>(defaultValue);
  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValue(event.target.value as GenderOptionType);
  };

  useEffect(() => updateGender(value), [value]);

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-6'>
      <div className='grid md:col-span-2'>
        <label className=''> Gender </label>
      </div>
      <div className='grid md:col-span-4'>
        <select
          value={value as string}
          onChange={handleChange}
          className='block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3 pe-9 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 lg:w-2/3 dark:border-transparent dark:bg-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600'
        >
          {Object.entries(GenderOptions).map(([k, v]) => (
            <option key={k} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Gender;
