/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFE5E5',
          blue: '#E5F3FF',
          green: '#E5FFE5',
          purple: '#F0E5FF',
          yellow: '#FFF9E5',
        },
        soft: {
          gray: '#F5F5F5',
          'gray-dark': '#E0E0E0',
        }
      },
      fontFamily: {
        friendly: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neuromorphic: '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff',
        'neuromorphic-inset': 'inset 8px 8px 16px #d1d1d1, inset -8px -8px 16px #ffffff',
        'neuromorphic-sm': '4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-pastel-pink',
    'bg-pastel-blue',
    'bg-pastel-green',
    'bg-pastel-purple',
    'bg-pastel-yellow',
    'text-pastel-pink',
    'text-pastel-blue',
    'text-pastel-green',
    'text-pastel-purple',
    'text-pastel-yellow',
    'bg-soft-gray',
    'bg-soft-gray-dark',
    'from-pastel-pink',
    'from-pastel-blue',
    'from-pastel-green',
    'from-pastel-purple',
    'from-pastel-yellow',
    'via-pastel-pink',
    'via-pastel-blue',
    'via-pastel-green',
    'via-pastel-purple',
    'via-pastel-yellow',
    'to-pastel-pink',
    'to-pastel-blue',
    'to-pastel-green',
    'to-pastel-purple',
    'to-pastel-yellow',
  ],
}

