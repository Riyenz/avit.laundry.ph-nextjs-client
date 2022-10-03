import TopNavbar from '../components/TopNavbar';

export function DefaultLayout({ children }) {
  return (
    <div id='default-layout' className='w-screen overflow-x-hidden'>
      <TopNavbar />
      <main className='w-screen overflow-x-hidden'>{children}</main>
    </div>
  );
}
