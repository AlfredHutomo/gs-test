import './Divider.scss';

interface DividerProps {
    align?: 'start' | 'center' | 'end';
    lineStyle?: 'solid' | 'dashed' | 'dotted';
    lineWeight?: 'light' | 'regular' | 'heavy';
    children: React.ReactNode;
}

export const Divider: React.FC<DividerProps> = ({
    align = 'center',
    lineStyle = 'solid',
    lineWeight = 'regular',
    children,
}) => {
    return (
        <div className='divider'>
            {align !== 'start' && (
                <div
                    className={[
                        'divider__separator-left',
                        lineStyle,
                        lineWeight,
                    ].join(' ')}
                ></div>
            )}
            <div className='divider__content'>{children}</div>
            {align !== 'end' && (
                <div
                    className={[
                        'divider__separator-right',
                        lineStyle,
                        lineWeight,
                    ].join(' ')}
                ></div>
            )}
        </div>
    );
};
