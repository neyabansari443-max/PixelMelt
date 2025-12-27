# PixelMelt - AI Coding Agent Instructions

## Project Overview
PixelMelt is a Next.js 16 web application for converting HEIC/HEIF images to JPG, PNG, or WEBP formats entirely in the browser (client-side only). The app emphasizes privacy—no server uploads. Built with React 19, Tailwind CSS, and focused on bulk conversion workflows.

## Architecture & Data Flow

### Client-Side Only Architecture
- **All conversion happens in browser**: Use `heic2any` library dynamically to avoid bloat if unused
- **No backend API**: Files are processed client-side only; check `utils/converter.js` for the pattern
- **State management**: React hooks manage file queue with status tracking (pending → converting → done/error)

### Core Data Structure
Files in state follow this pattern (see `app/page.js`):
```javascript
{
  file: File,           // Original HEIC file
  name: string,         // Filename without extension
  size: number,         // Bytes
  status: string,       // 'pending' | 'converting' | 'done' | 'error'
  blob: Blob,          // Converted output (null until done)
  outputFormat: string  // MIME type (e.g., 'image/jpeg')
}
```

### Component Structure
- **Dropzone** (`components/Dropzone.js`): Drag-and-drop file input with visual feedback
- **FileList** (`components/FileList.js`): Status tracking and individual/batch downloads
- **SettingsBar** (`components/SettingsBar.js`): Format and quality selection
- **Layout** (`app/layout.js`): Includes Google AdSense and Analytics scripts

## Development Workflow

### Setup & Running
```bash
npm install         # Install dependencies
npm run dev         # Dev server at http://localhost:3000 (auto-reloads on edits)
npm run build       # Next.js production build
npm start           # Run production build locally
npm run lint        # ESLint check
```

### Key Libraries & Why
- **heic2any**: Dynamic import only when needed (`utils/converter.js`) to avoid bundle bloat
- **jszip** + **file-saver**: Zip multiple converted images for batch download
- **lucide-react**: Lightweight SVG icons for UI (UploadCloud, Download, CheckCircle, etc.)
- **Tailwind CSS 4**: Utility-first styling with dark mode support

## Code Patterns & Conventions

### Dynamic Imports
Always use dynamic imports for optional features to keep initial bundle small:
```javascript
// ✓ Correct - in converter.js and utils/zip.js
const heic2any = (await import('heic2any')).default;
const { saveAs } = await import('file-saver');

// ✗ Avoid - static import at top level
import heic2any from 'heic2any';
```

### File Conversion Pattern
Conversions handle edge cases like multi-frame images:
```javascript
const blob = await heic2any({ blob: file, toType: format, quality });
return Array.isArray(blob) ? blob[0] : blob; // Multi-frame safety
```

### Status-Driven UI
Components conditionally render based on file status (see `FileList.js`):
- **pending**: No badge shown
- **converting**: Blue "Converting..." badge with spinner
- **done**: Green "Ready" badge + download button
- **error**: Red "Failed" badge

### Client Component Pattern
All interactive components use `"use client"` directive (React 19 + Next.js App Router):
```javascript
"use client";
import { useState } from 'react';
```

## Integration Points

### External Services
- **Google AdSense**: Ad unit in `layout.js` (client ID: `ca-pub-7565053538249499`)
- **Google Analytics**: Tracking ID `G-XVKSPM3HYJ` in `layout.js`
- **Ads.txt & Robots.txt**: Standard files in `public/` directory

### Page Structure
All pages follow same layout (Navbar → Footer):
```
/                    # Main conversion page
/about, /blog, /contact, /privacy, /terms  # Info pages
```
Each page is client-rendered. Check `app/page.js` for hero section + main UI pattern.

## Common Tasks

### Adding a New Output Format
1. Extend format options in `SettingsBar.js` (add option to dropdown)
2. `convertHeicToFormat` in `utils/converter.js` automatically handles new MIME types via heic2any
3. Update FileList download logic if format-specific handling needed

### Styling Changes
- Use Tailwind utility classes (not CSS files except `globals.css`)
- Dark mode: Add `dark:` prefix variants
- Responsive: Use `md:`, `lg:` breakpoints (see page.js hero section)

### Error Handling
- Errors in converter: Log and throw with user-friendly message
- UI shows "Failed" badge in FileList
- Check browser console for detailed error from heic2any

## Performance Notes
- Conversion runs sequentially (one file at a time) to avoid browser freezing
- Quality slider (0.8 default) affects output filesize significantly
- Zip generation is async; use loading state management
- Images never touch server; all processing is local

## Testing Tips
- Test multi-frame HEIC images (iPhone portrait mode) - handled by array check
- Test with various file sizes (consider upload limits)
- Verify dark mode in browser DevTools
- Check ads.txt presence for AdSense compliance
