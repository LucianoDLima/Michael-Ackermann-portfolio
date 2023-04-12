const bodyFontSize:number = +window
  .getComputedStyle(document.body)
  .getPropertyValue('font-size')
  .slice(0, -2);

const pxToEm = (em:number) => em * bodyFontSize

export const screenSize:number = pxToEm(76.25)

// For responsiveness, this ensures the screen size will respect the users current font size in case they change their browser's.