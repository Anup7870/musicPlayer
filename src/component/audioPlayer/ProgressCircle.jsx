import React from "react";
import "./progressCircle.scss";
const Circle = ({ color, percentage, size, strokeWidth }) => {
    const radius = size / 2 - 10;
    const circ = 2 * Math.PI * radius - 10;
    const strokePct = ((100 - Math.round(percentage)) * circ) / 100;

    return (
        <circle
            r={radius}
            cx='50%'
            cy='50%'
            fill='transparent'
            stroke={strokePct !== circ ? color : ""}
            strokeWidth={strokeWidth}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : 0}
            strokeLinecap='round'></circle>
    );
};

export default function ProgressCircle({
    percentage,
    isPlaying,
    image,
    size,
    color,
}) {
    return (
        <div className='progressCircle'>
            <svg width={size} height={size}>
                <g>
                    <Circle
                        strokeWidth={"0.4rem"}
                        color='#3b4f73'
                        size={size}
                    />
                    <Circle
                        strokeWidth={"0.6rem"}
                        color={color}
                        percentage={percentage}
                        size={size}
                    />
                </g>
                <defs>
                    <clipPath id='myCircle'>
                        <circle
                            cx='50%'
                            cy='50%'
                            r={(size / 2) - 30}
                            fill='#ffff'
                        />
                    </clipPath>
                    <clipPath id='myInnerCircle'>
                        <circle
                            cx='50%'
                            cy='50%'
                            r={(size / 2) - 100}
                            fill='#ffff'
                        />
                    </clipPath>
                </defs>
                <image
                    className={isPlaying ? "active" : ""}
                    x={30}
                    y={30}
                    width={2 * (size / 2 - 30)}
                    height={2 * (size / 2 - 30)}
                    href="https://cdn.pixabay.com/photo/2014/10/27/06/44/record-504759_960_720.png"
                    clipPath="url{#myCircle}"
                />
                <image
                    className={isPlaying ? "active" : ""}
                    x={100}
                    y={100}
                    width={2 * (size / 2 - 100)}
                    height={2 * (size / 2 - 100)}
                    href={image}
                    clipPath="url{#myInnerCircle}"
                />
            </svg>
        </div>
    );
}
