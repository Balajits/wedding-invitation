"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import './YoutubeMusic.css';

interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  unMute: () => void;
  mute: () => void;
  setVolume: (volume: number) => void;
  destroy: () => void;
}

export interface YouTubeMusicHandle {
  play: () => void;
  pause: () => void;
  toggle: () => void;
}

declare global {
  interface Window {
    YT: {
      Player: new (
        element: HTMLDivElement,
        options: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: () => void;
            onStateChange?: (event: { data: number }) => void;
          };
        }
      ) => YouTubePlayer;
    };

    onYouTubeIframeAPIReady?: () => void;
  }
}

const VIDEO_ID = "7xAUq4ZZzRk"; 

const YouTubeMusic = forwardRef<YouTubeMusicHandle>(
  function YouTubeMusic(_, ref) {
    const playerRef = useRef<YouTubePlayer | null>(null);
    const playerContainerRef = useRef<HTMLDivElement | null>(null);

    const ready = useRef(false);
    const shouldPlay = useRef(false);
    const [isPlaying, setIsPlaying] = useState(false);

    function play() {
      shouldPlay.current = true;
      if (!ready.current) return;

      playerRef.current?.unMute();
      playerRef.current?.setVolume(35);
      playerRef.current?.playVideo();
    }

    function pause() {
      shouldPlay.current = false;
      if (ready.current) playerRef.current?.pauseVideo();
    }

    function toggle() {
      if (isPlaying) pause();
      else play();
    }

    useImperativeHandle(ref, () => ({ play, pause, toggle }));

    useEffect(() => {
      const container = playerContainerRef.current;
      if (!container) return;

      function createPlayer() {
        if (!container || !window.YT?.Player || playerRef.current) return;

        // YouTube replaces this node with its iframe.
        const mount = document.createElement("div");
        container.appendChild(mount);
        playerRef.current = new window.YT.Player(mount, {
          videoId: VIDEO_ID,
          playerVars: {
            autoplay: 0,
            controls: 1,
            loop: 1,
            playlist: VIDEO_ID,
            playsinline: 1,
            rel: 0,
          },
          events: {
            onReady: () => {
              ready.current = true;
              if (shouldPlay.current) play();
            },
            onStateChange: ({ data }) => {
              if (data === 1) setIsPlaying(true);
              if (data === 0 || data === 2 || data === 5) setIsPlaying(false);
            },
          },
        });
      }

      const previousCallback = window.onYouTubeIframeAPIReady;
      const onApiReady = () => {
        previousCallback?.();
        createPlayer();
      };

      if (window.YT?.Player) {
        createPlayer();
      } else {
        window.onYouTubeIframeAPIReady = onApiReady;
        const scriptUrl = "https://www.youtube.com/iframe_api";
        if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
          const script = document.createElement("script");
          script.src = scriptUrl;
          script.async = true;
          document.body.appendChild(script);
        }
      }

      return () => {
        if (window.onYouTubeIframeAPIReady === onApiReady) {
          window.onYouTubeIframeAPIReady = previousCallback;
        }
        ready.current = false;
        playerRef.current?.destroy();
        playerRef.current = null;
        container.replaceChildren();
      };
    }, []);

    return (
      <>
        {/* YouTube player */}
        <div className="youtube-background-player">
          <div
            ref={playerContainerRef}
            className="youtube-player"
          />
        </div>

        {/* Elegant floating music button */}
        <button
          type="button"
          className={`music-floating-button ${
            isPlaying ? "music-playing" : ""
          }`}
          onClick={toggle}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <span className="music-icon">
            {isPlaying ? "♫" : "♪"}
          </span>

          {/* <span className="music-text">
            {isPlaying ? "" : ""}
          </span> */}
        </button>
      </>
    );
  }
);

export default YouTubeMusic;