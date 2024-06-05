import { ChevronDown, ChevronUp } from 'react-feather';

export default function AccordionToggleIcon() {
  return (
    <>
      <ChevronUp className='ms-auto hidden size-4 hs-accordion-active:block' />
      <ChevronDown className='ms-auto block size-4 hs-accordion-active:hidden' />
    </>
  );
}
