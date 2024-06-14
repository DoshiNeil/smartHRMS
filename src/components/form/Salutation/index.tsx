import { useEffect, useState } from 'react';

export const SalutationOptions = {
  mr: 'Mr.',
  mrs: 'Mrs.',
  ms: 'Ms',
  dr: 'Dr.',
} as const;

export type SalutationOptionType =
  | (typeof options)[keyof typeof options]
  | null;

type SalutationProps = {
  updateSalutation: (value: SalutationOptionType) => void;
  defaultValue?: SalutationOptionType;
};

const Salutation: React.FC<SalutationProps> = ({
  updateSalutation,
  defaultValue = null,
}) => {
  const [value, setValue] = useState<SalutationOptionType>(defaultValue);
  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValue(event.target.value as SalutationOptionType);
  };

  useEffect(() => updateSalutation(value), [value]);

  return (
    <>
      <div className='grid p-4 md:col-span-2'>
        <label className=''> Salutation </label>
      </div>
      <div className='grid p-4 md:col-span-4'>
        <select
          value={value as string}
          onChange={handleChange}
          className='block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3 pe-9 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 lg:w-2/3 dark:border-transparent dark:bg-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600'
        >
          {Object.entries(SalutationOptions).map(([k, v]) => (
            <option key={k} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Salutation;
