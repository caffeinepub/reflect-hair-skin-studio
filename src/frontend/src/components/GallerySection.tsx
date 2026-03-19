import { useCallback, useRef, useState } from "react";

export default function GallerySection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 5), 95));
  }, []);

  const onMouseDown = () => {
    dragging.current = true;
  };
  const onMouseUp = () => {
    dragging.current = false;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) updatePos(e.clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    updatePos(e.touches[0].clientX);
  };

  return (
    // IMPROVEMENT 2: Gallery is functional — tighter padding
    <section id="gallery" className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          {/* IMPROVEMENT 1: Eyebrow with hairlines */}
          <div className="eyebrow-wrap">
            <p
              className="section-eyebrow"
              style={{ color: "oklch(0.74 0.07 60)" }}
            >
              TRANSFORMATION GALLERY
            </p>
          </div>
          <h2
            className="font-playfair font-bold"
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              color: "oklch(0.74 0.07 60)",
              letterSpacing: "-0.03em",
            }}
          >
            See The Difference
          </h2>
        </div>

        <div
          ref={containerRef}
          className="before-after-container reveal"
          style={{ height: "520px", maxWidth: "800px", margin: "0 auto" }}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
          data-ocid="gallery.canvas_target"
        >
          <img
            src="/assets/generated/transform-after.dim_800x600.jpg"
            alt="After transformation"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/assets/generated/transform-before.dim_800x600.jpg"
              alt="Before transformation"
              className="absolute inset-0 h-full object-cover"
              style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
              draggable={false}
            />
          </div>

          <div
            className="absolute top-5 left-5 font-inter text-xs tracking-[0.3em] px-3 py-1.5"
            style={{
              background: "rgba(0,0,0,0.65)",
              color: "oklch(0.9 0.01 60)",
            }}
          >
            BEFORE
          </div>
          <div
            className="absolute top-5 right-5 font-inter text-xs tracking-[0.3em] px-3 py-1.5"
            style={{
              background: "oklch(0.74 0.07 60 / 0.92)",
              color: "oklch(0.1 0 0)",
            }}
          >
            AFTER
          </div>

          <div className="slider-divider" style={{ left: `${sliderPos}%` }}>
            <div className="slider-handle">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <title>Drag handle</title>
                <path
                  d="M7 4l-4 6 4 6M13 4l4 6-4 6"
                  stroke="oklch(0.1 0 0)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          <input
            type="range"
            min="5"
            max="95"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="before-after-slider"
            aria-label="Before and after comparison slider"
          />
        </div>

        <p
          className="text-center font-inter mt-6"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            color: "oklch(0.42 0.01 60)",
          }}
        >
          DRAG TO COMPARE
        </p>
      </div>
    </section>
  );
}
