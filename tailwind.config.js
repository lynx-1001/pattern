/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        background: 'hsl(var(--color-background) / <alpha-value>)',
        text: 'hsl(var(--color-text) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
        test: 'var(--color-test)',/* แต่! ถ้าคุณทำแบบนี้ คุณ จะต้อง เปลี่ยน tailwind.config.js ให้ใช้ var() แบบตรงๆ และคุณจะไม่สามารถใช้ Opacity Modifiers (/50, /75) */
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}