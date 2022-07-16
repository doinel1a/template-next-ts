import type { AppProps } from 'next/app';

import { ContextProvider } from '../context/ContextProvider';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    );
};

export default App;
