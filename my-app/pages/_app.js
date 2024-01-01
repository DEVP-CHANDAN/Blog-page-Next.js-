import Navbar from '@/component/NavBar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
  ) 
  
}

