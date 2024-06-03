import React from 'react';
import { Button } from './button';

interface TeamIconProps {
    color1: string,
    color2: string | null,
    textMode?: boolean,
    text?: string,
    size: "small" | "large"
}

const TeamIcon: React.FC<TeamIconProps> = ({ color1, color2, textMode, text, size }) => {
    const realColor2 = color2 || color1;
    const sizeMultiplier = size === "large" ? 2 : 1;

    //color 1 is in hex
    const textButtonStyle: React.CSSProperties = {
        backgroundColor: color1, // Assume 'color1' is defined elsewhere in your code
        borderRadius: '1.5rem', // Tailwind's 'rounded-3xl'
        width: '4rem', // Tailwind's 'w-16'
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5em',
        color: 'white', // Tailwind's 'text-white'
        fontSize: '1.1rem' // Tailwind's 'font-2xl'
    };
    


    const leftStyle: React.CSSProperties = {
        position: 'absolute',
        inset: '0',
        backgroundColor: color1,
        clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0 100%)'
    };

    const rightStyle: React.CSSProperties = {
        position: 'absolute',
        inset: '0',
        backgroundColor: realColor2,
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 50% 100%)'
    };

    if (textMode) {
        return (
            <div style={textButtonStyle}>
                <span>{text}</span>
            </div>
        );
    }

    return (
        <div style={{ width: `${1.15 * sizeMultiplier}em`, height: `${sizeMultiplier}em`, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}>
                <div style={leftStyle}></div>
                <div style={rightStyle}></div>
            </div>
        </div>
    );
}

export default TeamIcon;
