import Link from 'next/link';

import useStateContext from '../context/ContextProvider';

const Logo: React.FC<{ text: string; title?: string; ariaLabel: string }> = ({
    text,
    title,
    ariaLabel,
}) => {
    const { isDarkMode } = useStateContext();
    return (
        <Link href='/'>
            <span
                title={title}
                aria-label={ariaLabel}
                tabIndex={0}
                className={`
                    text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer transition-colors
                    ${isDarkMode ? 'text-color-dark' : 'text-color-light'}
                `}
            >
                {text}
            </span>
        </Link>
    );
};

export default Logo;
