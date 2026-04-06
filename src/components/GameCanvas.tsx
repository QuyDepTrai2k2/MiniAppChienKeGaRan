import React, { useEffect, useRef } from 'react';
import { GameEngine } from '@/game/GameEngine';

interface GameCanvasProps {
  onGameOver: () => void;
  onGameWin: () => void;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  levelToLoad: number;
}

const GameCanvas: React.FC<GameCanvasProps> = ({
  onGameOver,
  onGameWin,
  setScore,
  score,
  levelToLoad,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameEngineRef = useRef<GameEngine | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new GameEngine(canvas, { onGameOver, onGameWin, setScore });
    gameEngineRef.current = engine;
    engine.start(levelToLoad);

    return () => {
      engine.stop();
      gameEngineRef.current = null;
    };
  }, [onGameOver, onGameWin, setScore, levelToLoad]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <canvas
        ref={canvasRef}
        style={{ display: 'block', background: '#000' }}
      />
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          color: 'white',
          font: '24px Arial',
          pointerEvents: 'none',
        }}
      >
        Score: {score}
      </div>
    </div>
  );
};

export default GameCanvas;
