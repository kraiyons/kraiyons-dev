import { useEffect } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import styles from './AppWrapper.module.css';

interface AppWrapperProps {
  children: React.ReactNode;
}
function AppWrapper({ children }: AppWrapperProps) {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div>
      <div className={styles.buttonWrapper}>
        <button
          onClick={() =>
            setTheme((colorTheme) => (colorTheme === 'dark' ? 'light' : 'dark'))
          }>
          {colorTheme.toUpperCase()}
        </button>
      </div>
      {children}
    </div>
  );
}

export default AppWrapper;
