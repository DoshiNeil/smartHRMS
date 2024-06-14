import { useEffect, useState } from "react";

enum options {
  mr = 'Mr.',
  mrs = 'Mrs.',
  ms = 'Ms',
  dr = 'Dr.',
}

export type SalutationOptions = options | null;

type SalutationProps = {
  updateSalutation: (value: SalutationOptions) => void;
  defaultValue?: SalutationOptions;
};

const Salutation: React.FC<SalutationProps> = ({
  updateSalutation,
  defaultValue = null,
}) => {
 
  const [value, setValue ] = useState<SalutationOptions>(defaultValue);
  
  const handleSelect = (v:SalutationOptions) => setValue(v);

  useEffect(() => (updateSalutation(value)), [value]);




  return <></>;
};

export default Salutation;
