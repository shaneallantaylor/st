import base from './base';
import pony from './pony';
import tmv from './tmv';
import hockey from './hockey';

export const themes = {
  base,
  pony,
  tmv,
  hockey,
};

export const mapTheme = (variables) => ({
  '--color-primary': variables.primary,
  '--color-secondary': variables.secondary,
  '--color-positive': variables.positive,
  '--color-negative': variables.negative,
  '--color-text-primary': variables.textPrimary,
  '--background-primary': variables.backgroundPrimary,
  '--background-sec': variables.backgroundSecondary,
});

export const applyTheme = (theme) => {
  const themeObject = themes[theme];
  if (!themeObject) {
    console.error(`The theme '${theme}' doesn't exist. Sorry pal.`);
    return;
  }

  const themeMap = mapTheme(themes[theme]);

  const root = document.documentElement;

  Object.keys(themeMap).forEach((property) => {
    if (property === 'name') {
      return;
    }

    root.style.setProperty(property, themeMap[property]);
  });
};

export const extend = (extending, newTheme) => ({ ...extending, ...newTheme });
