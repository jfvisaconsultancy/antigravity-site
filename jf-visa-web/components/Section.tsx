import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    variant?: 'base' | 'surface' | 'soft' | 'contrast';
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'section';
    style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    id,
    variant = 'base',
    padding = 'section',
    style,
}) => {
    const bgClasses = {
        base: 'bg-bg-base text-text-primary',
        surface: 'bg-bg-surface text-text-primary',
        soft: 'bg-bg-soft text-text-primary',
        contrast: 'bg-bg-contrast text-text-inverse',
    };

    const paddingClasses = {
        none: '',
        sm: 'py-8',
        md: 'py-12',
        lg: 'py-20',
        section: 'section-padding',
    };

    return (
        <section
            id={id}
            className={`${bgClasses[variant]} ${paddingClasses[padding]} ${className}`}
            style={style}
        >
            {children}
        </section>
    );
};

export default Section;
