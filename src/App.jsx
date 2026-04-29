import { useRef } from "react";

function App() {
  const pos = useRef({ x: 0, y: 0 });
  const boxRef = useRef(null);

  const updatePosition = () => {
    if (boxRef.current) {
      boxRef.current.style.transform = `translate(-50%, -50%) translate(${pos.current.x + 44}px, ${pos.current.y}px)`;
    }
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {/* Top */}
      <button
        onClick={() => {
          pos.current.y = Math.max(pos.current.y - 40, -200);
          updatePosition();
        }}
        style={{ position: "absolute", top: 0, width: "100%", height: 30 }}>
        Top
      </button>

      {/* Bottom */}
      <button
        onClick={() => {
          pos.current.y = Math.min(pos.current.y + 20, 220);
          updatePosition();
        }}
        style={{ position: "absolute", bottom: 0, width: "100%", height: 30 }}>
        Down
      </button>

      {/* Left */}
      <button
        onClick={() => {
          pos.current.x = Math.max(pos.current.x - 20, -250);
          updatePosition();
        }}
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
        onClick={() => {
          pos.current.x = Math.min(pos.current.x + 20, 180);
          updatePosition();
        }}
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
        ref={boxRef}
        style={{
          height: 100,
          width: 100,
          background: "red",
          position: "absolute",
          left: "50%",
          top: "50%",

          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

export default App;
