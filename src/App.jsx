import { useRef } from "react";

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    width: "100vw",
  },
  commonTopBottom: {
    position: "absolute",
    width: "100%",
    height: 30,
  },
  buttonTop: {
    top: 0,
  },
  buttonBottom: {
    bottom: 0,
  },
  commonLeftRight: {
    top: "30px",
    width: "40px",
    zIndex: 1,
    height: "calc(100% - 60px)",
  },
  buttonLeft: {
    position: "absolute",
    left: 0,
  },
  buttonRight: {
    position: "absolute",
    right: 0,
  },
  box: {
    height: 100,
    width: 100,
    background: "red",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
};

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
        style={{ ...styles.buttonTop, ...styles.commonTopBottom }}>
        Top
      </button>

      {/* Bottom */}
      <button
        onClick={() => {
          pos.current.y = Math.min(pos.current.y + 20, 220);
          updatePosition();
        }}
        style={{ ...styles.buttonBottom, ...styles.commonTopBottom }}>
        Down
      </button>

      {/* Left */}
      <button
        onClick={() => {
          pos.current.x = Math.max(pos.current.x - 20, -250);
          updatePosition();
        }}
        style={{ ...styles.buttonLeft, ...styles.commonLeftRight }}>
        Left
      </button>

      {/* Right */}
      <button
        onClick={() => {
          pos.current.x = Math.min(pos.current.x + 20, 180);
          updatePosition();
        }}
        style={{ ...styles.buttonRight, ...styles.commonLeftRight }}>
        Right
      </button>

      {/* Box */}
      <div ref={boxRef} style={styles.box} />
    </div>
  );
}

export default App;
