import useDarkMode from '../../hooks/useDarkMode';
import styles from './AppWrapper.module.css';
function AppWrapper({ children }) {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div>
      <div className={styles.buttonWrapper}>
        <button
          onClick={() =>
            setTheme((p: string) => (p === 'dark' ? 'light' : 'dark'))
          }>
          {colorTheme.toUpperCase()}
        </button>
      </div>
      {children}
    </div>
  );
}

export default AppWrapper;
