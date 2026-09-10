export default function CRTOverlay() {
  return (
    <>
      {/* Scanlines */}
      <div
        className="fixed inset-0 z-[100] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />
      {/* Vignette */}
      <div
        className="fixed inset-0 z-[100] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </>
  );
}
