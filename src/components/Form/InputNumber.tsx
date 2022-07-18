import { ChangeEventHandler, FocusEventHandler } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import useStateContext from '../../context/ContextProvider';

import ButtonIcon from '../Buttons/ButtonIcon';

const InputNumber: React.FC<{
    id: string;
    label: string;
    value: string | number;
    placeholder?: string;
    clean?: boolean;
    labelCss?: string;
    inputCss?: string;
    onChange?: ChangeEventHandler;
    onFocus?: FocusEventHandler;
    onBlur?: FocusEventHandler;
    onDelete?: () => void;
}> = ({
    id,
    label,
    value,
    placeholder,
    clean,
    labelCss,
    inputCss,
    onChange,
    onFocus,
    onBlur,
    onDelete,
}) => {
    const { isDarkMode } = useStateContext();

    return (
        <div className='flex flex-col'>
            <label
                htmlFor={id}
                className={`
                    ${isDarkMode ? 'text-color-dark' : 'text-color-light'}
                    ${labelCss ? labelCss : ''}
                `}
            >
                {label}
            </label>
            {clean ? (
                <div className='relative flex justify-center items-center'>
                    <input
                        id={id}
                        name={id}
                        type='text'
                        value={value}
                        inputMode='numeric'
                        step='0.0001'
                        placeholder={
                            placeholder
                                ? placeholder
                                : `Insert ${label.toLowerCase()}`
                        }
                        className={` 
                            rounded-lg 
                            ${inputCss ? inputCss : ''}
                        `}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                    <div className='absolute right-1'>
                        <ButtonIcon
                            type='button'
                            icon={faClose}
                            title='Clear input'
                            ariaLabel='Clear input'
                            iconCss='!w-3 text-color-light'
                            onClick={() => onDelete!()}
                        />
                    </div>
                </div>
            ) : (
                <input
                    id={id}
                    name={id}
                    type='text'
                    value={value}
                    inputMode='numeric'
                    step='0.0001'
                    placeholder={
                        placeholder
                            ? placeholder
                            : `Insert ${label.toLowerCase()}`
                    }
                    className={` 
                        rounded-lg 
                        ${inputCss ? inputCss : ''}
                    `}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            )}
        </div>
    );
};

export default InputNumber;
