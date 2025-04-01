import { useState } from "react";

const moods = ["Happy 😊", "Sad 😢", "Angry 😡", "Excited 🤩", "Calm 😌"];

export default function MoodSelector() {
  const [mood, setMood] = useState<string>("");

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Select Your Mood</h2>
      {moods.map((m) => (
        <button
          key={m}
          onClick={() => setMood(m)}
          style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
        >
          {m}
        </button>
      ))}
      {mood && <h3>Your mood: {mood}</h3>}
    </div>
  );
}
