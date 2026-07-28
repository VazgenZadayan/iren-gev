"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MUSIC_SRC = "/frank-sinatra-i-love-you-baby.mp3";
const START_AT = 10;

export function MusicPlayer({
  playLabel = "Play music",
  pauseLabel = "Pause music",
}: {
  playLabel?: string;
  pauseLabel?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const started = useRef(false);
  const [playing, setPlaying] = useState(false);

  const tryPlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || started.current) return;
    try {
      audio.currentTime = START_AT;
      await audio.play();
      started.current = true;
    } catch {
      // Still blocked — wait for next gesture
    }
  }, []);

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC);
    audio.loop = false;
    audio.preload = "auto";
    audio.volume = 0.55;
    audioRef.current = audio;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      audio.currentTime = START_AT;
      void audio.play();
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    const onScroll = () => {
      void tryPlay();
      if (started.current) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("touchstart", onScroll);
        window.removeEventListener("wheel", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchstart", onScroll, { passive: true });
    window.addEventListener("wheel", onScroll, { passive: true });

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchstart", onScroll);
      window.removeEventListener("wheel", onScroll);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, [tryPlay]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        if (audio.currentTime < START_AT) {
          audio.currentTime = START_AT;
        }
        await audio.play();
        started.current = true;
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
    }
  };

  return (
    <button
      type="button"
      className={`music-toggle ${playing ? "is-playing" : ""}`}
      onClick={toggle}
      aria-label={playing ? pauseLabel : playLabel}
      title={playing ? pauseLabel : playLabel}
    >
      <span className="music-toggle__icon" aria-hidden>
        {playing ? (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M9 5.5v13l10-6.5L9 5.5z" />
          </svg>
        )}
      </span>
      <span className="music-toggle__waves" aria-hidden>
        <i />
        <i />
        <i />
      </span>
    </button>
  );
}
