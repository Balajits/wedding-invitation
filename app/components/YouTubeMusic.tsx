"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

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

const VIDEO_ID = "YIZlI6yWmGY";

const YouTubeMusic = forwardRef<YouTubeMusicHandle>(
  function YouTubeMusic(_, ref) {
    const playerRef = useRef<YouTubePlayer | null>(null);
    const playerContainerRef = useRef<HTMLDivElement | null>(null);

    const [apiReady, setApiReady] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [shouldPlay, setShouldPlay] = useState(false);

    useImperativeHandle(ref, () => ({
      play() {
        setShouldPlay(true);

        if (playerRef.current) {
          playerRef.current.unMute();
          playerRef.current.setVolume(35);
          playerRef.current.playVideo();
          setIsPlaying(true);
        }
      },

      pause() {
        playerRef.current?.pauseVideo();
        setIsPlaying(false);
      },

      toggle() {
        if (!playerRef.current) return;

        if (isPlaying) {
          playerRef.current.pauseVideo();
          setIsPlaying(false);
        } else {
          playerRef.current.unMute();
          playerRef.current.setVolume(35);
          playerRef.current.playVideo();
          setIsPlaying(true);
        }
      },
    }));

    // Load YouTube API
    useEffect(() => {
      if (window.YT?.Player) {
        setApiReady(true);
        return;
      }

      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");

        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;

        document.body.appendChild(script);
      }

      const previousCallback = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        previousCallback?.();
        setApiReady(true);
      };

      return () => {
        window.onYouTubeIframeAPIReady = previousCallback;
      };
    }, []);

    // Create YouTube player
    useEffect(() => {
      if (!apiReady) return;
      if (!playerContainerRef.current) return;
      if (playerRef.current) return;

      playerRef.current = new window.YT.Player(
        playerContainerRef.current,
        {
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
              if (shouldPlay) {
                playerRef.current?.unMute();
                playerRef.current?.setVolume(35);
                playerRef.current?.playVideo();
                setIsPlaying(true);
              }
            },

            onStateChange: (event) => {
              // 1 = playing
              if (event.data === 1) {
                setIsPlaying(true);
              }

              // 2 = paused
              if (event.data === 2) {
                setIsPlaying(false);
              }
            },
          },
        }
      );
    }, [apiReady, shouldPlay]);

    // Cleanup
    useEffect(() => {
      return () => {
        playerRef.current?.destroy();
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
          onClick={() => {
            if (isPlaying) {
              playerRef.current?.pauseVideo();
              setIsPlaying(false);
            } else {
              playerRef.current?.unMute();
              playerRef.current?.setVolume(35);
              playerRef.current?.playVideo();
              setIsPlaying(true);
            }
          }}
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