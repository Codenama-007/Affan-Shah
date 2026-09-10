"use client";

import { useState, useEffect, useRef } from "react";

const phrases = [
  "I BUILD FULL STACK APPLICATIONS.",
  "I BUILD AI SYSTEMS.",
  "I BUILD RAG APPLICATIONS.",
  "I BUILD AGENTIC AI SYSTEMS.",
  "I TURN IDEAS INTO SOFTWARE.",
];

export default function Typewriter() {
  const [displayText, setDisplayText] = useState("");
  const stateRef = useRef({
    phraseIndex: 0,
    charIndex: 0,
    deleting: false,
    timer: null as ReturnType<typeof setTimeout> | null,
  });

  useEffect(() => {
    const s = stateRef.current;

    function tick() {
      const phrase = phrases[s.phraseIndex];

      if (s.timer) clearTimeout(s.timer);

      if (!s.deleting) {
        s.charIndex++;
        setDisplayText(phrase.slice(0, s.charIndex));

        if (s.charIndex === phrase.length) {
          s.timer = setTimeout(() => {
            s.deleting = true;
            tick();
          }, 1500);
          return;
        }
        s.timer = setTimeout(tick, 60);
      } else {
        s.charIndex--;
        setDisplayText(phrase.slice(0, s.charIndex));

        if (s.charIndex === 0) {
          s.deleting = false;
          s.phraseIndex = (s.phraseIndex + 1) % phrases.length;
          s.timer = setTimeout(tick, 400);
          return;
        }
        s.timer = setTimeout(tick, 30);
      }
    }

    const startTimer = setTimeout(tick, 500);
    return () => {
      clearTimeout(startTimer);
      if (s.timer) clearTimeout(s.timer);
    };
  }, []);

  return (
    <span className="text-[#FF6500]">
      {displayText}
      <span className="cursor-blink" />
    </span>
  );
}
