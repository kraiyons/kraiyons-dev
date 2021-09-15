import useDarkMode from '../../hooks/useDarkMode';
import MoonIcon from '../ThemeButton/MoonIcon';
import SunIcon from '../ThemeButton/SunIcon';
import useHasMounted from '../../hooks/useHasMounted';
import styles from './AppWrapper.module.css';

interface AppWrapperProps {
  children: React.ReactNode;
}
function AppWrapper({ children }: AppWrapperProps) {
  const [colorTheme, setTheme] = useDarkMode();
  const hasMounted = useHasMounted();
  return (
    <div>
      <div className={styles.buttonWrapper}>
        <button
          className={`${colorTheme}__button`}
          onClick={() =>
            setTheme((colorTheme) => (colorTheme === 'dark' ? 'light' : 'dark'))
          }>
          {hasMounted && colorTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
          <span>{colorTheme.toUpperCase()}</span>
        </button>
      </div>
      {children}
    </div>
  );
}

export default AppWrapper;

// ICON ANIMATION BASED ON: https://medium.com/next-generation-web/create-a-dark-mode-toggle-micro-interaction-like-a-pro-279305e9c2
