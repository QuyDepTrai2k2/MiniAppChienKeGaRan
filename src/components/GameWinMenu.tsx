import React from 'react';
import { Text } from 'zmp-ui';
import CustomButton from './CustomButton';

interface GameWinMenuProps {
  onPlayAgain: () => void;
  onBackToMenu: () => void;
  finalScore: number;
  completedLevel: number;
}

const GameWinMenu: React.FC<GameWinMenuProps> = ({
  onPlayAgain,
  onBackToMenu,
  finalScore,
  completedLevel,
}) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-black bg-opacity-70">
      <Text.Title size="xLarge" className="text-green-400">
        {`CHIẾN THẮNG MÀN ${completedLevel + 1}`}
      </Text.Title>

      <Text size="large" className="text-white mt-4">
        Final Score: {finalScore}
      </Text>

      <CustomButton onClick={onPlayAgain} className="mt-8">
        Chơi Tiếp
      </CustomButton>

      <CustomButton onClick={onBackToMenu} className="mt-4 py-2 px-4 text-sm">
        Về Menu
      </CustomButton>
    </div>
  );
};

export default GameWinMenu;
