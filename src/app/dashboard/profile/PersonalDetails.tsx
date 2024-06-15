import Form from '@@/components/form';
import DOB from '@@/components/form/DOB';
import Name, { NameFieldType } from '@@/components/form/Name';
import Salutation, {
  SalutationOptionType,
  SalutationOptions,
} from '@@/components/form/Salutation';
import { useEffect, useState } from 'react';

export default function PersonalDetails() {
  const [personalDetails, setPersonalDetails] = useState<Object>();

  const handleSalutationUpdate = (value: SalutationOptionType) =>
    setPersonalDetails((prev) => ({ ...prev, salutation: value }));

  const handleNameUpdate = (value: NameFieldType) =>
    setPersonalDetails((prev) => ({ ...prev, name: value }));

  const handleDOBUpdate = (value: Date) =>
    setPersonalDetails((prev) => ({ ...prev, dob: value }));

  // loggin to test development
  useEffect(() => console.log(personalDetails), [personalDetails]);

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
      <Form>
        <Salutation
          updateSalutation={handleSalutationUpdate}
          defaultValue={SalutationOptions.mr}
        />
        <Name updateName={handleNameUpdate} />
        <DOB updateDate={handleDOBUpdate} />
      </Form>
    </div>
  );
}
