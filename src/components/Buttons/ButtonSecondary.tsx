import { MouseEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useStateContext from '../../context/ContextProvider';

import Paragraph from '../Text/Paragraph';

const ButtonSecondary: React.FC<{
    type: 'button' | 'submit';
    text: string;
    icon?: IconProp;
    paragraphCss?: string;
    iconCss?: string;
    stateCss?: string;
    onClick?: MouseEventHandler;
}> = ({ type, text, icon, paragraphCss, iconCss, stateCss, onClick }) => {
    const { isDarkMode } = useStateContext();

    return (
        <button
            type={type}
            className={`
                flex justify-center items-center px-7 md:px-8 lg:px-9 py-3 md:py-4 lg:py:5 rounded-lg border bg-transparent transition-colors group
                ${isDarkMode ? 'border-white' : 'border-black'}
                ${
                    stateCss
                        ? stateCss
                        : 'bg-white hover:bg-gray-200 focus:bg-gray-200'
                }
            `}
            onClick={onClick}
        >
            {icon ? (
                <FontAwesomeIcon
                    icon={icon}
                    className={`
                        w-5 md:w-6 lg:w-8 text-lg lg:text-xl mr-3 transition-colors
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
            <Paragraph
                text={text}
                customCss={`font-medium  ${paragraphCss ? paragraphCss : ''}`}
            />
        </button>
    );
};

export default ButtonSecondary;