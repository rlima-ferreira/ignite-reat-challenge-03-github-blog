import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="-mt-20 z-10 relative px-72">
        <Outlet />
      </main>
    </>
  );
}
