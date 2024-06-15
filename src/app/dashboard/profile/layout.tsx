export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid grid-cols-1 gap-6'>
      {children}
    </div>
  );
}
