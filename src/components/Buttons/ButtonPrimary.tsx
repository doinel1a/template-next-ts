import { MouseEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useStateContext from '../../context/ContextProvider';

import Span from '../Text/Span';

const ButtonPrimary: React.FC<{
    type: 'button' | 'submit';
    text: string;
    icon?: IconProp;
    spanCss?: string;
    iconCss?: string;
    stateCss?: string;
    onClick?: MouseEventHandler;
}> = ({ type, text, icon, spanCss, iconCss, stateCss, onClick }) => {
    const { isDarkMode } = useStateContext();

    return (
        <button
            type={type}
            className={`
                flex justify-center items-center px-5 md:px-6 lg:px-7 py-2 md:py-3 lg:py:4 rounded-lg transition-colors group
                ${
                    stateCss
                        ? stateCss
                        : 'bg-blue-500 hover:bg-blue-700 focus:bg-blue-700'
                }
            `}
            onClick={onClick}
        >
            {icon ? (
                <FontAwesomeIcon
                    icon={icon}
                    className={`
                        w-4 md:w-5 lg:w-6 mr-3 transition-colors
                        ${
                            isDarkMode
                                ? 'text-primary-dark'
                                : 'text-primary-light'
                        }
                        ${iconCss ? iconCss : ''}
                    `}
                />
            ) : (
                <></>
            )}
            <Span
                text={text}
                customCss={`text-sm md:text-base lg:text-lg font-medium ${
                    spanCss ? spanCss : ''
                }`}
            />
        </button>
    );
};

export default ButtonPrimary;
