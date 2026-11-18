"use client";
import { useEffect } from "react";

// Adds the "in" class to [data-reveal] and .stagger elements when they scroll into view.
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal], .stagger");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}