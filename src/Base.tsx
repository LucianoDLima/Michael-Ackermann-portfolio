import { useEffect, useState } from 'react';
import Navbar from './pages/Navbar/Navbar';
import OverlayButton from './components/OverlayButton/OverlayButton';
import ArrowIcon from './assets/images/arrow-icon.svg';
import { screenSize } from './data/ScreenSize';
import Home from './pages/Home/Home';
import MainWrapper from './components/MainWrapper/MainWrapper';

function Base() {
  const [isNavbarHidden, setIsNavbarHidden] = useState(
    window.innerWidth < screenSize
  );

  // This hook automatically hides the navigation bar when the screen is too big
  // to display everything, overlap or make it too squished
  useEffect(() => {
    // Save the original screen width when the page loads
    let prevWidth: number = window.innerWidth;

    // Updates the prevWidth with the current one as you resize the browser
    const handleResize = () => {
      const currentWidth: number = window.innerWidth;

      // Hide or show the navigation bar if the screen size crosses the threshold
      if (prevWidth < screenSize && currentWidth >= screenSize) {
        setIsNavbarHidden(false);
      } else if (prevWidth >= screenSize && currentWidth < screenSize) {
        setIsNavbarHidden(true);
      }

      prevWidth = currentWidth;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // For the button, it hides/shows the navigation bar as you click it
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
      <MainWrapper
        shrinkWithNavbar={
          window.innerWidth < screenSize ? '' : isNavbarHidden ? '' : 'shrink'
        }
        children={<Home />}
      />
    </>
  );
}

export default Base;
