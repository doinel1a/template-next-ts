import { MouseEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useStateContext from '../../context/ContextProvider';

import Span from '../Text/Span';

const ButtonTertiary: React.FC<{
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
                flex justify-center items-center px-7 md:px-8 lg:px-9 py-3 md:py-4 lg:py:5 rounded-lg bg-transparent transition-colors duration-1000 group
                ${stateCss ? stateCss : ''}
            `}
            onClick={onClick}
        >
            {icon ? (
                <FontAwesomeIcon
                    icon={icon}
                    className={`
                        w-5 md:w-6 lg:w-8 text-lg lg:text-xl mr-3 
                        text-blue-600 group-hover:text-blue-800 group-focus:text-blue-800 transition-colors
                        ${iconCss ? iconCss : ''}
                    `}
                />
            ) : (
                <></>
            )}
            <Span
                text={text}
                customCss={`
                    font-medium font-bold text-blue-600 group-hover:text-blue-800 group-focus:text-blue-800
                    ${spanCss ? spanCss : ''}
                `}
            />
        </button>
    );
};

export default ButtonTertiary;
