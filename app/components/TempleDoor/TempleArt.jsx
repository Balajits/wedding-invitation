import styles from "./TempleDoor.module.css";

/*
  Static temple scene drawn in SVG, laid out on a 736 x 1308 canvas
  (the same proportions as the reference photo). The doors are real HTML
  placed over the doorway so they can swing open in 3D.
*/
export default function TempleArt() {
  return (
    <svg
      className={styles.art}
      viewBox="0 0 736 1308"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="t-goldV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff2b4" />
          <stop offset="0.35" stopColor="#e6b848" />
          <stop offset="0.75" stopColor="#b98424" />
          <stop offset="1" stopColor="#7a4f10" />
        </linearGradient>
        <linearGradient id="t-goldH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7a4f10" />
          <stop offset="0.22" stopColor="#e9bf55" />
          <stop offset="0.5" stopColor="#fff0a8" />
          <stop offset="0.78" stopColor="#d6a336" />
          <stop offset="1" stopColor="#7a4f10" />
        </linearGradient>
        <radialGradient id="t-goldR" cx="0.5" cy="0.6" r="0.7">
          <stop offset="0" stopColor="#fff0b0" />
          <stop offset="0.55" stopColor="#e0b244" />
          <stop offset="1" stopColor="#9a6a18" />
        </radialGradient>
        <linearGradient id="t-stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfc8b8" />
          <stop offset="1" stopColor="#8f897c" />
        </linearGradient>
        <linearGradient id="t-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a191c" />
          <stop offset="1" stopColor="#242328" />
        </linearGradient>
        <linearGradient id="t-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0c0c0f" />
          <stop offset="0.6" stopColor="#18181c" />
          <stop offset="1" stopColor="#0a0a0d" />
        </linearGradient>
        <radialGradient id="t-flame">
          <stop offset="0" stopColor="#ffe9a0" stopOpacity="0.95" />
          <stop offset="0.4" stopColor="#ffb347" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ff9a2e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="t-spill" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffc95a" stopOpacity="0.32" />
          <stop offset="1" stopColor="#ffc95a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="t-vig" cx="0.5" cy="0.45" r="0.75">
          <stop offset="0.55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.6" />
        </radialGradient>
        <pattern id="t-lattice" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M0 6 L6 0 L12 6 L6 12 Z" fill="none" stroke="#6f695c" strokeWidth="1" />
        </pattern>
        <filter id="t-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="3" />
          <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 -0.2" />
        </filter>
        <linearGradient id="t-fadeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" />
          <stop offset="0.3" stopColor="#fff" />
        </linearGradient>
        <mask id="t-fade">
          <rect x="0" y="230" width="736" height="772" fill="url(#t-fadeGrad)" />
        </mask>
        <filter id="t-marble">
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.04" numOctaves="4" seed="8" />
          <feColorMatrix values="0 0 0 0 0.8  0 0 0 0 0.8  0 0 0 0 0.85  0 0 0 2.2 -1.05" />
        </filter>

        {/* gold pilaster with carved balusters */}
        <g id="t-pil">
          <rect x="134" y="488" width="78" height="508" fill="url(#t-goldH)" stroke="#6b4410" strokeWidth="3" />
          <rect x="146" y="500" width="54" height="484" fill="#b98424" opacity="0.45" />
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse
              key={i}
              cx="173"
              cy={528 + i * 38}
              rx="22"
              ry="13"
              fill="url(#t-goldV)"
              stroke="#6b4410"
              strokeWidth="2"
            />
          ))}
          <line x1="140" y1="496" x2="140" y2="990" stroke="#6b4410" strokeWidth="3" strokeDasharray="4 5" />
          <rect x="126" y="478" width="92" height="18" fill="url(#t-goldV)" stroke="#6b4410" strokeWidth="2" />
          <rect x="126" y="962" width="92" height="34" fill="url(#t-goldV)" stroke="#6b4410" strokeWidth="2" />
        </g>

        {/* carved band between pilaster and door */}
        <g id="t-band">
          <rect x="212" y="520" width="33" height="428" fill="url(#t-goldH)" stroke="#6b4410" strokeWidth="2" />
          <line x1="228" y1="528" x2="228" y2="940" stroke="#6b4410" strokeWidth="3" strokeDasharray="4 4" />
        </g>

        {/* yali / makara at the arch spring */}
        <g id="t-yali">
          <path
            d="M128 500 C118 436 150 386 198 392 C220 396 228 412 216 424 C206 414 192 416 190 430 C188 444 200 456 216 460 C198 482 176 488 160 484 L160 500 Z"
            fill="url(#t-goldV)"
            stroke="#6b4410"
            strokeWidth="3"
          />
          <circle cx="178" cy="418" r="6" fill="#3a1a05" />
          <path d="M150 450 q8 -16 24 -10" fill="none" stroke="#6b4410" strokeWidth="3" />
          <path d="M142 472 q8 -14 22 -8" fill="none" stroke="#6b4410" strokeWidth="3" />
          <circle cx="205" cy="436" r="5" fill="#fff0b0" stroke="#6b4410" strokeWidth="2" />
        </g>
      </defs>

      {/* night sky */}
      <rect width="736" height="1308" fill="#05070c" />

      {/* ---------- Temple walls ---------- */}
      <g mask="url(#t-fade)">
        <rect x="0" y="230" width="736" height="772" fill="url(#t-wall)" />
        <rect x="0" y="230" width="736" height="772" filter="url(#t-grain)" opacity="0.25" />
      </g>

      {/* corner pillars */}
      {[0, 664].map((x) => (
        <g key={x}>
          <rect x={x} y="0" width="72" height="1000" fill="#141316" />
          {Array.from({ length: 11 }).map((_, i) => (
            <rect key={i} x={x + 6} y={30 + i * 88} width="60" height="52" rx="4" fill="#1d1c20" stroke="#2e2d33" strokeWidth="2" />
          ))}
        </g>
      ))}

      {/* carved niches with sculptures */}
      {[40, 624].map((x) => (
        <g key={x}>
          <rect x={x} y="545" width="72" height="125" rx="8" fill="#141318" stroke="#3a383b" strokeWidth="3" />
          <circle cx={x + 36} cy="582" r="10" fill="#6d675c" />
          <path d={`M${x + 22} 666 L${x + 26} 602 Q${x + 36} 592 ${x + 46} 602 L${x + 50} 666 Z`} fill="#5f5a50" />
        </g>
      ))}

      {/* temple steps */}
      {[
        [90, 150],
        [60, 150],
        [30, 150],
      ].map(([x, w], i) => (
        <g key={i}>
          <rect x={x - 90 + 90} y={940 + i * 20} width={w + 20 - i * 20} height="20" fill="#1c1b1f" stroke="#2c2b30" />
          <rect x={736 - (x - 90 + 90) - (w + 20 - i * 20)} y={940 + i * 20} width={w + 20 - i * 20} height="20" fill="#1c1b1f" stroke="#2c2b30" />
        </g>
      ))}

      {/* golden light spilling on the walls */}
      <ellipse cx="371" cy="700" rx="340" ry="470" fill="url(#t-spill)" />

      {/* ---------- Floor ---------- */}
      <rect x="0" y="1000" width="736" height="308" fill="url(#t-floor)" />
      <rect x="0" y="1000" width="736" height="308" filter="url(#t-marble)" opacity="0.35" />
      <line x1="0" y1="1110" x2="736" y2="1110" stroke="#ffffff" strokeOpacity="0.06" />
      <line x1="0" y1="1200" x2="736" y2="1200" stroke="#ffffff" strokeOpacity="0.06" />
      <ellipse cx="371" cy="1060" rx="150" ry="260" fill="url(#t-spill)" />

      {/* ---------- Gold arch frame ---------- */}
      <path
        d="M128 500 L128 445 C128 335 248 268 371 268 C494 268 614 335 614 445 L614 500 Z"
        fill="url(#t-goldV)"
        stroke="#6b4410"
        strokeWidth="3"
      />
      <path
        d="M141 480 L141 448 C141 346 255 284 371 284 C487 284 601 346 601 448 L601 480"
        fill="none"
        stroke="#7a4f10"
        strokeWidth="6"
        strokeDasharray="7 5"
      />
      <path
        d="M153 480 L153 450 C153 356 262 298 371 298 C480 298 589 356 589 450 L589 480"
        fill="none"
        stroke="#fff0b0"
        strokeWidth="2.5"
        strokeDasharray="2 9"
      />
      <path
        d="M196 500 C196 396 280 338 371 338 C462 338 546 396 546 500"
        fill="none"
        stroke="#8a5d12"
        strokeWidth="6"
        strokeDasharray="3 6"
      />

      {/* tympanum */}
      <path
        d="M212 500 C212 410 285 352 371 352 C457 352 530 410 530 500 Z"
        fill="url(#t-goldR)"
        stroke="#6b4410"
        strokeWidth="3"
      />
      <path
        d="M224 500 C224 420 292 364 371 364 C450 364 518 420 518 500"
        fill="none"
        stroke="#fff0b0"
        strokeWidth="1.5"
        opacity="0.8"
      />

      {/* chakra */}
      <g transform="translate(305 432)">
        <circle r="32" fill="none" stroke="#8a5d12" strokeWidth="4" strokeDasharray="3 4" />
        <circle r="26" fill="#d9a93f" stroke="#6b4410" strokeWidth="3" />
        <circle r="19" fill="none" stroke="#6b4410" strokeWidth="2" strokeDasharray="3 3" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="0" y1="-7" x2="0" y2="-19" stroke="#6b4410" strokeWidth="3" transform={`rotate(${i * 45})`} />
        ))}
        <circle r="7" fill="url(#t-goldV)" stroke="#6b4410" strokeWidth="2" />
      </g>

      {/* namam */}
      <path
        d="M352 395 L361 395 L365 442 L371 452 L377 442 L381 395 L390 395 L383 448 L371 462 L359 448 Z"
        fill="#f7eed3"
        stroke="#6b4410"
        strokeWidth="1.5"
      />
      <path d="M371 400 L371 446" stroke="#c0182b" strokeWidth="7" strokeLinecap="round" />
      <path
        d="M348 478 Q371 462 394 478 Q371 490 348 478 Z"
        fill="#d9a93f"
        stroke="#6b4410"
        strokeWidth="2"
      />

      {/* shankha (conch) */}
      <g transform="translate(437 434)">
        <ellipse rx="17" ry="26" fill="#d9a93f" stroke="#6b4410" strokeWidth="3" />
        <path d="M-6 -12 q18 -8 16 10 q-2 16 -16 12" fill="none" stroke="#6b4410" strokeWidth="2.5" />
        <path d="M0 -26 l-5 -14 h10 z" fill="#d9a93f" stroke="#6b4410" strokeWidth="2" />
        <rect x="-12" y="26" width="24" height="7" rx="2" fill="url(#t-goldV)" stroke="#6b4410" strokeWidth="2" />
      </g>

      {/* lintel above the door */}
      <rect x="210" y="485" width="322" height="36" fill="url(#t-goldH)" stroke="#6b4410" strokeWidth="3" />
      <line x1="220" y1="503" x2="522" y2="503" stroke="#6b4410" strokeWidth="3" strokeDasharray="5 4" />
      <circle cx="371" cy="503" r="15" fill="url(#t-goldR)" stroke="#6b4410" strokeWidth="3" />
      <circle cx="371" cy="503" r="6" fill="#7a4f10" />

      {/* pilasters, bands, threshold */}
      <use href="#t-pil" />
      <use href="#t-pil" transform="translate(742 0) scale(-1 1)" />
      <use href="#t-band" />
      <use href="#t-band" transform="translate(742 0) scale(-1 1)" />
      <use href="#t-yali" />
      <use href="#t-yali" transform="translate(742 0) scale(-1 1)" />

      {/* doorway recess (the real doors sit on top of this) */}
      <rect x="245" y="520" width="252" height="425" fill="#0a0605" />

      <rect x="212" y="945" width="318" height="34" fill="url(#t-goldH)" stroke="#6b4410" strokeWidth="3" />
      <line x1="222" y1="962" x2="520" y2="962" stroke="#6b4410" strokeWidth="3" strokeDasharray="5 4" />
      <rect x="190" y="979" width="362" height="14" fill="#b98424" stroke="#6b4410" strokeWidth="2" />

      {/* kirtimukha crowning the arch */}
      <path
        d="M338 250 L348 230 L360 246 L371 224 L382 246 L394 230 L404 250 Z"
        fill="url(#t-goldV)"
        stroke="#6b4410"
        strokeWidth="2.5"
      />
      <ellipse cx="371" cy="272" rx="40" ry="32" fill="url(#t-goldR)" stroke="#6b4410" strokeWidth="3" />
      <circle cx="356" cy="266" r="5.5" fill="#3a1a05" />
      <circle cx="386" cy="266" r="5.5" fill="#3a1a05" />
      <path d="M346 256 Q356 248 366 256" fill="none" stroke="#6b4410" strokeWidth="3" />
      <path d="M376 256 Q386 248 396 256" fill="none" stroke="#6b4410" strokeWidth="3" />
      <path d="M365 276 Q371 282 377 276" fill="none" stroke="#6b4410" strokeWidth="3" />
      <path d="M350 288 Q371 306 392 288" fill="none" stroke="#6b4410" strokeWidth="4" />
      <path d="M356 291 l4 8 l4 -7 M378 291 l4 8 l4 -7" fill="#fff0b0" stroke="#6b4410" strokeWidth="1.5" />

      {/* ---------- Rangoli at the threshold ---------- */}
      <polygon points="205,994 537,994 562,1030 180,1030" fill="#e8bd2c" opacity="0.95" />
      <polygon
        points="205,994 537,994 562,1030 180,1030"
        fill="none"
        stroke="#fff5cf"
        strokeWidth="2"
        strokeDasharray="2 5"
      />
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse key={i} cx="371" cy="1004" rx="5" ry="10" fill="#d63a2a" transform={`rotate(${i * 45} 371 1012)`} />
      ))}
      <circle cx="371" cy="1012" r="6" fill="#fff0b0" />

      {/* ---------- Lamps ---------- */}
      <line x1="112" y1="0" x2="112" y2="722" stroke="#b9b9c4" strokeOpacity="0.4" />
      <line x1="620" y1="0" x2="620" y2="722" stroke="#b9b9c4" strokeOpacity="0.4" />
      {[
        [112, 735, 0.7],
        [620, 735, 0.7],
        [172, 1006, 1],
        [571, 1006, 1],
        [42, 1084, 1.1],
        [694, 1080, 1.1],
      ].map(([x, y, s]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${s})`}>
          <circle r="38" fill="url(#t-flame)" />
          <ellipse cx="0" cy="3" rx="12" ry="4" fill="#8a5d12" />
          <ellipse cx="0" cy="-5" rx="3" ry="7" fill="#ffd27a" />
        </g>
      ))}

      {/* vignette */}
      <rect width="736" height="1308" fill="url(#t-vig)" />
    </svg>
  );
}