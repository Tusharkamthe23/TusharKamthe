import { useRef, useState, useEffect } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto-play muted on load
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio.muted = true;

    audio.play().catch(() => {
      // autoplay blocked silently
    });
  }, []);

  // Enable sound after first user interaction
  useEffect(() => {
    const enableAudio = () => {
      if (hasInteracted) return;

      const audio = audioRef.current;
      audio.muted = false;
      audio.volume = 0.3;
      audio.play();

      setIsPlaying(true);
      setHasInteracted(true);
      localStorage.setItem("bg-music", "playing");

      window.removeEventListener("click", enableAudio);
    };

    window.addEventListener("click", enableAudio);
    return () => window.removeEventListener("click", enableAudio);
  }, [hasInteracted]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      localStorage.setItem("bg-music", "paused");
    } else {
      audio.volume = 0.3;
      audio.muted = false;
      audio.play();
      localStorage.setItem("bg-music", "playing");
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          top: "10px",
          left: "20px",
          zIndex: 9999,
          padding: "10px",
          borderRadius: "50%",
          border: "none",
          background: "#fff",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>

      <audio ref={audioRef} loop preload="auto">
        <source src="/music/background.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default BackgroundMusic;