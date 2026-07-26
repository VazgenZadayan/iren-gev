"use client";

import { useEffect, useRef } from "react";

const PATH_D =
  "M20 8 C20 40, 30 70, 30 110 C30 155, 10 190, 10 240 C10 295, 30 330, 30 380 C30 400, 20 412, 20 418";

export function JourneyRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    const path = pathRef.current;
    const marker = markerRef.current;
    if (!rail || !path || !marker) return;

    const svg = path.ownerSVGElement;
    if (!svg) return;

    let frame = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const railRect = rail.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      const start = vh * 0.75;
      const end = vh * 0.25;
      const raw =
        (start - railRect.top) / Math.max(start - end + railRect.height, 1);
      const progress = Math.min(1, Math.max(0, raw));

      const length = path.getTotalLength();
      if (!length) return;

      const point = path.getPointAtLength(length * progress);
      const ctm = path.getScreenCTM();
      if (!ctm) {
        const y = progress * Math.max(rail.clientHeight - 20, 0);
        marker.style.transform = `translate(-50%, ${y}px)`;
        marker.style.left = "50%";
        marker.style.top = "0";
        return;
      }

      const svgPoint = svg.createSVGPoint();
      svgPoint.x = point.x;
      svgPoint.y = point.y;
      const screen = svgPoint.matrixTransform(ctm);

      const x = screen.x - railRect.left;
      const y = screen.y - railRect.top;
      marker.style.left = "0";
      marker.style.top = "0";
      marker.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    document.addEventListener("scroll", requestUpdate, {
      passive: true,
      capture: true,
    });

    const observer = new IntersectionObserver(requestUpdate, {
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    });
    observer.observe(rail);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      document.removeEventListener("scroll", requestUpdate, true);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="journey__rail" ref={railRef} aria-hidden>
      <svg
        className="journey__path"
        viewBox="0 0 40 420"
        preserveAspectRatio="none"
      >
        <path ref={pathRef} d={PATH_D} fill="none" />
      </svg>

      <span className="journey__couple-wrap" ref={markerRef}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="journey__couple-icon"
          src="/couple.png"
          alt=""
          width={56}
          height={56}
          draggable={false}
        />
      </span>

      {/* Heart version (rollback):
      <span className="journey__heart-wrap" ref={markerRef}>
        <span className="journey__heart" />
      </span>
      */}
    </div>
  );
}
