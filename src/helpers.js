
export function changeDisplay(isDarkMode, setIsDarkMode) {
    if (isDarkMode) {
      localStorage.setItem('color-theme', 'light');
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('color-theme', 'dark');
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
}

export function initialiseDarkMode(setIsDarkMode) {
  if (localStorage.getItem('color-theme') === null) {
    localStorage.setItem('color-theme', 'dark');
    setIsDarkMode(true);
    document.documentElement.classList.add('dark');
  } else {
    const mode = localStorage.getItem('color-theme') === 'light' ? false : true;
    setIsDarkMode(mode);
    if (mode) document.documentElement.classList.add('dark');
  }
}