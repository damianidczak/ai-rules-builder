/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Explicitly listing all possible layer color classes
    // Orange (Craftsmanship)
    'bg-orange-100', 'bg-orange-200', 'bg-orange-300', 'bg-orange-400', 'bg-orange-500', 'bg-orange-600',
    'border-orange-100', 'border-orange-200', 'border-orange-300', 'border-orange-400', 'border-orange-500', 'border-orange-600',
    'text-orange-100', 'text-orange-200', 'text-orange-300', 'text-orange-400', 'text-orange-500', 'text-orange-600',
    'ring-orange-100', 'ring-orange-200', 'ring-orange-300', 'ring-orange-400', 'ring-orange-500', 'ring-orange-600',
    
    // Blue (Frontend)
    'bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500', 'bg-blue-600',
    'border-blue-100', 'border-blue-200', 'border-blue-300', 'border-blue-400', 'border-blue-500', 'border-blue-600',
    'text-blue-100', 'text-blue-200', 'text-blue-300', 'text-blue-400', 'text-blue-500', 'text-blue-600',
    'ring-blue-100', 'ring-blue-200', 'ring-blue-300', 'ring-blue-400', 'ring-blue-500', 'ring-blue-600',
    
    // Green (Backend)
    'bg-green-100', 'bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500', 'bg-green-600',
    'border-green-100', 'border-green-200', 'border-green-300', 'border-green-400', 'border-green-500', 'border-green-600',
    'text-green-100', 'text-green-200', 'text-green-300', 'text-green-400', 'text-green-500', 'text-green-600',
    'ring-green-100', 'ring-green-200', 'ring-green-300', 'ring-green-400', 'ring-green-500', 'ring-green-600',
    
    // Indigo (Database)
    'bg-indigo-100', 'bg-indigo-200', 'bg-indigo-300', 'bg-indigo-400', 'bg-indigo-500', 'bg-indigo-600',
    'border-indigo-100', 'border-indigo-200', 'border-indigo-300', 'border-indigo-400', 'border-indigo-500', 'border-indigo-600',
    'text-indigo-100', 'text-indigo-200', 'text-indigo-300', 'text-indigo-400', 'text-indigo-500', 'text-indigo-600',
    'ring-indigo-100', 'ring-indigo-200', 'ring-indigo-300', 'ring-indigo-400', 'ring-indigo-500', 'ring-indigo-600',
    
    // Fuchsia (DevOps)
    'bg-fuchsia-100', 'bg-fuchsia-200', 'bg-fuchsia-300', 'bg-fuchsia-400', 'bg-fuchsia-500', 'bg-fuchsia-600',
    'border-fuchsia-100', 'border-fuchsia-200', 'border-fuchsia-300', 'border-fuchsia-400', 'border-fuchsia-500', 'border-fuchsia-600',
    'text-fuchsia-100', 'text-fuchsia-200', 'text-fuchsia-300', 'text-fuchsia-400', 'text-fuchsia-500', 'text-fuchsia-600',
    'ring-fuchsia-100', 'ring-fuchsia-200', 'ring-fuchsia-300', 'ring-fuchsia-400', 'ring-fuchsia-500', 'ring-fuchsia-600',
    
    // Yellow (Testing)
    'bg-yellow-100', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400', 'bg-yellow-500', 'bg-yellow-600',
    'border-yellow-100', 'border-yellow-200', 'border-yellow-300', 'border-yellow-400', 'border-yellow-500', 'border-yellow-600',
    'text-yellow-100', 'text-yellow-200', 'text-yellow-300', 'text-yellow-400', 'text-yellow-500', 'text-yellow-600',
    'ring-yellow-100', 'ring-yellow-200', 'ring-yellow-300', 'ring-yellow-400', 'ring-yellow-500', 'ring-yellow-600',
    
    // Opacity variants
    'bg-orange-400/20', 'bg-blue-400/20', 'bg-green-400/20', 'bg-indigo-400/20', 'bg-fuchsia-400/20', 'bg-yellow-400/20',
    'border-orange-200/50', 'border-blue-200/50', 'border-green-200/50', 'border-indigo-200/50', 'border-fuchsia-200/50', 'border-yellow-200/50',
    
    // Gray backgrounds used with layer colors
    'bg-gray-600/50', 'bg-gray-700/60', 'bg-gray-700/70', 'bg-gray-800/70',
    'hover:bg-gray-500/50', 'hover:bg-gray-600/60', 'hover:bg-gray-700/70',
    
    // Shadow classes
    'shadow-sm', 'shadow-md', 'shadow-lg', 'hover:shadow-sm'
  ]
};
