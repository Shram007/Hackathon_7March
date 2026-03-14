/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SkipForward } from 'lucide-react';

// ─── Typewriter hook ─────────────────────────────────────────────────────────
function useTypewriter(text: string, speed = 22): string {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    if (!text) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return displayed;
}

// ─── Atlas Avatar SVG ─────────────────────────────────────────────────────────
// Compass-rose avatar — rendered INSIDE the D3 zoom <g> so it moves with the map.
export interface AvatarSVGProps {
  projX: number;
  projY: number;
  k: number;
  isNarrating?: boolean;
  isChatOpen?: boolean;
  onChatToggle: () => void;
}

export const AvatarSVG: React.FC<AvatarSVGProps> = ({
  projX,
  projY,
  k,
  isNarrating = false,
  isChatOpen = false,
  onChatToggle,
}) => {
  const [hovered, setHovered] = useState(false);

  // Safety check for zoom scale k
  const safeK = (typeof k === 'number' && k > 0) ? k : 1;

  const bodyR = 13 / safeK;
  const innerR = bodyR * 0.62;
  const armLen = innerR * 0.85;
  const pulseR = bodyR * 1.45;

  const accent = isNarrating ? '#C9A84C' : '#2D7A5F';

  return (
    <motion.g
      animate={{ x: projX, y: projY }}
      transition={{
        x: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
      }}
      style={{ cursor: 'pointer' }}
      onClick={onChatToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer pulsing ring */}
      <motion.circle
        r={pulseR}
        fill="none"
        stroke={accent}
        strokeWidth={0.8 / safeK}
        animate={{ r: [pulseR, pulseR * 1.9, pulseR], opacity: [0.38, 0, 0.38] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ pointerEvents: 'none' }}
      />
      <motion.circle
        r={pulseR * 0.7}
        fill="none"
        stroke={accent}
        strokeWidth={0.5 / k}
        animate={{ r: [pulseR * 0.7, pulseR * 1.35, pulseR * 0.7], opacity: [0.25, 0, 0.25] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
        style={{ pointerEvents: 'none' }}
      />

      {/* Scale on hover/open */}
      <motion.g
        animate={{ scale: hovered || isChatOpen ? 1.13 : 1 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: '0px 0px' }}
      >
        {/* Shadow */}
        <circle
          r={bodyR}
          fill="#1A1A1A"
          opacity={0.13}
          transform={`translate(${1.2 / safeK}, ${2 / safeK})`}
          style={{ pointerEvents: 'none' }}
        />

        {/* Main avatar circle */}
        <circle
          r={bodyR}
          fill={isChatOpen ? accent : '#F5F2ED'}
          stroke={accent}
          strokeWidth={2.5 / safeK}
        />

        {/* Inner accent ring */}
        <circle
          r={innerR}
          fill="none"
          stroke={isChatOpen ? 'rgba(245,242,237,0.45)' : accent}
          strokeWidth={0.7 / safeK}
          opacity={0.45}
          style={{ pointerEvents: 'none' }}
        />

        {/* Compass — E/W arm */}
        <line
          x1={-armLen} y1={0} x2={armLen} y2={0}
          stroke={isChatOpen ? '#F5F2ED' : accent}
          strokeWidth={1.2 / safeK}
          strokeLinecap="round"
          opacity={0.75}
          style={{ pointerEvents: 'none' }}
        />

        {/* Compass — S arm */}
        <line
          x1={0} y1={0} x2={0} y2={armLen}
          stroke={isChatOpen ? '#F5F2ED' : accent}
          strokeWidth={1.2 / safeK}
          strokeLinecap="round"
          opacity={0.75}
          style={{ pointerEvents: 'none' }}
        />

        {/* North pointer — filled arrowhead */}
        <polygon
          points={`0,${-armLen * 1.25} ${2.8 / safeK},${-1.5 / safeK} 0,0 ${-2.8 / safeK},${-1.5 / safeK}`}
          fill={isChatOpen ? '#F5F2ED' : accent}
          style={{ pointerEvents: 'none' }}
        />

        {/* Center dot */}
        <circle
          r={2.2 / safeK}
          fill={isChatOpen ? '#F5F2ED' : '#1A1A1A'}
          style={{ pointerEvents: 'none' }}
        />
      </motion.g>

      {/* "ATLAS" caption below avatar */}
      <text
        y={bodyR + 9 / safeK}
        textAnchor="middle"
        fill={accent}
        fontSize={6 / safeK}
        fontFamily="'JetBrains Mono', monospace"
        fontWeight="700"
        letterSpacing={1.5 / safeK}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        ATLAS
      </text>

      {/* Hover / open tooltip */}
      {(hovered || isChatOpen) && (
        <g
          transform={`translate(${bodyR + 7 / safeK}, ${-10 / safeK})`}
          style={{ pointerEvents: 'none' }}
        >
          <rect
            x={0} y={-8 / safeK}
            width={(isChatOpen ? 52 : 70) / safeK}
            height={15 / safeK}
            rx={3 / safeK}
            fill="#1A1A1A"
            opacity={0.88}
          />
          <text
            x={(isChatOpen ? 26 : 35) / safeK}
            y={2.5 / safeK}
            textAnchor="middle"
            fill="#F5F2ED"
            fontSize={7 / safeK}
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="600"
          >
            {isChatOpen ? 'close chat' : 'chat with me →'}
          </text>
        </g>
      )}
    </motion.g>
  );
};

// Backward-compat alias used by existing Map.tsx imports
export const AICursorSVG = AvatarSVG;

// ─── Narration bubble ────────────────────────────────────────────────────────
interface NarrationBubbleProps {
  narration: string;
  isVisible: boolean;
  screenX: number;
  screenY: number;
  screenW: number;
  screenH: number;
  stopIndex: number;
  totalStops: number;
  destinationName: string;
  onSkip: () => void;
}

export const NarrationBubble: React.FC<NarrationBubbleProps> = ({
  narration,
  isVisible,
  screenX,
  screenY,
  screenW,
  screenH,
  stopIndex,
  totalStops,
  destinationName,
  onSkip,
}) => {
  const displayed = useTypewriter(isVisible ? narration : '', 20);

  const BUBBLE_W = 336;
  const BUBBLE_H = 170;
  const OFFSET_Y = 48;

  const placeAbove = screenY > screenH * 0.55;
  const rawLeft = screenX - BUBBLE_W / 2;
  const rawTop = placeAbove ? screenY - BUBBLE_H - OFFSET_Y : screenY + OFFSET_Y;

  const left = Math.max(12, Math.min(rawLeft, screenW - BUBBLE_W - 12));
  const top = Math.max(12, Math.min(rawTop, screenH - BUBBLE_H - 12));

  const tailAbove = !placeAbove;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={`bubble-${stopIndex}`}
          initial={{ opacity: 0, scale: 0.92, y: placeAbove ? 8 : -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: placeAbove ? 8 : -8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'fixed', left, top, width: BUBBLE_W, zIndex: 60 }}
        >
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 ${
              tailAbove
                ? 'bottom-full border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-parchment'
                : 'top-full border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-parchment'
            }`}
            style={{ filter: 'drop-shadow(0 -1px 0 rgba(26,26,26,0.08))' }}
          />
          <div
            className="bg-parchment border border-ink/10 shadow-2xl rounded-xl overflow-hidden"
            style={{ boxShadow: '0 8px 40px rgba(26,26,26,0.18)' }}
          >
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-ink/[0.06] bg-ink/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald/15 border border-emerald/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald" />
                </div>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-ink/50">
                  Atlas · Touring
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalStops }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-full transition-all duration-300 ${
                        i === stopIndex
                          ? 'w-3 h-1.5 bg-emerald'
                          : i < stopIndex
                          ? 'w-1.5 h-1.5 bg-ink/25'
                          : 'w-1.5 h-1.5 bg-ink/10'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={onSkip}
                  className="flex items-center gap-1 text-ink/35 hover:text-ink/70 transition-colors"
                  title="Skip to next"
                >
                  <SkipForward size={12} />
                </button>
              </div>
            </div>
            <div className="px-4 pt-3 pb-1">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald flex-shrink-0" />
                <span className="font-serif text-sm font-semibold text-ink italic">
                  {destinationName}
                </span>
              </div>
              <p className="font-sans text-[12.5px] leading-relaxed text-ink/70 min-h-[3.5rem]">
                {displayed}
                {displayed.length < narration.length && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    className="inline-block w-0.5 h-3.5 bg-emerald ml-0.5 align-text-bottom"
                  />
                )}
              </p>
            </div>
            <div className="px-4 pb-3 pt-1 flex items-center justify-between">
              <span className="font-mono text-[8px] uppercase tracking-widest text-ink/25">
                {stopIndex + 1} of {totalStops}
              </span>
              <span className="font-mono text-[8px] text-ink/25">
                skip to advance →
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
