import Navbar from '@/partials/navbar/Navbar';


export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
