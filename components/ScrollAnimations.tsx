"use client";
import { useEffect } from "react";

const STAGGER_MS = 60;

export default function ScrollAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (!prefersReducedMotion) {
            const parent = el.parentElement;
            if (parent) {
              const siblings = Array.from(
                parent.querySelectorAll(":scope > .fade-up")
              );
              const index = siblings.indexOf(el);
              if (index > 0) {
                el.style.transitionDelay = `${index * STAGGER_MS}ms`;
              }
            }
          }
          el.classList.add("visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
