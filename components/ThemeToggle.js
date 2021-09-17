import { useEffect, useState } from 'react';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';

export default function ThemeToggle(props) {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  console.log('themeToggle props', props);
  const handleThemeClick = (e) => {
    setTheme(e.currentTarget.dataset.theme);
  };
  return (
    <div className="order-2 w-full text-center grid grid-cols-4 gap-3 max-w-3xl mx-auto">
      <button
        onClick={handleThemeClick}
        data-theme="pony"
        type="button"
        className="font-bold py-2 px-4 rounded bg-positive focus:outline-none focus:ring focus:border-blue-300 border-white border-solid border text-white text-4xl"
      >
        👒
      </button>
      <button
        onClick={handleThemeClick}
        data-theme="hockey"
        type="button"
        className="font-bold py-2 px-4 rounded bg-positive focus:outline-none focus:ring focus:border-blue-300 border-white border-solid border text-white text-4xl"
      >
        🛀🏼
      </button>
      <button
        onClick={handleThemeClick}
        data-theme="tmv"
        type="button"
        className="font-bold py-2 px-4 rounded bg-positive focus:outline-none focus:ring focus:border-blue-300 border-white border-solid border text-white text-4xl"
      >
        👩🏾‍🎤
      </button>
      <button
        onClick={handleThemeClick}
        data-theme="base"
        type="button"
        className="font-bold py-2 px-4 rounded bg-positive focus:outline-none focus:ring focus:border-blue-300 border-white border-solid border text-white text-4xl"
      >
        🌤
      </button>
    </div>
  );
}
