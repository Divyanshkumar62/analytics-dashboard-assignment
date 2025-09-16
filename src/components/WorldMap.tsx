import React from 'react';

interface WorldMapProps {}

const WorldMap: React.FC<WorldMapProps> = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full"
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      >
        {/* Simplified world map paths for key countries */}
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Europe */}
        <path d="M350 80 Q380 70 400 80 Q420 90 410 110 Q385 105 360 100 Q355 90 350 80"
              fill="#FF59004D"
              stroke="#FFFFFF"
              strokeWidth="1"
              filter="url(#shadow)" />

        {/* Asia (excluding India) */}
        <path d="M450 90 Q500 80 550 85 Q570 95 580 110 Q560 120 530 125 Q490 130 450 120 Q440 110 450 90"
              fill="#FF59004D"
              stroke="#FFFFFF"
              strokeWidth="1"
              filter="url(#shadow)" />

        {/* India - highlighted */}
        <path d="M470 130 Q490 125 500 135 Q495 150 485 160 Q475 155 470 145 Q465 140 470 130"
              fill="#FF5900"
              stroke="#FFFFFF"
              strokeWidth="2"
              filter="url(#shadow)"
              className="hover:fill-orange-600 cursor-pointer" />

        {/* China */}
        <path d="M500 90 Q540 88 570 95 Q575 105 565 110 Q545 115 510 115 Q500 105 500 90"
              fill="#FF59004D"
              stroke="#FFFFFF"
              strokeWidth="1"
              filter="url(#shadow)" />

        {/* Japan */}
        <path d="M580 100 Q585 95 590 100 Q585 105 580 105 Q575 100 580 100"
              fill="#FF59004D"
              stroke="#FFFFFF"
              strokeWidth="1"
              filter="url(#shadow)" />

        {/* Middle East */}
        <path d="M420 120 Q440 115 450 125 Q445 135 435 140 Q425 135 420 125 Q415 120 420 120"
              fill="#FF59004D"
              stroke="#FFFFFF"
              strokeWidth="1"
              filter="url(#shadow)" />

        {/* Africa */}
        <path d="M380 150 Q420 140 450 145 Q460 160 450 180 Q420 185 380 175 Q375 165 380 150"
              fill="#FF59004D"
              stroke="#FFFFFF"
              strokeWidth="1"
              filter="url(#shadow)" />

        {/* USA */}
        <path d="M120 120 Q150 110 180 115 Q190 125 185 140 Q160 145 130 140 Q115 130 120 120"
              fill="#FF59004D"
              stroke="#FFFFFF"
              strokeWidth="1"
              filter="url(#shadow)" />

        {/* South America */}
        <path d="M160 180 Q190 170 205 175 Q210 190 200 210 Q180 215 150 200 Q155 185 160 180"
              fill="#FF59004D"
              stroke="#FFFFFF"
              strokeWidth="1"
              filter="url(#shadow)" />

        {/* Australia */}
        <path d="M550 250 Q580 245 590 250 Q585 260 575 265 Q560 270 545 265 Q545 255 550 250"
              fill="#FF59004D"
              stroke="#FFFFFF"
              strokeWidth="1"
              filter="url(#shadow)" />

        {/* Water bodies */}
        <circle cx="200" cy="150" r="30" fill="#E0F2FE" stroke="#B3E5FC" strokeWidth="1" />

        <text x="400" y="200" textAnchor="middle" className="text-xs font-semibold" fill="#333">World Map</text>
        <text x="475" y="155" textAnchor="middle" className="text-xs font-bold" fill="#FFF">India</text>
      </svg>
    </div>
  );
};

export default WorldMap;
