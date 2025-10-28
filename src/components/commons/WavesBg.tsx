import React, { useEffect, useRef } from "react";

interface WavesProps {
  lineColor?: string;
  backgroundColor?: string;
}

const Waves: React.FC<WavesProps> = ({
  lineColor = "rgba(255,255,255,0.3)",
  backgroundColor = "rgba(0,0,0,0.9)",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const render = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const y =
          height / 2 +
          Math.sin((x + Date.now() / 100) * 0.02) * 20 +
          Math.sin((x + Date.now() / 50) * 0.05) * 10;
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      frameIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
    };
  }, [lineColor, backgroundColor]);

  return (
    <div className="waves" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <canvas ref={canvasRef} className="waves-canvas" />
    </div>
  );
};

export default Waves;
