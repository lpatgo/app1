import React from 'react';

interface TeamIconProps {
    color1: string,
    color2: string | null,
    size: "small" | "large"
}

const TeamIcon: React.FC<TeamIconProps> = ({ color1, color2, size }) => {
    const realColor2 = color2 || color1;
    const sizeMultiplier = size === "large" ? 2 : 1;

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
