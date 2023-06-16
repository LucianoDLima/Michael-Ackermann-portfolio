import { MouseEventHandler } from 'react';

interface OverlayButtonProps {
  active?: 'close' | ''
  btnType: 'menu-button' | 'back-to-top'
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
