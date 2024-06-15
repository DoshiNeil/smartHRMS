import Header from '@@/components/Header/Header';
import Sidebar from '@@/components/Sidebar/Sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className='w-full lg:ps-64'>
        <div className='space-y-4 p-4 sm:space-y-6 sm:p-6'>
          {children}
        </div>
      </div>
    </div>
  );
}
