import React, { MouseEventHandler } from 'react';

interface OverlayButtonProps {
  btnType: string
  onClick?: MouseEventHandler
  icon?: string
}

const OverlayButton = ({ btnType, onClick, icon }: OverlayButtonProps) => {
  return (
    <button
      className={`overlay-button  ${btnType}`}
      onClick={onClick}
      tabIndex={0}
    >
      <img className='moveUpDown' src={icon}/>
    </button>
  );
};

export default OverlayButton;
