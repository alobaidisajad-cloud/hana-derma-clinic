'use client';

import { useRef, useState, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeGradient: string;
  afterGradient: string;
  beforeLabel: string;
  afterLabel: string;
  treatmentLabel: string;
}

export default function BeforeAfterSlider({
  beforeGradient,
  afterGradient,
  beforeLabel,
  afterLabel,
  treatmentLabel,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden cursor-col-resize select-none touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After (full background) */}
      <div
        className="absolute inset-0"
        style={{ background: afterGradient }}
      />

      {/* After label */}
      <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{ left: `${position + (100 - position) / 2}%`, transform: 'translate(-50%, -50%)' }}
      >
        <span className="bg-white/60 backdrop-blur-sm text-text-primary text-[8px] sm:text-[10px] font-medium px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full tracking-wide uppercase pointer-events-none">
          {afterLabel}
        </span>
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0"
        style={{
          background: beforeGradient,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      />

      {/* Before label */}
      <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{ left: `${position / 2}%`, transform: 'translate(-50%, -50%)' }}
      >
        <span className="bg-white/60 backdrop-blur-sm text-text-primary text-[8px] sm:text-[10px] font-medium px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full tracking-wide uppercase pointer-events-none">
          {beforeLabel}
        </span>
      </div>

      {/* Treatment badge */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 pointer-events-none">
        <span className="bg-text-primary/70 backdrop-blur-sm text-white text-[8px] sm:text-[10px] font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
          {treatmentLabel}
        </span>
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/80 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white shadow-lg border-2 border-blush-dark/30 flex items-center justify-center">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blush-dark/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9,18 15,12 9,6" />
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
