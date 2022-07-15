import { NextPage } from 'next';

import MetaHead from '../components/MetaHead';

const Home: NextPage = () => {
    return (
        <>
            <MetaHead />
            <div className='w-screen h-screen flex justify-center items-center bg-blue-300'>
                <h1 className='text-6xl'>NEXT JS TEMPLATE</h1>
            </div>
        </>
    );
};

export default Home;
