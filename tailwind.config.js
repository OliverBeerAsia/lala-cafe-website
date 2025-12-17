/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // LaLa Cafe Brand Colors (derived from logo)
        'lala-orange': '#F5A623',
        'lala-gold': '#D4A84B',
        'lala-black': '#0A0A0A',
        'lala-charcoal': '#1A1A1A',
        'lala-cream': '#FFFBF5',
        'lala-offwhite': '#F5F5F5',
      },
      fontFamily: {
        'display': ['Fredoka', 'Baloo 2', 'sans-serif'],
        'body': ['DM Sans', 'Nunito', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
