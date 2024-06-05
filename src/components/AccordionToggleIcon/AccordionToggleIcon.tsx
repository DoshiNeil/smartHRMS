import { ChevronDown, ChevronUp } from "react-feather";

export default function AccordionToggleIcon() {

  return(
   <>
      <ChevronUp className="hs-accordion-active:block ms-auto hidden size-4"/>
      <ChevronDown className="hs-accordion-active:hidden ms-auto block size-4"/>
   </>

  );

}
