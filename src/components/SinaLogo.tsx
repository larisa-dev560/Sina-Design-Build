import React from 'react';

interface SinaLogoProps {
  className?: string;
  variant?: 'white' | 'orange' | 'black';
  size?: number;
}

export const SinaLogo: React.FC<SinaLogoProps> = ({
  className = 'w-10 h-10',
  variant = 'white',
}) => {
  const fillColor =
    variant === 'orange' ? '#FF914D' : variant === 'black' ? '#000000' : '#FFFFFF';
  const strokeColor =
    variant === 'orange' ? '#FF914D' : variant === 'black' ? '#000000' : '#FFFFFF';

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sina Design & Build Emblem"
    >
      {/* Outer flowing 'S' ribbon framing the handshake */}
      {/* Top loop with rounded terminal */}
      <path
        d="M 52 75 C 48 55, 65 30, 95 24 C 130 18, 160 30, 172 50 C 178 60, 174 72, 162 76 C 152 79, 142 70, 136 60 C 126 48, 105 42, 85 45 C 66 48, 55 60, 58 72 C 60 82, 70 88, 80 92 L 68 114 C 55 106, 48 94, 52 75 Z"
        fill={fillColor}
      />
      {/* Bottom loop cradling the base */}
      <path
        d="M 32 125 C 24 145, 45 174, 90 182 C 140 190, 178 170, 185 145 C 190 128, 180 114, 165 114 C 150 114, 142 126, 134 138 C 122 152, 94 158, 68 152 C 48 148, 42 136, 44 126 C 46 116, 52 110, 60 106 L 46 86 C 35 96, 30 110, 32 125 Z"
        fill={fillColor}
      />
      {/* Top right architectural handle accent */}
      <path
        d="M 160 48 L 182 32 C 188 28, 194 34, 190 40 L 174 62 C 168 56, 164 52, 160 48 Z"
        fill={fillColor}
      />

      {/* Handshake in Center */}
      {/* Left wrist sleeve */}
      <rect
        x="48"
        y="86"
        width="16"
        height="32"
        rx="5"
        transform="rotate(-28 48 86)"
        fill={fillColor}
      />
      <rect
        x="55"
        y="83"
        width="4"
        height="30"
        rx="2"
        transform="rotate(-28 55 83)"
        fill="#000000"
      />

      {/* Right wrist sleeve */}
      <rect
        x="136"
        y="96"
        width="16"
        height="32"
        rx="5"
        transform="rotate(18 136 96)"
        fill={fillColor}
      />
      <rect
        x="133"
        y="98"
        width="4"
        height="30"
        rx="2"
        transform="rotate(18 133 98)"
        fill="#000000"
      />

      {/* Left hand & thumb */}
      <path
        d="M 68 100 C 74 95, 84 88, 96 90 C 104 92, 108 97, 106 104 C 104 109, 98 112, 92 112 L 86 112 C 86 112, 88 116, 88 120 C 88 124, 82 128, 76 126 L 66 118 Z"
        fill={fillColor}
      />

      {/* Right hand wrapping fingers */}
      <path
        d="M 132 108 C 124 102, 115 102, 106 106 C 98 110, 94 118, 96 124 C 98 128, 102 130, 108 129 C 112 128, 116 126, 120 124 L 126 130 C 128 133, 134 133, 137 129 L 140 120 Z"
        fill={fillColor}
      />

      {/* Clasped fingers detail lines for crisp icon definition */}
      <path
        d="M 94 116 C 92 122, 90 128, 88 134 C 86 138, 80 140, 76 136 C 72 132, 74 126, 78 122"
        stroke={fillColor}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 103 118 C 101 124, 98 130, 96 136 C 94 140, 88 142, 84 138 C 80 134, 82 128, 86 124"
        stroke={fillColor}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 112 118 C 110 124, 106 130, 104 136 C 102 140, 96 142, 92 138 C 88 134, 90 128, 94 124"
        stroke={fillColor}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 120 116 C 118 122, 114 128, 112 134 C 110 138, 104 140, 100 136 C 96 132, 98 126, 102 122"
        stroke={fillColor}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};
