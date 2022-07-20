import { Dispatch, SetStateAction } from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons';

import Paragraph from './Text/Paragraph';
import ButtonIcon from './Buttons/ButtonIcon';

const Dropdown: React.FC<{
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
    return (
        <div className='relative inline-block text-left'>
            <div aria-expanded='true' aria-haspopup='true'>
                <ButtonIcon
                    type='button'
                    icon={faGear}
                    ariaLabel='Settings'
                    onClick={() => setIsOpen((prevState) => !prevState)}
                />
            </div>
            {isOpen && (
                <div
                    className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-500 ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='menu-button'
                    tabIndex={-1}
                >
                    <div className='flex flex-col gap-y-4 p-4' role='none'>
                        <div role='menuitem' tabIndex={-1}>
                            <Paragraph text='Option 1' />
                        </div>
                        <div role='menuitem' tabIndex={-1}>
                            <Paragraph text='Option 2' />
                        </div>
                        <div role='menuitem' tabIndex={-1}>
                            <Paragraph text='Option 3' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
