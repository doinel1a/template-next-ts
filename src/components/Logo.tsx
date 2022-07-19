import Link from 'next/link';

const Logo: React.FC<{ text: string; title?: string; ariaLabel: string }> = ({
    text,
    title,
    ariaLabel,
}) => {
    return (
        <Link href='/'>
            <span
                title={title}
                aria-label={ariaLabel}
                tabIndex={0}
                className='text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer'
            >
                {text}
            </span>
        </Link>
    );
};

export default Logo;
