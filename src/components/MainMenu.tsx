import React from 'react';
import homepageBg from '@/static/images/homepage.png';
import CustomButton from './CustomButton';

interface MainMenuProps {
  onStartGame: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onStartGame }) => {
  return (
    <div
      className="h-full w-full flex flex-col justify-end items-center pb-20"
      style={{
        backgroundImage: `url(${homepageBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CustomButton
        onClick={onStartGame}
      >
        Bắt Đầu
      </CustomButton>
    </div>
  );
};

export default MainMenu;