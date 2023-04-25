
export function changeDisplay(isDarkMode, setIsDarkMode) {
    console.log(isDarkMode);
    if (isDarkMode) {
      localStorage.setItem('color-theme', 'light');
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      console.log('cahnged to light');
    } else {
      localStorage.setItem('color-theme', 'dark');
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      console.log('cahnged to dark');
    }
}
