// utils/fonts.js
import localFont from 'next/font/local'

export const inter = localFont({
  src: '../assets/fonts/Inter-VariableFont_opsz,wght.woff2',
  display: 'swap',
  variable: '--font-inter',
  weight: '400 500', // Only 400 and 500 weights as per your Google Fonts import
  style: 'normal',
  adjustFontFallback: 'Arial',
})

export const sora = localFont({
  src: '../assets/fonts/Sora-VariableFont_wght.woff2',
  display: 'swap',
  variable: '--font-sora',
  weight: '600 900', // Only 600-900 weights as per your import
  style: 'normal',
  adjustFontFallback: 'Arial',
})

export const spaceGrotesk = localFont({
  src: '../assets/fonts/SpaceGrotesk-VariableFont_wght.woff2',
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: '400 500', // Only 400 and 500 weights
  style: 'normal',
  adjustFontFallback: 'Arial',
})

export const jakarta = localFont({
  src: '../assets/fonts/PlusJakartaSans-VariableFont_wght.woff2',
  display: 'swap',
  variable: '--font-jakarta',
  weight: '400 700', // Only 400-700 weights as per your import
  style: 'normal',
  adjustFontFallback: 'Arial',
})