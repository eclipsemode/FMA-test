import React, {ComponentProps, CSSProperties, HTMLAttributes, ReactNode} from 'react';

interface IProps {
    children: ReactNode,
    bgColor?: 'success' | 'reset' | 'default',
    disabled?: boolean,
    isLoading?: boolean,
    clickEvent?: () => void,
    classNameStyle?: HTMLAttributes<'button'>['className']
}

const Button = ({children, bgColor = 'default', disabled, isLoading, clickEvent, classNameStyle}: IProps) => {

    const renderLoader = () => (
        <div
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
    )
    const bgTailwind = (): ComponentProps<'button'>['className'] => {
        const initialStyles = 'flex items-center justify-center gap-2.5 text-amber-50 rounded p-2.5';
        const disabledStyles =
            'disabled:bg-opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:bg-opacity-70';
        const hoverStyles = 'hover:bg-opacity-80';
        const activeStyles = 'active:scale-95';

        switch (bgColor) {
            case 'success':
                return `bg-green-700 ${initialStyles} ${hoverStyles} ${activeStyles} ${disabledStyles}`;
            case 'reset':
                return  `bg-gray-100 text-black border-2 ${initialStyles} ${hoverStyles} ${activeStyles} ${disabledStyles}`
            default:
                return `bg-gray-950 ${initialStyles} ${hoverStyles} ${activeStyles} ${disabledStyles}`
        }
    }

    return (
        <button onClick={clickEvent} disabled={disabled || isLoading} className={`${bgTailwind()} ${classNameStyle}`}>
            {isLoading && renderLoader()}
            <span>{children}</span>
        </button>
    );
};

export default Button;
