import React from 'react';
import { Text } from 'zmp-ui';
import CustomButton from './CustomButton';
import gameOverBg from '@/static/images/gameover.png';

interface GameOverMenuProps {
  onPlayAgain: () => void;
  onBackToMenu: () => void;
  finalScore: number;
}

const GameOverMenu: React.FC<GameOverMenuProps> = ({
  onPlayAgain,
  onBackToMenu,
  finalScore,
}) => {
  return (
    <div
      className="h-full w-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${gameOverBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Text.Title
        size="xLarge"
        className="text-red-500"
        style={{ textShadow: '2px 2px 4px #000' }}
      >
        GAME OVER
      </Text.Title>

      <Text
        size="large"
        className="text-white mt-4"
        style={{ textShadow: '2px 2px 2px #000' }}
      >
        Final Score: {finalScore}
      </Text>

      <CustomButton onClick={onPlayAgain} className="mt-8">
        Chơi Lại
      </CustomButton>

      <CustomButton onClick={onBackToMenu} className="mt-4 py-2 px-4 text-sm">
        Về Menu
      </CustomButton>
    </div>
  );
};

export default GameOverMenu;
