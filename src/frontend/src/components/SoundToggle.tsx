import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export default function SoundToggle() {
  const [on, setOn] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOn(!on)}
      className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        background: "oklch(0.12 0 0)",
        border: "1px solid oklch(0.74 0.07 60 / 0.4)",
        color: "oklch(0.74 0.07 60)",
      }}
      title={on ? "Mute ambient sound" : "Play ambient sound"}
      data-ocid="sound.toggle"
    >
      {on ? <Volume2 size={16} /> : <VolumeX size={16} />}
    </button>
  );
}
