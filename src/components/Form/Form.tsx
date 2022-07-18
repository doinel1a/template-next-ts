import { FormEventHandler, ReactNode } from 'react';

import useStateContext from '../../context/ContextProvider';

import ButtonPrimary from '../Buttons/ButtonPrimary';

const Form: React.FC<{ children: ReactNode; onSubmit: FormEventHandler }> = ({
    children,
    onSubmit,
}) => {
    const { isDarkMode } = useStateContext();

    return (
        <form
            autoComplete='off'
            className={`
                w-96 h-96 flex flex-col justify-between p-4 rounded-lg transition-colors
                ${isDarkMode ? 'bg-slate-500' : 'bg-gray-300'}
            `}
            onSubmit={(e) => onSubmit(e)}
        >
            <div className='flex flex-col gap-y-4'>{children}</div>
            <div className='flex justify-end'>
                <ButtonPrimary
                    type='submit'
                    text='Submit'
                    spanCss='!text-white'
                />
            </div>
        </form>
    );
};

export default Form;
