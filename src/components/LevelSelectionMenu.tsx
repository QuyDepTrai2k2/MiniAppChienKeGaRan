import React from 'react';
import { Text } from 'zmp-ui';
import CustomButton from './CustomButton';
import homepageBackground from '@/static/images/LevelSelectionMenu.png';
import { allLevels } from '@/game/levels';

interface LevelSelectionMenuProps {
  onSelectLevel: (levelIndex: number) => void;
  onBackToMenu: () => void;
}

const LevelSelectionMenu: React.FC<LevelSelectionMenuProps> = ({
  onSelectLevel,
  onBackToMenu,
}) => {
  return (
    <div
      className="h-full w-full flex flex-col justify-center items-center pb-24"
      style={{
        backgroundImage: `url(${homepageBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Text.Title className="text-white mb-8" style={{ textShadow: '2px 2px 4px #000' }}>
        Chọn Màn Chơi
      </Text.Title>

      {allLevels.map((levelData, index) => (
        <CustomButton
          key={index}
          onClick={() => onSelectLevel(index)}
          className="mt-4"
        >
          {`Màn ${levelData.level}`}
        </CustomButton>
      ))}

      <CustomButton onClick={onBackToMenu} className="mt-12 py-2 px-4 text-sm">
        Quay lại
      </CustomButton>
    </div>
  );
};

export default LevelSelectionMenu;
