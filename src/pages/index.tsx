import React, { useState, useCallback } from 'react';
import { Page } from 'zmp-ui';
import MainMenu from '../components/MainMenu';
import GameCanvas from '../components/GameCanvas';
import GameOverMenu from '../components/GameOverMenu';
import GameWinMenu from '../components/GameWinMenu';
import LevelSelectionMenu from '../components/LevelSelectionMenu';

type GameState = 'menu' | 'level-selection' | 'playing' | 'game-over' | 'game-win';

const HomePage: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [score, setScore] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState(0);

  const handleStartGame = useCallback(() => {
    setGameState('level-selection');
  }, []);

  const handleSelectLevel = useCallback((levelIndex: number) => {
    setSelectedLevel(levelIndex);
    setScore(0);
    setGameState('playing');
  }, []);

  const handleGameWin = useCallback(() => {
    setGameState('game-win');
  }, []);

  const handleGameOver = useCallback(() => {
    setGameState('game-over');
  }, []);

  const handleBackToMenu = useCallback(() => {
    setGameState('menu');
  }, []);

  const handlePlayAgain = useCallback(() => {
    setGameState('level-selection');
  }, []);

  const renderGameState = () => {
    switch (gameState) {
      case 'menu':
        return <MainMenu onStartGame={handleStartGame} />;

      case 'level-selection':
        return (
          <LevelSelectionMenu
            onSelectLevel={handleSelectLevel}
            onBackToMenu={handleBackToMenu}
          />
        );

      case 'playing':
        return (
          <GameCanvas
            onGameOver={handleGameOver}
            onGameWin={handleGameWin}
            score={score}
            setScore={setScore}
            levelToLoad={selectedLevel}
          />
        );

      case 'game-over':
        return (
          <GameOverMenu
            onPlayAgain={handlePlayAgain}
            onBackToMenu={handleBackToMenu}
            finalScore={score}
          />
        );

      case 'game-win':
        return (
          <GameWinMenu
            completedLevel={selectedLevel}
            onPlayAgain={handlePlayAgain}
            onBackToMenu={handleBackToMenu}
            finalScore={score}
          />
        );

      default:
        return <MainMenu onStartGame={handleStartGame} />;
    }
  };

  return (
    <Page className="flex flex-col items-center justify-center" hideScrollbar>
      {renderGameState()}
    </Page>
  );
};

export default HomePage;
