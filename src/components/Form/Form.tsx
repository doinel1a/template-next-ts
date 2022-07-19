import { FormEventHandler, ReactNode } from 'react';

import ButtonPrimary from '../Buttons/ButtonPrimary';

const Form: React.FC<{ children: ReactNode; onSubmit: FormEventHandler }> = ({
    children,
    onSubmit,
}) => {
    return (
        <form
            autoComplete='off'
            className='w-96 h-96'
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
