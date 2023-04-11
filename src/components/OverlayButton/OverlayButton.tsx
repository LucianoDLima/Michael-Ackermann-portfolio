import React, { MouseEventHandler } from 'react';

interface OverlayButtonProps {
  active?: string
  btnType: string
  onClick?: MouseEventHandler
  icon?: string
}

const OverlayButton = ({ active, btnType, onClick, icon }: OverlayButtonProps) => {
  return (
    <button
      className={`overlay-button ${active} ${btnType}`}
      onClick={onClick}
      tabIndex={0}
    >
      <span></span>
      <img className='moveUpDown' src={icon}/>
    </button>
  );
};

export default OverlayButton;
