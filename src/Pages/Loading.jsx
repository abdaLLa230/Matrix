import React from "react";

const Spinner = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center loader-wrapper">
            <svg
                className="loader"
                viewBox="0 0 128 128"
                width="128"
                height="128"
            >
                <defs>
                    <linearGradient id="loader-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="#fff" />
                    </linearGradient>

                    <mask id="loader-mask">
                        <rect width="128" height="128" fill="url(#loader-gradient)" />
                    </mask>
                </defs>

                <g strokeLinecap="round" strokeWidth="8" strokeDasharray="32 32">
                    <g stroke="hsl(253, 84%, 88%)">
                        <line className="l1" x1="4" y1="48" x2="4" y2="80" />
                        <line className="l2" x1="19" y1="48" x2="19" y2="80" />
                        <line className="l3" x1="34" y1="48" x2="34" y2="80" />
                        <line className="l4" x1="49" y1="48" x2="49" y2="80" />
                        <line className="l5" x1="64" y1="48" x2="64" y2="80" />
                        <g transform="rotate(180,79,64)">
                            <line className="l6" x1="79" y1="48" x2="79" y2="80" />
                        </g>
                        <g transform="rotate(180,94,64)">
                            <line className="l7" x1="94" y1="48" x2="94" y2="80" />
                        </g>
                        <g transform="rotate(180,109,64)">
                            <line className="l8" x1="109" y1="48" x2="109" y2="80" />
                        </g>
                        <g transform="rotate(180,124,64)">
                            <line className="l9" x1="124" y1="48" x2="124" y2="80" />
                        </g>
                    </g>

                    <g stroke="hsl(32, 100%, 50%)" mask="url(#loader-mask)">
                        <line className="l1" x1="4" y1="48" x2="4" y2="80" />
                        <line className="l2" x1="19" y1="48" x2="19" y2="80" />
                        <line className="l3" x1="34" y1="48" x2="34" y2="80" />
                        <line className="l4" x1="49" y1="48" x2="49" y2="80" />
                        <line className="l5" x1="64" y1="48" x2="64" y2="80" />
                        <g transform="rotate(180,79,64)">
                            <line className="l6" x1="79" y1="48" x2="79" y2="80" />
                        </g>
                        <g transform="rotate(180,94,64)">
                            <line className="l7" x1="94" y1="48" x2="94" y2="80" />
                        </g>
                        <g transform="rotate(180,109,64)">
                            <line className="l8" x1="109" y1="48" x2="109" y2="80" />
                        </g>
                        <g transform="rotate(180,124,64)">
                            <line className="l9" x1="124" y1="48" x2="124" y2="80" />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default Spinner;
