/**
 * A single, quiet scanline texture. It earns the terminal reference without
 * dimming the edges of the page or competing with the text.
 */
export default function CRTOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{
        background:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.018) 2px, rgba(0,0,0,0.018) 4px)",
      }}
    />
  );
}
