type FormProps = { children: JSX.Element | JSX.Element[] };

const Form: React.FC<FormProps> = ({ children }: FormProps) => {
  return (
    <div className='grid p-4 sm:grid-cols-1 md:grid-cols-6'>
      {children}
    </div>
  );
};

export default Form;
