import { ChangeEventHandler, FocusEventHandler } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import ButtonIcon from '../Buttons/ButtonIcon';

const Input: React.FC<{
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
    return (
        <div className='flex flex-col'>
            <label htmlFor={id} className={labelCss ? labelCss : ''}>
                {label}
            </label>
            {clean ? (
                <div className='relative flex justify-center items-center'>
                    <input
                        id={id}
                        name={id}
                        type='text'
                        value={value}
                        placeholder={
                            placeholder
                                ? placeholder
                                : `Insert ${label.toLowerCase()}`
                        }
                        className={inputCss ? inputCss : ''}
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
                    placeholder={
                        placeholder
                            ? placeholder
                            : `Insert ${label.toLowerCase()}`
                    }
                    className={inputCss ? inputCss : ''}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            )}
        </div>
    );
};

export default Input;
