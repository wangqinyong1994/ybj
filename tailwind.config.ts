import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(28, 118, 44)',
          light: 'rgb(56, 176, 82)',
          dark: 'rgb(20, 85, 32)',
        },
        accent: 'rgb(255, 152, 0)',
        background: 'rgb(248, 249, 250)',
        text: {
          primary: 'rgb(33, 37, 41)',
          secondary: 'rgb(108, 117, 125)',
        },
      },
    },
  },
  plugins: [],
}
export default config
