"use client";

import { useState, useEffect, useCallback } from "react";
import Slide01WakeUpCall from "../components/keynote/Slide01WakeUpCall";
import Slide02ElProblema from "../components/keynote/Slide02ElProblema";
import Slide03ParaTi from "../components/keynote/Slide03ParaTi";
import Slide04ElPrograma from "../components/keynote/Slide04ElPrograma";
import Slide05LaPropuesta from "../components/keynote/Slide05LaPropuesta";
import SlideNavigation from "../components/keynote/SlideNavigation";
import { T } from "../components/keynote/tokens";

const SLIDES = [
  { component: Slide01WakeUpCall, key: "s01" },
  { component: Slide02ElProblema, key: "s02" },
  { component: Slide03ParaTi,     key: "s03" },
  { component: Slide04ElPrograma, key: "s04" },
  { component: Slide05LaPropuesta,key: "s05" },
];

export default function KeynotePage() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, SLIDES.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", " "].includes(e.key)) {
        e.preventDefault();
        goNext();
      }
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const { component: SlideComponent, key } = SLIDES[current];

  return (
    <div
      className="relative w-full h-screen overflow-hidden select-none"
      style={{ background: T.bg }}
    >
      <div key={key} className="slide-enter absolute inset-0">
        <SlideComponent />
      </div>

      <SlideNavigation
        current={current}
        total={SLIDES.length}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
}
