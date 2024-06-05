import React from 'react';
import { Button } from './button';

interface TeamIconProps {
    color1: string,
    color2: string | null,
    textMode?: boolean,
    text?: string,
    size: "small" | "large" | "medium"
}

const TeamIcon: React.FC<TeamIconProps> = ({ color1, color2, textMode, text, size }) => {
    const realColor2 = color2 || color1;
    const sizeMultiplier = size === "large" ? 2 : size === "medium" ? 1.5 : 1;

    //color 1 is in hex
    const textButtonStyleSmall: React.CSSProperties = {
        backgroundColor: color1, // Assume 'color1' is defined elsewhere in your code
        borderRadius: '1.5rem', // Tailwind's 'rounded-3xl'
        width: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.0em',
        margin: '0.08em',
        color: 'white', // Tailwind's 'text-white'
        fontSize: '.7rem' 
    };

    const textButtonStyleMedium: React.CSSProperties = {
        backgroundColor: color1, // Assume 'color1' is defined elsewhere in your code
        borderRadius: '1.5rem', // Tailwind's 'rounded-3xl'
        width: '2.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.0em',
        margin: '0.1em',
        color: 'white', // Tailwind's 'text-white'
        fontSize: '.7rem'
    };

    const textButtonStyleLarge: React.CSSProperties = {
        backgroundColor: color1, // Assume 'color1' is defined elsewhere in your code
        borderRadius: '1.5rem', // Tailwind's 'rounded-3xl'
        width: '4rem', // Tailwind's 'w-16'
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5em',
        color: 'white', // Tailwind's 'text-white'
        fontSize: '1.1rem'
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
        if (size === "small") {
            return (
                <div style={textButtonStyleSmall}>
                    <span>{text?.slice(0,1)}</span>
                </div>
            );
        }
        else if (size === "medium") {
            return (
                <div style={textButtonStyleMedium}>
                    <span>{text}</span>
                </div>
            );
        }
        else if (size === "large") {
            return (

                <div style={textButtonStyleLarge}>
                    <span>{text}</span>
                </div>

            );

        }

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
