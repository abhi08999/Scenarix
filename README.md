# Frontend Assignment: Landing site Optimization

MagicMoments Next.js Landing Page Optimization Report
This document summarizes all optimizations and bugfixes applied to the MagicMoments landing website, following the Where/What/Why format. The goal was to maximize performance, accessibility, and maintainability while preserving all original features.

## 📦 Installation
git clone https://github.com/abhi08999/Scenarix.git
cd <your folder>
npm install

## Run 

npm run dev

## 🔧 Available Scripts

npm run dev — Start development server

npm run build — Build for production

npm run start — Start production server

npm run analyze  - Start Bundle Analyser




## Table of Contents :

1. Overview
2. Optimizations and Fixes (Where/What/Why)
•	app/layout.tsx
•	app/components/Gallery.tsx
•	app/components/Hero.tsx
•	app/components/FontShowcase.tsx
•	app/gallery/page.tsx
•	app/blog/page.tsx

3 . Extra Accessibility and Performance Improvements


  
 

## Overview
The MagicMoments project is a Next.js (TypeScript) landing website with multiple pages (landing, demo, blog, gallery, pricing). The following changes were made to optimize performance, fix bugs, and improve code quality.

## Optimizations and Fixes (Where/What/Why) format

1.	app/layout.tsx

Where: app/layout.tsx
What:
•	Removed all <link> Google Fonts and replaced them with Next.js font optimization using next/font/google.
•	Reduced Font Payload: Only imported fonts that are referenced in UI components.
•	Applied font variables to the <html> tag for global font access.

•	Removed Unnecessary ESLint Disable: Removed /* eslint-disable @next/next/no-page-custom-font */ as it's no longer needed
               Why:
•	Loading dozens of fonts via <link> severely degrades performance (FCP, CLS, TTFB).
•	Using CSS variables ensures each font is available for use in components.


2.	app/components/Gallery.tsx

Where : app/components/Gallery.tsx
What :

•	Image Optimization: Replaced <img> with Next.js <Image> for all gallery images.
•	Accessibility: Added descriptive alt attributes to images.
•	Responsive Images: Used the sizes prop for better responsive loading.

   Why:

•	<Image> provides lazy loading, automatic resizing, and WebP support, reducing bandwidth and improving LCP.
•	Alt text improves accessibility and SEO.
•	Responsive images ensure the right size is delivered to each device.
      
3.	 app/components/Hero.tsx

 Where : app/components/Hero.tsx
 What:  
•	Video Optimization: Added a poster attribute to the background <video> for faster first paint.
•	Accessibility: Added aria-hidden="true" to the decorative video.
•	Preload: Added  preload="none"
•	Bug Fix : Replace video src with actual path available  in public folder /7670835-uhd_3840_2160_30fps.mp4


Why:
•	poster ensures a fallback image is shown while the video loads, improving perceived performance.
•	aria-hidden prevents screen readers from reading decorative content.
•	Add preload=”none” to prevent early laoding

4.	app/components/FontShowcase.tsx

  Where : app/components/FontShowcase.tsx
  What:  
•	Uses Next.js font variables for correct font family and weight .
Migrated from Google Fonts CDN to Next.js next/font system
              Why:
•	Ensures each font is loaded and rendered with the correct weight and style.
•	Eliminates render-blocking external font requests
•	Enables automatic font optimization with display: swap
•	Reduces CLS by ensuring font loading is handled efficiently



 5. app/gallery/page.tsx

     Where: app/gallery/page.tsx


     What:
•	Infinite Scroll: Loads more images as you scroll, using Intersection Observer.

•	Image Optimization: Uses Next.js <Image> for all gallery images.
•	Removed API Key Logging: For security.
         Why:
•	Infinite scroll improves performance and UX with large datasets// or also we can use pagination as alternative.
•	<Image> optimizes images (lazy loading, responsive, WebP).
•	No sensitive info is logged.

6.app/blog/page.tsx
 Where: app/blog/page.tsx
 What:
•	Add Proper Loading skeletons with dynamic import
•	Replace img with next/image <Image>
         Why:
•	Faster initial load
•	  Reduce layout shift
•	<Image> provides lazy loading, automatic resizing, and WebP support, reducing bandwidth and improving LCP.



Other Accessibility and Performance Improvements:

I)  <img> with <Image> next/image :

Where: All pages wherever images is using  
What :  Replaced <img> with Next.js <Image> 
Why:
•	 <Image> provides lazy loading, automatic resizing, and WebP support, reducing bandwidth and improving LCP.
•	Responsive images ensure the right size is delivered to each device.

II )  Image LoadingSkeleton:

Where: All pages wherever images is using and generating  
What :  Add proper loading skeletons
Why:
•	Improve perceived performance
•	Reduce layout shift


III)  Dynamic imports:

Where: All pages wherever is needed 
What :  Lazy load heavy components
Why:
•	Reduces initial bundle size
•	Improves TTI (Time to Interactive)


IV)  ARIA labels:

 Where: All pages Example `<button aria-label="Generate artwork" ... />`.
What: Add proper ARIA labels
Why:
•	Better accessibility.
•	WCAG compliance

V) Bundle Analysis:

   Where: package.json
   What: Add bundle analyzer
    Why: 
•	Identify large dependencies
•	Optimize bundle size



































      



 

