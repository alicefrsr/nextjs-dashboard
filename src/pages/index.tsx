import Image from 'next/image';
import { Inter } from 'next/font/google';
import Dashboard from './dashboard/Dashboard';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <SideMenu />
      <Dashboard />
    </main>
  );
}
