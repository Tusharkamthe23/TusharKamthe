import { useRef, useState, useEffect } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bg-music");
    if (saved === "playing") {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      localStorage.setItem("bg-music", "paused");
    } else {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
      localStorage.setItem("bg-music", "playing");
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Floating Music Button */}
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
          background: "rgb(255, 255, 255)",
          color: "#000000",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src="/music/background.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default BackgroundMusic;
