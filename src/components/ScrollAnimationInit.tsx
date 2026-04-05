"use client";

import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Client component that initializes the scroll animation observer
 * and handles hash-based scrolling. Extracted from the old Index.tsx.
 */
export default function ScrollAnimationInit() {
  useScrollAnimation();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  }, []);

  return null;
}
