const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    'node_modules/flowbite-react/lib/esm/**/*.js',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
  screens: {
      'xsm': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'primary-red': "#DE2F2F",
        'light-gray': "#EDEDED",
        "secondary-yellow": "#FFC600"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
