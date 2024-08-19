import { ToastContainer } from 'react-toastify';
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaskGen - Home",
  description: "Welcome to TaskGen - Your Ultimate To-Do Manager! Here, you can effortlessly add, edit, or delete your tasks with ease. Stay organized, boost your productivity, and take control of your day with TaskGen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="dark w-full min-h-screen bg-[#181820]">
          {children}
        </div>
        <ToastContainer draggable theme="dark" />
      </body>
    </html>
  );
}
