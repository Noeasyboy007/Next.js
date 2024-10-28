import './globals.css';
import Header from '../components/navbar/Header';
import Footer from '../components/footer/Footer';

export const metadata = {
  title: "Work Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className='mt-2'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
