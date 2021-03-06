import { useEffect, useState } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState<string>(
    (typeof window !== 'undefined' && localStorage.theme) ? localStorage.theme : 'light'
  );
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [colorTheme, theme]);

  return [theme, setTheme] as const;
}

export default useDarkMode;
