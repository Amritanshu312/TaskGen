import BottomBar from '@/partials/bottomBar/BottomBar';
import Navbar from '@/partials/navbar/Navbar';


export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <BottomBar />
    </>
  );
}
