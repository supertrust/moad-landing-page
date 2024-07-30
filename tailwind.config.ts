import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scale: {
        '-1': '-1',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Pretendard: ['var(--pretendard)', 'Inter var(--inter)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        white: '#FFFFFF',
        bunting: {
          10: '#DDDDE1',
          20: '#C5C6CF',
          30: ' #989AAC',
          40: '#6B6D87',
          50: '#3E4164',
          60: '#101440',
        },
        daisyBush: {
          10: '#E4DEEB',
          20: '#D3C7E3',
          30: '#B49CD4',
          40: '#9571C3',
          50: '#7646B4',
          60: '#561AA4',
        },
        text: {
          ghost: '#CACFD8',
          grayChateu: '#99A0AE',
          paleSky: '#717784',
          trout: '#525866',
          charade: '#2B303B',
          vulcan: '#10121D',
        },
        athensGray: {
          10: '#E2F4F9',
          20: '#E1E3EA',
          30: '#D7D9E0',
          40: '#B9BDC9',
          50: '#979BA9',
          60: '#484F68',
        },
        gray: {
          0: '#F5F7FA',
          10: '#F2F5F8',
          20: '#E1E4EA',
          30: '#CACFD8',
          40: '#99A0AE',
          50: '#717784',
          60: '#525866',
          70: '#2B303B',
          80: '#222530',
          90: '#181B25',
          100: '#0E121B',
        },
      }
    },
    variants: {
      extend: {
        scale: ['hover', 'focus'],
      }
    },  
  },
  plugins: [],
};
export default config;
