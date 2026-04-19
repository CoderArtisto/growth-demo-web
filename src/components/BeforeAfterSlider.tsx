import { useState, useRef } from "react";

const BEFORE_SRC = "/yellowTeeths.jpg";
const AFTER_SRC = "/whiteTeeths.png";

const BeforeAfterSlider = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] max-w-2xl mx-auto rounded-2xl overflow-hidden cursor-col-resize select-none shadow-lg"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* Before (full width, underneath) */}
      <div className="absolute inset-0">
        <img src={BEFORE_SRC} alt="Before — teeth before treatment" className="h-full w-full object-cover" draggable={false} />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm">
          Before
        </span>
      </div>

      {/* After (clipped from the right; left side reveals the after image) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src={AFTER_SRC} alt="After — teeth after treatment" className="h-full w-full object-cover" draggable={false} />
        <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm">
          After
        </span>
      </div>

      {/* Slider line */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-gold z-10 pointer-events-none" style={{ left: `${position}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold text-primary-foreground flex items-center justify-center shadow-lg text-xs font-bold pointer-events-auto">
          ⟷
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
