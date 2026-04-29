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
  const containerRef = useRef(null);

  const updatePosition = () => {
    if (boxRef.current && containerRef.current) {
      let container = containerRef.current;
      const maxX = container.offsetWidth / 2 - 50;
      const maxY = container.offsetHeight / 2 - 50;
      const minX = -maxX;
      const minY = -maxY;
      pos.current.x = Math.max(minX, Math.min(pos.current.x, maxX));
      pos.current.y = Math.max(minY, Math.min(pos.current.y, maxY));

      boxRef.current.style.transform = `translate(-50%, -50%) translate(${pos.current.x}px, ${pos.current.y}px)`;
    }
  };
  const move = (dx, dy) => {
    pos.current.x += dx;
    pos.current.y = dy;
    updatePosition();
  };

  return (
    <div style={styles.container} ref={containerRef}>
      {/* Top */}
      <button
        onClick={() => move(0, -40)}
        style={{ ...styles.buttonTop, ...styles.commonTopBottom }}>
        Top
      </button>

      {/* Bottom */}
      <button
        onClick={() => move(0, 40)}
        style={{ ...styles.buttonBottom, ...styles.commonTopBottom }}>
        Down
      </button>

      {/* Left */}
      <button
        onClick={() => move(-40, 0)}
        style={{ ...styles.buttonLeft, ...styles.commonLeftRight }}>
        Left
      </button>

      {/* Right */}
      <button
        onClick={() => move(40, 0)}
        style={{ ...styles.buttonRight, ...styles.commonLeftRight }}>
        Right
      </button>

      {/* Box */}
      <div ref={boxRef} style={styles.box} />
    </div>
  );
}

export default App;
