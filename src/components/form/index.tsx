type FormProps = { children: JSX.Element | JSX.Element[] };

const Form: React.FC<FormProps> = ({ children }: FormProps) => {
  return (
    <div className='flex flex-col p-4 gap-y-5'>
      {children}
    </div>
  );
};

export default Form;
