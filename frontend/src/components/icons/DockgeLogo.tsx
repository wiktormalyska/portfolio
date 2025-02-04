const DockgeLogo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 640 640"
            xmlSpace="preserve"
        >
            <defs>
                <linearGradient id="dockgeGradient" gradientUnits="userSpaceOnUse"
                    x1="259.78" y1="261.15" x2="463.85" y2="456.49">
                    <stop offset="0%" stopColor="#74C2FF" stopOpacity="1" />
                    <stop offset="100%" stopColor="rgb(134,230,169)" stopOpacity="1" />
                </linearGradient>
            </defs>
            <g transform="matrix(0.9545 0 0 0.9545 320 325.57)">
                <path
                    d="M 131.8665 -139.04883 C 159.01022 -111.20969 170.12421 -99.45396 203.1185 -51.72057
                    C 236.1128 -3.98718 264.44148 83.98417 187.33995 144.05073 C 177.72729 151.53955
                    166.73827 158.8119 154.65933 165.65813 C 69.85515 213.72434 -68.67309 240.78578
                    -161.79279 174.28329 C -268.17583 98.30863 -260.10282 -68.66557 -144.35093 -170.50579
                    C -28.59904 -272.34602 104.72278 -166.88797 131.8665 -139.04883 z"
                    stroke="rgb(242,242,242)"
                    strokeOpacity="0.51"
                    strokeWidth="190"
                    fill="url(#dockgeGradient)"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );
};

export default DockgeLogo;
