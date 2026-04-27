import { useState } from "react";

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {/* Top */}
      <button
        onClick={() =>
          setPos((prev) => ({ ...prev, y: Math.max(prev.y - 40, -200) }))
        }
        style={{ position: "absolute", top: 0, width: "100%", height: 30 }}>
        Top
      </button>

      {/* Bottom */}
      <button
        onClick={() =>
          setPos((prev) => ({ ...prev, y: Math.min(prev.y + 20, 220) }))
        }
        style={{ position: "absolute", bottom: 0, width: "100%", height: 30 }}>
        Down
      </button>

      {/* Left */}
      <button
        onClick={() =>
          setPos((prev) => ({ ...prev, x: Math.max(prev.x - 20, -250) }))
        }
        style={{
          position: "absolute",
          left: 0,
          top: "30px",
          width: "40px",
          zIndex: "1",
          height: "calc(100%  - 60px)",
        }}>
        Left
      </button>

      {/* Right */}
      <button
        onClick={() =>
          setPos((prev) => ({ ...prev, x: Math.min(prev.x + 20, 180) }))
        }
        style={{
          position: "absolute",
          right: 0,

          top: "30px",
          width: "44px",
          zIndex: "1",
          height: "calc(100%  - 60px)",
        }}>
        Right
      </button>

      {/* Box */}
      <div
        style={{
          height: 100,
          width: 100,
          background: "red",
          position: "absolute",
          left: "50%",
          top: "50%",

          transform: `translate(-50%, -50%) translate(${pos.x + 44}px, ${pos.y}px)`,
        }}
      />
    </div>
  );
}

export default App;
