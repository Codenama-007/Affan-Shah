"use client";

import { useRef, useEffect, useState } from "react";

export default function SkillBar({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: visible ? `${level}%` : "0%" }}
      />
    </div>
  );
}
