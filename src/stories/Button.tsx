import React from 'react';
import './bootstrap.scss';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'sm' | 'lg';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    primary = false,
    size,
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'btn-primary' : 'btn-secondary';
    return (
        <button
            type='button'
            className={['btn', size ? `btn-${size}` : '', mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};