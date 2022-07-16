import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Header from '../components/Header';

import { ContextProvider } from '../context/ContextProvider';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ContextProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </ContextProvider>
    );
};

export default App;
