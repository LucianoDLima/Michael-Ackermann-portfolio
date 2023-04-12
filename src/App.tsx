import { useState } from 'react';
import Navbar from './pages/Navbar/Navbar';
import OverlayButton from './components/OverlayButton/OverlayButton';
import ArrowIcon from './assets/images/arrow-icon.svg';

function App() {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  const hideNavigationBar = (): void => {
    setIsNavbarHidden((prevState) => !prevState);
  };

  return (
    <>
      <OverlayButton
        btnType="menu-button"
        active={isNavbarHidden ? '' : 'close'}
        onClick={() => hideNavigationBar()}
      />
      <OverlayButton btnType={`back-to-top visible`} icon={ArrowIcon} />

      <Navbar
        navBarHide={isNavbarHidden ? 'hide' : ''}
        tabIndex={isNavbarHidden ? -1 : 0}
      />
    </>
  );
}

export default App;
