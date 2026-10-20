"use client";

import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type RevealVariant = "up" | "left" | "scale";

interface RevealProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  /** Stagger in milliseconds. Pair with the 60ms rhythm used across sections. */
  delay?: number;
  variant?: RevealVariant;
  as?: "div" | "section" | "li" | "article" | "header" | "span" | "p" | "h2" | "h3";
}

/**
 * Entrance animation driven by IntersectionObserver.
 *
 * The observer disconnects after the first intersection — content never
 * hides again on scroll-up, which keeps long pages from flickering when a
 * visitor scrubs backwards.
 *
 * The hidden state is gated on `.js` in globals.css, so if the bundle fails
 * to load, every element renders at its final state instead of staying
 * invisible.
 */
export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  className = "",
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      node.dataset.revealed = "true";
      return;
    }

    // No IntersectionObserver: reveal immediately rather than hide forever.
    if (typeof IntersectionObserver === "undefined") {
      node.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.dataset.revealed = "true";
        observer.disconnect();
      },
      {
        threshold: 0.12,
        // Start the reveal slightly before the element's top hits the fold.
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Comp = Tag as ElementType;

  return (
    <Comp
      ref={ref}
      data-reveal={variant}
      data-revealed="false"
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}