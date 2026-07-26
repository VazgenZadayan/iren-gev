"use client";

import { useEffect, useState } from "react";

/** Wedding ceremony — 5 Sep 2026, 16:00 Yerevan (UTC+4) */
export const WEDDING_AT = new Date("2026-09-05T16:00:00+04:00").getTime();

export type CountdownLabels = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

type Parts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function getParts(now: number): Parts {
  const diff = Math.max(0, WEDDING_AT - now);
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    done: diff <= 0,
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function Countdown({ labels }: { labels: CountdownLabels }) {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(getParts(Date.now()));
    const id = window.setInterval(() => {
      setParts(getParts(Date.now()));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const display = parts ?? { days: 0, hours: 0, minutes: 0, seconds: 0, done: false };

  const items = [
    { value: display.days, label: labels.days },
    { value: display.hours, label: labels.hours, padded: true },
    { value: display.minutes, label: labels.minutes, padded: true },
    { value: display.seconds, label: labels.seconds, padded: true },
  ] as const;

  return (
    <div className="countdown" aria-live="polite">
      {items.map((item) => (
        <div key={item.label} className="countdown__item">
          <span className="countdown__value">
            {"padded" in item && item.padded ? pad(item.value) : item.value}
          </span>
          <span className="countdown__label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
