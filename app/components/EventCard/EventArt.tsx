import styles from "./EventArt.module.css";

/**
 * Hand-drawn style illustrations (no people) used as the background of the event cards.
 * Colours come from your theme (theme/theme.ts), so they change with the active theme.
 */

export function EngagementArt() {
  return (
    <svg viewBox="0 0 400 700" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" focusable="false">
      <defs>
        <g id="ea-mari">
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(0)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(45)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(90)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(135)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(180)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(225)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(270)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(315)" />
          <ellipse cx="0" cy="-3.6" rx="2.8" ry="4.4" fill="#ffc65c" transform="rotate(30)" />
          <ellipse cx="0" cy="-3.6" rx="2.8" ry="4.4" fill="#ffc65c" transform="rotate(90)" />
          <ellipse cx="0" cy="-3.6" rx="2.8" ry="4.4" fill="#ffc65c" transform="rotate(150)" />
          <ellipse cx="0" cy="-3.6" rx="2.8" ry="4.4" fill="#ffc65c" transform="rotate(210)" />
          <ellipse cx="0" cy="-3.6" rx="2.8" ry="4.4" fill="#ffc65c" transform="rotate(270)" />
          <ellipse cx="0" cy="-3.6" rx="2.8" ry="4.4" fill="#ffc65c" transform="rotate(330)" />
          <circle r="2.4" fill="#d96a0a" />
        </g>
        <g id="ea-jas">
          <ellipse cx="0" cy="-5" rx="2.8" ry="5" fill="#fffdf7" stroke="#d9c7ee" strokeWidth="0.6" transform="rotate(0)" />
          <ellipse cx="0" cy="-5" rx="2.8" ry="5" fill="#fffdf7" stroke="#d9c7ee" strokeWidth="0.6" transform="rotate(60)" />
          <ellipse cx="0" cy="-5" rx="2.8" ry="5" fill="#fffdf7" stroke="#d9c7ee" strokeWidth="0.6" transform="rotate(120)" />
          <ellipse cx="0" cy="-5" rx="2.8" ry="5" fill="#fffdf7" stroke="#d9c7ee" strokeWidth="0.6" transform="rotate(180)" />
          <ellipse cx="0" cy="-5" rx="2.8" ry="5" fill="#fffdf7" stroke="#d9c7ee" strokeWidth="0.6" transform="rotate(240)" />
          <ellipse cx="0" cy="-5" rx="2.8" ry="5" fill="#fffdf7" stroke="#d9c7ee" strokeWidth="0.6" transform="rotate(300)" />
          <circle r="1.8" fill="#f3d37a" />
        </g>
        <g id="ea-daisy">
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(0)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(45)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(90)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(135)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(180)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(225)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(270)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(315)" />
          <circle className={styles.fc} r="3.2" />
        </g>
        <g id="ea-leaf">
          <path d="M0,0 C6,-8 6,-20 0,-28 C-6,-20 -6,-8 0,0Z" fill="#6fa36a" />
          <path d="M0,-2 L0,-24" stroke="#4f8a52" strokeWidth="1" fill="none" />
        </g>
        <linearGradient id="ea-sky" x1="0" y1="0" x2="0" y2="1">
          <stop className={styles.stTop} offset="0" />
          <stop className={styles.stMid} offset="0.6" />
          <stop className={styles.stBot} offset="1" />
        </linearGradient>
        <radialGradient id="ea-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ea-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6e3a1" />
          <stop offset="0.5" stopColor="#d9b256" />
          <stop offset="1" stopColor="#b88a2e" />
        </linearGradient>
      </defs>
      <rect width="400" height="700" fill="url(#ea-sky)" />
      <circle cx="200" cy="250" r="190" fill="url(#ea-glow)" />
      <circle cx="56" cy="214" r="22" fill="#ffffff" opacity="0.3" />
      <circle cx="344" cy="262" r="30" fill="#ffffff" opacity="0.3" />
      <circle cx="118" cy="312" r="14" fill="#ffffff" opacity="0.3" />
      <circle cx="302" cy="176" r="18" fill="#ffffff" opacity="0.3" />
      <circle cx="36" cy="336" r="26" fill="#ffffff" opacity="0.2" />
      <circle cx="372" cy="118" r="16" fill="#ffffff" opacity="0.3" />
      <circle cx="250" cy="330" r="12" fill="#ffffff" opacity="0.2" />
      <g>
        <path className={styles.wire} d="M-10,18 Q100,100 200,36" />
        <g transform="translate(11.9 32.9)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#9a8460" strokeWidth="1.2" />
          <g className={styles.twinkle} style={{ animationDelay: "0.00s" }}>
            <circle cy="11" r="11" fill="#ffe08a" opacity="0.3" />
            <circle cy="11" r="5" fill="#fff0b8" />
          </g>
        </g>
        <g transform="translate(46.5 50.8)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#9a8460" strokeWidth="1.2" />
          <g className={styles.twinkle} style={{ animationDelay: "0.37s" }}>
            <circle cy="11" r="11" fill="#ffe08a" opacity="0.3" />
            <circle cy="11" r="5" fill="#fff0b8" />
          </g>
        </g>
        <g transform="translate(80.6 61.1)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#9a8460" strokeWidth="1.2" />
          <g className={styles.twinkle} style={{ animationDelay: "0.74s" }}>
            <circle cy="11" r="11" fill="#ffe08a" opacity="0.3" />
            <circle cy="11" r="5" fill="#fff0b8" />
          </g>
        </g>
        <g transform="translate(114.2 64)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#9a8460" strokeWidth="1.2" />
          <g className={styles.twinkle} style={{ animationDelay: "1.11s" }}>
            <circle cy="11" r="11" fill="#ffe08a" opacity="0.3" />
            <circle cy="11" r="5" fill="#fff0b8" />
          </g>
        </g>
        <g transform="translate(147.3 59.4)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#9a8460" strokeWidth="1.2" />
          <g className={styles.twinkle} style={{ animationDelay: "1.48s" }}>
            <circle cy="11" r="11" fill="#ffe08a" opacity="0.3" />
            <circle cy="11" r="5" fill="#fff0b8" />
          </g>
        </g>
        <g transform="translate(179.9 47.3)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#9a8460" strokeWidth="1.2" />
          <g className={styles.twinkle} style={{ animationDelay: "1.85s" }}>
            <circle cy="11" r="11" fill="#ffe08a" opacity="0.3" />
            <circle cy="11" r="5" fill="#fff0b8" />
          </g>
        </g>
        <path className={styles.wire} d="M200,36 Q300,100 410,18" />
        <g transform="translate(220.1 47.3)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#9a8460" strokeWidth="1.2" />
          <g className={styles.twinkle} style={{ animationDelay: "0.00s" }}>
            <circle cy="11" r="11" fill="#ffe08a" opacity="0.3" />
            <circle cy="11" r="5" fill="#fff0b8" />
          </g>
        </g>
        <g transform="translate(252.7 59.4)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#9a8460" strokeWidth="1.2" />
          <g className={styles.twinkle} style={{ animationDelay: "0.37s" }}>
            <circle cy="11" r="11" fill="#ffe08a" opacity="0.3" />
            <circle cy="11" r="5" fill="#fff0b8" />
          </g>
        </g>
        <g transform="translate(285.8 64)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#9a8460" strokeWidth="1.2" />
          <g className={styles.twinkle} style={{ animationDelay: "0.74s" }}>
            <circle cy="11" r="11" fill="#ffe08a" opacity="0.3" />
            <circle cy="11" r="5" fill="#fff0b8" />
          </g>
        </g>
        <g transform="translate(319.4 61.1)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#9a8460" strokeWidth="1.2" />
          <g className={styles.twinkle} style={{ animationDelay: "1.11s" }}>
            <circle cy="11" r="11" fill="#ffe08a" opacity="0.3" />
            <circle cy="11" r="5" fill="#fff0b8" />
          </g>
        </g>
        <g transform="translate(353.5 50.8)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#9a8460" strokeWidth="1.2" />
          <g className={styles.twinkle} style={{ animationDelay: "1.48s" }}>
            <circle cy="11" r="11" fill="#ffe08a" opacity="0.3" />
            <circle cy="11" r="5" fill="#fff0b8" />
          </g>
        </g>
        <g transform="translate(388.1 32.9)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#9a8460" strokeWidth="1.2" />
          <g className={styles.twinkle} style={{ animationDelay: "1.85s" }}>
            <circle cy="11" r="11" fill="#ffe08a" opacity="0.3" />
            <circle cy="11" r="5" fill="#fff0b8" />
          </g>
        </g>
      </g>
      <g transform="translate(58 118) scale(1)">
        <g className={styles.bob} style={{ animationDelay: "0s" }}>
          <line x1="0" y1="-118" x2="0" y2="0" stroke="#9a8460" strokeWidth="1.4" />
          <rect x="-7" y="-4" width="14" height="6" rx="2" fill="#c9a24a" />
          <path className={styles.lanternA} d="M-18,2 C-26,18 -26,42 -14,56 L14,56 C26,42 26,18 18,2 Z" />
          <ellipse cx="0" cy="30" rx="11" ry="20" fill="#ffe9a8" opacity="0.8" />
          <path d="M-18,2 C-8,14 -8,44 -14,56 M18,2 C8,14 8,44 14,56 M0,2 L0,56" stroke="#ffffff" strokeWidth="1.2" opacity="0.6" fill="none" />
          <rect x="-14" y="55" width="28" height="5" rx="2" fill="#c9a24a" />
          <line x1="0" y1="60" x2="0" y2="72" stroke="#c9a24a" strokeWidth="1.6" />
          <circle cy="74" r="3" fill="#c9a24a" />
        </g>
      </g>
      <g transform="translate(344 132) scale(0.9)">
        <g className={styles.bob} style={{ animationDelay: "1.2s" }}>
          <line x1="0" y1="-146.7" x2="0" y2="0" stroke="#9a8460" strokeWidth="1.4" />
          <rect x="-7" y="-4" width="14" height="6" rx="2" fill="#c9a24a" />
          <path className={styles.lanternB} d="M-18,2 C-26,18 -26,42 -14,56 L14,56 C26,42 26,18 18,2 Z" />
          <ellipse cx="0" cy="30" rx="11" ry="20" fill="#ffe9a8" opacity="0.8" />
          <path d="M-18,2 C-8,14 -8,44 -14,56 M18,2 C8,14 8,44 14,56 M0,2 L0,56" stroke="#ffffff" strokeWidth="1.2" opacity="0.6" fill="none" />
          <rect x="-14" y="55" width="28" height="5" rx="2" fill="#c9a24a" />
          <line x1="0" y1="60" x2="0" y2="72" stroke="#c9a24a" strokeWidth="1.6" />
          <circle cy="74" r="3" fill="#c9a24a" />
        </g>
      </g>
      <g transform="translate(0 0)">
        <g className={styles.hover} style={{ animationDelay: "0.4s" }}>
          <circle cx="200" cy="250" r="74" fill="url(#ea-glow)" opacity="0.9" />
          <circle cx="178" cy="250" r="36" fill="none" stroke="url(#ea-gold)" strokeWidth="8" />
          <circle cx="222" cy="250" r="36" fill="none" stroke="url(#ea-gold)" strokeWidth="8" />
          <path d="M185.5,214.8 A36,36 0 0 1 209.8,233.1" fill="none" stroke="url(#ea-gold)" strokeWidth="8" />
          <circle cx="178" cy="250" r="40.5" fill="none" stroke="#fff6d6" strokeWidth="1.2" opacity="0.6" />
          <circle cx="222" cy="250" r="40.5" fill="none" stroke="#fff6d6" strokeWidth="1.2" opacity="0.6" />
          <polygon points="222,196 233,206 222,222 211,206" fill="#ffffff" stroke="#9fd0f5" strokeWidth="1.6" />
          <path d="M211,206 L233,206 M222,196 L222,222" stroke="#9fd0f5" strokeWidth="1" opacity="0.8" fill="none" />
        </g>
      </g>
      <g transform="translate(138 198) scale(1)">
        <g className={styles.twinkle} style={{ animationDelay: "0s" }}>
          <path className={styles.star} d="M0,-9 Q1.8,-1.8 9,0 Q1.8,1.8 0,9 Q-1.8,1.8 -9,0 Q-1.8,-1.8 0,-9Z" />
        </g>
      </g>
      <g transform="translate(266 192) scale(0.8)">
        <g className={styles.twinkle} style={{ animationDelay: "0.7s" }}>
          <path className={styles.star} d="M0,-9 Q1.8,-1.8 9,0 Q1.8,1.8 0,9 Q-1.8,1.8 -9,0 Q-1.8,-1.8 0,-9Z" />
        </g>
      </g>
      <g transform="translate(146 306) scale(0.7)">
        <g className={styles.twinkle} style={{ animationDelay: "1.2s" }}>
          <path className={styles.star} d="M0,-9 Q1.8,-1.8 9,0 Q1.8,1.8 0,9 Q-1.8,1.8 -9,0 Q-1.8,-1.8 0,-9Z" />
        </g>
      </g>
      <g transform="translate(258 304) scale(1)">
        <g className={styles.twinkle} style={{ animationDelay: "0.3s" }}>
          <path className={styles.star} d="M0,-9 Q1.8,-1.8 9,0 Q1.8,1.8 0,9 Q-1.8,1.8 -9,0 Q-1.8,-1.8 0,-9Z" />
        </g>
      </g>
      <g transform="translate(200 168) scale(0.7)">
        <g className={styles.twinkle} style={{ animationDelay: "1.6s" }}>
          <path className={styles.star} d="M0,-9 Q1.8,-1.8 9,0 Q1.8,1.8 0,9 Q-1.8,1.8 -9,0 Q-1.8,-1.8 0,-9Z" />
        </g>
      </g>
      <g transform="translate(84 274) scale(0.6)">
        <g className={styles.twinkle} style={{ animationDelay: "0.9s" }}>
          <path className={styles.star} d="M0,-9 Q1.8,-1.8 9,0 Q1.8,1.8 0,9 Q-1.8,1.8 -9,0 Q-1.8,-1.8 0,-9Z" />
        </g>
      </g>
      <g transform="translate(318 300) scale(0.7)">
        <g className={styles.twinkle} style={{ animationDelay: "1.8s" }}>
          <path className={styles.star} d="M0,-9 Q1.8,-1.8 9,0 Q1.8,1.8 0,9 Q-1.8,1.8 -9,0 Q-1.8,-1.8 0,-9Z" />
        </g>
      </g>
      <g transform="translate(84.8 225.9) scale(1.1)">
        <g className={styles.floatUp} style={{ animationDelay: "0s" }}>
          <path className={styles.hA} d="M12 21C5 15 1 11.6 1 7.2 1 4 3.5 1.6 6.6 1.6c2 0 4 1 5.4 3 1.4-2 3.4-3 5.4-3C20.5 1.6 23 4 23 7.2 23 11.6 19 15 12 21z" />
        </g>
      </g>
      <g transform="translate(295.2 216.1) scale(0.9)">
        <g className={styles.floatUp} style={{ animationDelay: "1.1s" }}>
          <path className={styles.hB} d="M12 21C5 15 1 11.6 1 7.2 1 4 3.5 1.6 6.6 1.6c2 0 4 1 5.4 3 1.4-2 3.4-3 5.4-3C20.5 1.6 23 4 23 7.2 23 11.6 19 15 12 21z" />
        </g>
      </g>
      <g transform="translate(60.4 297.2) scale(0.8)">
        <g className={styles.floatUp} style={{ animationDelay: "2.0s" }}>
          <path className={styles.hB} d="M12 21C5 15 1 11.6 1 7.2 1 4 3.5 1.6 6.6 1.6c2 0 4 1 5.4 3 1.4-2 3.4-3 5.4-3C20.5 1.6 23 4 23 7.2 23 11.6 19 15 12 21z" />
        </g>
      </g>
      <g transform="translate(324 325) scale(1)">
        <g className={styles.floatUp} style={{ animationDelay: "0.6s" }}>
          <path className={styles.hA} d="M12 21C5 15 1 11.6 1 7.2 1 4 3.5 1.6 6.6 1.6c2 0 4 1 5.4 3 1.4-2 3.4-3 5.4-3C20.5 1.6 23 4 23 7.2 23 11.6 19 15 12 21z" />
        </g>
      </g>
      <g transform="translate(151.6 322.3) scale(0.7)">
        <g className={styles.floatUp} style={{ animationDelay: "1.7s" }}>
          <path className={styles.hA} d="M12 21C5 15 1 11.6 1 7.2 1 4 3.5 1.6 6.6 1.6c2 0 4 1 5.4 3 1.4-2 3.4-3 5.4-3C20.5 1.6 23 4 23 7.2 23 11.6 19 15 12 21z" />
        </g>
      </g>
      <g transform="translate(226.4 343.2) scale(0.8)">
        <g className={styles.floatUp} style={{ animationDelay: "0.9s" }}>
          <path className={styles.hB} d="M12 21C5 15 1 11.6 1 7.2 1 4 3.5 1.6 6.6 1.6c2 0 4 1 5.4 3 1.4-2 3.4-3 5.4-3C20.5 1.6 23 4 23 7.2 23 11.6 19 15 12 21z" />
        </g>
      </g>
      <g>
        <use href="#ea-leaf" transform="translate(26 694) scale(1.1) rotate(-20)" />
        <use href="#ea-leaf" transform="translate(6.4 676) scale(1) rotate(-50)" />
        <use href="#ea-leaf" transform="translate(34.4 666) scale(0.9) rotate(10)" />
        <g className={styles.d1} transform="translate(22 690) scale(2.2)">
          <use href="#ea-daisy" />
        </g>
        <g className={styles.d2} transform="translate(-4 682) scale(1.7)">
          <use href="#ea-daisy" />
        </g>
        <g className={styles.d3} transform="translate(12 662) scale(1.5)">
          <use href="#ea-daisy" />
        </g>
      </g>
      <g>
        <use href="#ea-leaf" transform="translate(374 694) scale(1.1) rotate(20)" />
        <use href="#ea-leaf" transform="translate(393.6 676) scale(1) rotate(50)" />
        <use href="#ea-leaf" transform="translate(365.6 666) scale(0.9) rotate(-10)" />
        <g className={styles.d1} transform="translate(378 690) scale(2.2)">
          <use href="#ea-daisy" />
        </g>
        <g className={styles.d2} transform="translate(404 682) scale(1.7)">
          <use href="#ea-daisy" />
        </g>
        <g className={styles.d3} transform="translate(388 662) scale(1.5)">
          <use href="#ea-daisy" />
        </g>
      </g>
    </svg>
  );
}

export function WeddingArt() {
  return (
    <svg viewBox="0 0 400 700" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" focusable="false">
      <defs>
        <g id="wa-mari">
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(0)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(45)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(90)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(135)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(180)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(225)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(270)" />
          <ellipse cx="0" cy="-6.2" rx="3.6" ry="6.2" fill="#f2a33a" transform="rotate(315)" />
          <ellipse cx="0" cy="-3.6" rx="2.8" ry="4.4" fill="#ffc65c" transform="rotate(30)" />
          <ellipse cx="0" cy="-3.6" rx="2.8" ry="4.4" fill="#ffc65c" transform="rotate(90)" />
          <ellipse cx="0" cy="-3.6" rx="2.8" ry="4.4" fill="#ffc65c" transform="rotate(150)" />
          <ellipse cx="0" cy="-3.6" rx="2.8" ry="4.4" fill="#ffc65c" transform="rotate(210)" />
          <ellipse cx="0" cy="-3.6" rx="2.8" ry="4.4" fill="#ffc65c" transform="rotate(270)" />
          <ellipse cx="0" cy="-3.6" rx="2.8" ry="4.4" fill="#ffc65c" transform="rotate(330)" />
          <circle r="2.4" fill="#d96a0a" />
        </g>
        <g id="wa-jas">
          <ellipse cx="0" cy="-5" rx="2.8" ry="5" fill="#fffdf7" stroke="#d9c7ee" strokeWidth="0.6" transform="rotate(0)" />
          <ellipse cx="0" cy="-5" rx="2.8" ry="5" fill="#fffdf7" stroke="#d9c7ee" strokeWidth="0.6" transform="rotate(60)" />
          <ellipse cx="0" cy="-5" rx="2.8" ry="5" fill="#fffdf7" stroke="#d9c7ee" strokeWidth="0.6" transform="rotate(120)" />
          <ellipse cx="0" cy="-5" rx="2.8" ry="5" fill="#fffdf7" stroke="#d9c7ee" strokeWidth="0.6" transform="rotate(180)" />
          <ellipse cx="0" cy="-5" rx="2.8" ry="5" fill="#fffdf7" stroke="#d9c7ee" strokeWidth="0.6" transform="rotate(240)" />
          <ellipse cx="0" cy="-5" rx="2.8" ry="5" fill="#fffdf7" stroke="#d9c7ee" strokeWidth="0.6" transform="rotate(300)" />
          <circle r="1.8" fill="#f3d37a" />
        </g>
        <g id="wa-daisy">
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(0)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(45)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(90)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(135)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(180)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(225)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(270)" />
          <ellipse className={styles.pet} cx="0" cy="-6.4" rx="3.1" ry="5.6" transform="rotate(315)" />
          <circle className={styles.fc} r="3.2" />
        </g>
        <g id="wa-leaf">
          <path d="M0,0 C6,-8 6,-20 0,-28 C-6,-20 -6,-8 0,0Z" fill="#6fa36a" />
          <path d="M0,-2 L0,-24" stroke="#4f8a52" strokeWidth="1" fill="none" />
        </g>
        <linearGradient id="wa-sky" x1="0" y1="0" x2="0" y2="1">
          <stop className={styles.stTop} offset="0" />
          <stop className={styles.stMid} offset="0.6" />
          <stop className={styles.stBot} offset="1" />
        </linearGradient>
        <radialGradient id="wa-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wa-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6e3a1" />
          <stop offset="0.5" stopColor="#d9b256" />
          <stop offset="1" stopColor="#b88a2e" />
        </linearGradient>
        <g id="wa-dove">
          <path d="M2,12 L-10,17 L-7,10 L3,7 Z" fill="#f1ecf7" stroke="#c9bfd9" strokeWidth="0.8" />
          <ellipse cx="19" cy="11" rx="15" ry="7.5" fill="#ffffff" stroke="#c9bfd9" strokeWidth="0.8" />
          <circle cx="34" cy="6" r="5.4" fill="#ffffff" stroke="#c9bfd9" strokeWidth="0.8" />
          <path d="M38.5,5 L45,7.2 L38.5,9 Z" fill="#f2a33a" />
          <circle cx="35.5" cy="5" r="0.9" fill="#3a2d4a" />
          <path d="M10,9 Q5,-12 27,-15 Q24,-2 21,11 Z" fill="#ffffff" stroke="#c9bfd9" strokeWidth="0.8" />
          <path d="M14,8 Q12,-4 22,-9" fill="none" stroke="#e1d8ee" strokeWidth="1" />
        </g>
      </defs>
      <rect width="400" height="700" fill="url(#wa-sky)" />
      <circle cx="200" cy="190" r="200" fill="url(#wa-glow)" />
      <g className={styles.mandala}>
        <circle className={styles.sLine} cx="200" cy="190" r="150" />
        <circle className={styles.sLine} cx="200" cy="190" r="136" />
        <circle className={styles.sLine} cx="200" cy="190" r="122" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(0.0 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(22.5 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(45.0 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(67.5 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(90.0 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(112.5 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(135.0 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(157.5 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(180.0 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(202.5 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(225.0 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(247.5 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(270.0 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(292.5 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(315.0 200 190)" />
        <ellipse className={styles.sLine} cx="200" cy="22" rx="9" ry="17" transform="rotate(337.5 200 190)" />
      </g>
      <path d="M82,334 L82,200 A118,118 0 0 1 318,200 L318,334" fill="none" stroke="url(#wa-gold)" strokeWidth="14" strokeLinecap="round" />
      <path d="M91,334 L91,200 A109,109 0 0 1 309,200 L309,334" fill="none" stroke="#ffffff" strokeWidth="1.6" opacity="0.7" />
      <rect x="65" y="326" width="34" height="11" rx="3" fill="url(#wa-gold)" />
      <rect x="301" y="326" width="34" height="11" rx="3" fill="url(#wa-gold)" />
      <g className={styles.sway} style={{ animationDelay: "0.2s" }}>
        <use href="#wa-leaf" transform="translate(82 200) scale(0.6) rotate(-115)" />
        <use href="#wa-leaf" transform="translate(83.8 179.5) scale(0.6) rotate(-55)" />
        <use href="#wa-leaf" transform="translate(89.1 159.6) scale(0.6) rotate(-95)" />
        <use href="#wa-leaf" transform="translate(97.8 141) scale(0.6) rotate(-35)" />
        <use href="#wa-leaf" transform="translate(109.6 124.2) scale(0.6) rotate(-75)" />
        <use href="#wa-leaf" transform="translate(124.2 109.6) scale(0.6) rotate(-15)" />
        <use href="#wa-leaf" transform="translate(141 97.8) scale(0.6) rotate(-55)" />
        <use href="#wa-leaf" transform="translate(159.6 89.1) scale(0.6) rotate(5)" />
        <use href="#wa-leaf" transform="translate(179.5 83.8) scale(0.6) rotate(-35)" />
        <use href="#wa-leaf" transform="translate(200 82) scale(0.6) rotate(25)" />
        <use href="#wa-leaf" transform="translate(220.5 83.8) scale(0.6) rotate(-15)" />
        <use href="#wa-leaf" transform="translate(240.4 89.1) scale(0.6) rotate(45)" />
        <use href="#wa-leaf" transform="translate(259 97.8) scale(0.6) rotate(5)" />
        <use href="#wa-leaf" transform="translate(275.8 109.6) scale(0.6) rotate(65)" />
        <use href="#wa-leaf" transform="translate(290.4 124.2) scale(0.6) rotate(25)" />
        <use href="#wa-leaf" transform="translate(302.2 141) scale(0.6) rotate(85)" />
        <use href="#wa-leaf" transform="translate(310.9 159.6) scale(0.6) rotate(45)" />
        <use href="#wa-leaf" transform="translate(316.2 179.5) scale(0.6) rotate(105)" />
        <use href="#wa-leaf" transform="translate(318 200) scale(0.6) rotate(65)" />
        <use href="#wa-mari" transform="translate(82 200) scale(1.1)" />
        <use href="#wa-jas" transform="translate(83.8 179.5) scale(1)" />
        <use href="#wa-mari" transform="translate(89.1 159.6) scale(1.1)" />
        <use href="#wa-jas" transform="translate(97.8 141) scale(1)" />
        <use href="#wa-mari" transform="translate(109.6 124.2) scale(1.1)" />
        <use href="#wa-jas" transform="translate(124.2 109.6) scale(1)" />
        <use href="#wa-mari" transform="translate(141 97.8) scale(1.1)" />
        <use href="#wa-jas" transform="translate(159.6 89.1) scale(1)" />
        <use href="#wa-mari" transform="translate(179.5 83.8) scale(1.1)" />
        <use href="#wa-jas" transform="translate(200 82) scale(1)" />
        <use href="#wa-mari" transform="translate(220.5 83.8) scale(1.1)" />
        <use href="#wa-jas" transform="translate(240.4 89.1) scale(1)" />
        <use href="#wa-mari" transform="translate(259 97.8) scale(1.1)" />
        <use href="#wa-jas" transform="translate(275.8 109.6) scale(1)" />
        <use href="#wa-mari" transform="translate(290.4 124.2) scale(1.1)" />
        <use href="#wa-jas" transform="translate(302.2 141) scale(1)" />
        <use href="#wa-mari" transform="translate(310.9 159.6) scale(1.1)" />
        <use href="#wa-jas" transform="translate(316.2 179.5) scale(1)" />
        <use href="#wa-mari" transform="translate(318 200) scale(1.1)" />
      </g>
      <g className={styles.sway} transform="translate(90.6 155.8)" style={{ animationDelay: "0s" }}>
        <g className={styles.swayIn} style={{ animationDelay: "0s" }}>
          <line x1="0" y1="0" x2="0" y2="70" stroke="#8a6a2b" strokeWidth="1.2" />
          <use href="#wa-mari" transform="translate(0 9) scale(0.6)" />
          <use href="#wa-jas" transform="translate(0 22) scale(0.6)" />
          <use href="#wa-mari" transform="translate(0 35) scale(0.6)" />
          <use href="#wa-jas" transform="translate(0 48) scale(0.6)" />
          <use href="#wa-mari" transform="translate(0 61) scale(0.6)" />
          <g transform="translate(0 70)">
            <path d="M-6.5,0 C-6.5,-8 -3,-11 0,-11 C3,-11 6.5,-8 6.5,0 Z" fill="#e0b84a" stroke="#a97c1c" strokeWidth="0.7" />
            <rect x="-7.5" y="0" width="15" height="2.4" rx="1.2" fill="#a97c1c" />
            <circle cy="5.4" r="2.2" fill="#f1d98a" />
          </g>
        </g>
      </g>
      <g className={styles.sway} transform="translate(121 112.3)" style={{ animationDelay: "0.8s" }}>
        <g className={styles.swayIn} style={{ animationDelay: "0.8s" }}>
          <line x1="0" y1="0" x2="0" y2="52" stroke="#8a6a2b" strokeWidth="1.2" />
          <use href="#wa-mari" transform="translate(0 9) scale(0.6)" />
          <use href="#wa-jas" transform="translate(0 22) scale(0.6)" />
          <use href="#wa-mari" transform="translate(0 35) scale(0.6)" />
          <use href="#wa-jas" transform="translate(0 48) scale(0.6)" />
          <g transform="translate(0 52)">
            <path d="M-6.5,0 C-6.5,-8 -3,-11 0,-11 C3,-11 6.5,-8 6.5,0 Z" fill="#e0b84a" stroke="#a97c1c" strokeWidth="0.7" />
            <rect x="-7.5" y="0" width="15" height="2.4" rx="1.2" fill="#a97c1c" />
            <circle cy="5.4" r="2.2" fill="#f1d98a" />
          </g>
        </g>
      </g>
      <g className={styles.sway} transform="translate(279 112.3)" style={{ animationDelay: "1.4s" }}>
        <g className={styles.swayIn} style={{ animationDelay: "1.4s" }}>
          <line x1="0" y1="0" x2="0" y2="52" stroke="#8a6a2b" strokeWidth="1.2" />
          <use href="#wa-mari" transform="translate(0 9) scale(0.6)" />
          <use href="#wa-jas" transform="translate(0 22) scale(0.6)" />
          <use href="#wa-mari" transform="translate(0 35) scale(0.6)" />
          <use href="#wa-jas" transform="translate(0 48) scale(0.6)" />
          <g transform="translate(0 52)">
            <path d="M-6.5,0 C-6.5,-8 -3,-11 0,-11 C3,-11 6.5,-8 6.5,0 Z" fill="#e0b84a" stroke="#a97c1c" strokeWidth="0.7" />
            <rect x="-7.5" y="0" width="15" height="2.4" rx="1.2" fill="#a97c1c" />
            <circle cy="5.4" r="2.2" fill="#f1d98a" />
          </g>
        </g>
      </g>
      <g className={styles.sway} transform="translate(309.4 155.8)" style={{ animationDelay: "0.4s" }}>
        <g className={styles.swayIn} style={{ animationDelay: "0.4s" }}>
          <line x1="0" y1="0" x2="0" y2="70" stroke="#8a6a2b" strokeWidth="1.2" />
          <use href="#wa-mari" transform="translate(0 9) scale(0.6)" />
          <use href="#wa-jas" transform="translate(0 22) scale(0.6)" />
          <use href="#wa-mari" transform="translate(0 35) scale(0.6)" />
          <use href="#wa-jas" transform="translate(0 48) scale(0.6)" />
          <use href="#wa-mari" transform="translate(0 61) scale(0.6)" />
          <g transform="translate(0 70)">
            <path d="M-6.5,0 C-6.5,-8 -3,-11 0,-11 C3,-11 6.5,-8 6.5,0 Z" fill="#e0b84a" stroke="#a97c1c" strokeWidth="0.7" />
            <rect x="-7.5" y="0" width="15" height="2.4" rx="1.2" fill="#a97c1c" />
            <circle cy="5.4" r="2.2" fill="#f1d98a" />
          </g>
        </g>
      </g>
      <g transform="translate(200 82)">
        <g className={styles.sway} style={{ animationDelay: "0.6s" }}>
          <line x1="0" y1="0" x2="0" y2="34" stroke="#8a6a2b" strokeWidth="1.2" />
          <g transform="translate(-13 30) scale(1.1)">
            <g className={styles.pulse}>
              <path className={styles.hB} d="M12 21C5 15 1 11.6 1 7.2 1 4 3.5 1.6 6.6 1.6c2 0 4 1 5.4 3 1.4-2 3.4-3 5.4-3C20.5 1.6 23 4 23 7.2 23 11.6 19 15 12 21z" />
            </g>
          </g>
        </g>
      </g>
      <g transform="translate(200 70)">
        <path className={styles.lotus} d="M0,10 C-8,-2 -8,-16 0,-30 C8,-16 8,-2 0,10Z" transform="rotate(-48 0 10) scale(0.85)" />
        <path className={styles.lotus} d="M0,10 C-8,-2 -8,-16 0,-30 C8,-16 8,-2 0,10Z" transform="rotate(48 0 10) scale(0.85)" />
        <path className={styles.lotus} d="M0,10 C-8,-2 -8,-16 0,-30 C8,-16 8,-2 0,10Z" transform="rotate(-24 0 10) scale(0.95)" />
        <path className={styles.lotus} d="M0,10 C-8,-2 -8,-16 0,-30 C8,-16 8,-2 0,10Z" transform="rotate(24 0 10) scale(0.95)" />
        <path className={styles.lotus} d="M0,10 C-9,-4 -9,-20 0,-38 C9,-20 9,-4 0,10Z" />
      </g>
      <g transform="translate(118 224) scale(1.15)">
        <g className={styles.hover} style={{ animationDelay: "0s" }}>
          <use href="#wa-dove" transform="translate(0 0) scale(1)" />
        </g>
      </g>
      <g transform="translate(282 224) scale(-1.15 1.15)">
        <g className={styles.hover} style={{ animationDelay: "0.9s" }}>
          <use href="#wa-dove" transform="translate(0 0) scale(1)" />
        </g>
      </g>
      <g transform="translate(184 223) scale(1.4)">
        <g className={styles.pulse} style={{ animationDelay: "0.2s" }}>
          <path className={styles.hA} d="M12 21C5 15 1 11.6 1 7.2 1 4 3.5 1.6 6.6 1.6c2 0 4 1 5.4 3 1.4-2 3.4-3 5.4-3C20.5 1.6 23 4 23 7.2 23 11.6 19 15 12 21z" />
        </g>
      </g>
      <g transform="translate(66 150) scale(0.8)">
        <g className={styles.twinkle} style={{ animationDelay: "0s" }}>
          <path className={styles.star} d="M0,-9 Q1.8,-1.8 9,0 Q1.8,1.8 0,9 Q-1.8,1.8 -9,0 Q-1.8,-1.8 0,-9Z" />
        </g>
      </g>
      <g transform="translate(336 176) scale(0.9)">
        <g className={styles.twinkle} style={{ animationDelay: "0.8s" }}>
          <path className={styles.star} d="M0,-9 Q1.8,-1.8 9,0 Q1.8,1.8 0,9 Q-1.8,1.8 -9,0 Q-1.8,-1.8 0,-9Z" />
        </g>
      </g>
      <g transform="translate(52 300) scale(0.6)">
        <g className={styles.twinkle} style={{ animationDelay: "1.4s" }}>
          <path className={styles.star} d="M0,-9 Q1.8,-1.8 9,0 Q1.8,1.8 0,9 Q-1.8,1.8 -9,0 Q-1.8,-1.8 0,-9Z" />
        </g>
      </g>
      <g transform="translate(350 300) scale(0.7)">
        <g className={styles.twinkle} style={{ animationDelay: "0.5s" }}>
          <path className={styles.star} d="M0,-9 Q1.8,-1.8 9,0 Q1.8,1.8 0,9 Q-1.8,1.8 -9,0 Q-1.8,-1.8 0,-9Z" />
        </g>
      </g>
      <g transform="translate(200 150) scale(0.6)">
        <g className={styles.twinkle} style={{ animationDelay: "1.1s" }}>
          <path className={styles.star} d="M0,-9 Q1.8,-1.8 9,0 Q1.8,1.8 0,9 Q-1.8,1.8 -9,0 Q-1.8,-1.8 0,-9Z" />
        </g>
      </g>
      <g transform="translate(37.2 226.1) scale(0.9)">
        <g className={styles.floatUp} style={{ animationDelay: "0.3s" }}>
          <path className={styles.hB} d="M12 21C5 15 1 11.6 1 7.2 1 4 3.5 1.6 6.6 1.6c2 0 4 1 5.4 3 1.4-2 3.4-3 5.4-3C20.5 1.6 23 4 23 7.2 23 11.6 19 15 12 21z" />
        </g>
      </g>
      <g transform="translate(342 237) scale(1)">
        <g className={styles.floatUp} style={{ animationDelay: "1.3s" }}>
          <path className={styles.hA} d="M12 21C5 15 1 11.6 1 7.2 1 4 3.5 1.6 6.6 1.6c2 0 4 1 5.4 3 1.4-2 3.4-3 5.4-3C20.5 1.6 23 4 23 7.2 23 11.6 19 15 12 21z" />
        </g>
      </g>
      <g transform="translate(69.6 322.3) scale(0.7)">
        <g className={styles.floatUp} style={{ animationDelay: "2.1s" }}>
          <path className={styles.hA} d="M12 21C5 15 1 11.6 1 7.2 1 4 3.5 1.6 6.6 1.6c2 0 4 1 5.4 3 1.4-2 3.4-3 5.4-3C20.5 1.6 23 4 23 7.2 23 11.6 19 15 12 21z" />
        </g>
      </g>
      <g>
        <use href="#wa-leaf" transform="translate(26 694) scale(1.1) rotate(-20)" />
        <use href="#wa-leaf" transform="translate(6.4 676) scale(1) rotate(-50)" />
        <use href="#wa-leaf" transform="translate(34.4 666) scale(0.9) rotate(10)" />
        <g className={styles.d2} transform="translate(22 690) scale(2.2)">
          <use href="#wa-daisy" />
        </g>
        <g className={styles.d1} transform="translate(-4 682) scale(1.7)">
          <use href="#wa-daisy" />
        </g>
        <g className={styles.d3} transform="translate(12 662) scale(1.5)">
          <use href="#wa-daisy" />
        </g>
      </g>
      <g>
        <use href="#wa-leaf" transform="translate(374 694) scale(1.1) rotate(20)" />
        <use href="#wa-leaf" transform="translate(393.6 676) scale(1) rotate(50)" />
        <use href="#wa-leaf" transform="translate(365.6 666) scale(0.9) rotate(-10)" />
        <g className={styles.d2} transform="translate(378 690) scale(2.2)">
          <use href="#wa-daisy" />
        </g>
        <g className={styles.d1} transform="translate(404 682) scale(1.7)">
          <use href="#wa-daisy" />
        </g>
        <g className={styles.d3} transform="translate(388 662) scale(1.5)">
          <use href="#wa-daisy" />
        </g>
      </g>
    </svg>
  );
}
