import "./globals.css";
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weights: ['400', '600', '700'],
  display: 'swap',
});


export const metadata = {
  title: "KVS Charitable Trust",
  description: "Our vision is to create a better society with easy access to the necessities of every human. We help people break the cycle of poverty by building vital education and healthcare systems in remote areas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
