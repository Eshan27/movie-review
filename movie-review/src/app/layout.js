import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Welcome | Worth-a-Share app",
  description: "Welcome to your Worth-a-Share App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="bottom-center" reverseOrder={false} toastOptions={{
          style: {
            padding: '1em',
            background: 'green',
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'center',
          }
        }} />
        {children}
      </body>
    </html>
  );
}
