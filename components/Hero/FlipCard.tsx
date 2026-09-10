"use client";

import { useState, useEffect } from "react";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFlipped(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ perspective: "1000px", width: "280px", height: "380px" }}
      className="mx-auto"
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 1s ease-in-out",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Back Card - Shows First */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        >
          <img
            src="/back.webp"
            alt="Card back"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            draggable={false}
          />
        </div>

        {/* Front Card - Shows After Flip */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(0)",
          }}
        >
          <img
            src="/front.webp"
            alt="Card front"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
