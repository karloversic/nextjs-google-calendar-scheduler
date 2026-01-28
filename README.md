# Google Calendar Scheduler

A lightweight, plug-and-play Next.js component for seamless Google Calendar appointment scheduling.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

> Transform your Next.js application with professional appointment scheduling in minutes. No backend required, no recurring fees.

## Features

- **Zero External Dependencies** - Minimal bundle size (~3KB gzipped)
- **Fully Customizable** - All options configurable via props
- **TypeScript Support** - Complete type definitions included
- **Accessible** - ARIA labels, keyboard navigation, focus management
- **Dark Mode** - Built-in light and dark themes
- **Loading States** - Visual feedback while calendar loads
- **Error Handling** - Graceful error boundaries and user-friendly messages
- **Callbacks** - `onOpen`, `onClose`, and `onError` event handlers

## Quick Start

### 1. Get your Google Calendar URL

1. Go to [Google Calendar](https://calendar.google.com)
2. Click **Create** > **Appointment schedule**
3. Configure your availability and settings
4. Click **Share** > **Inline booking page**
5. Copy the iframe URL

### 2. Copy the source files

```bash
# Copy the src folder to your Next.js project
cp -r src your-nextjs-project/components/scheduler
```

### 3. Add environment variable

```bash
# .env.local
NEXT_PUBLIC_CALENDAR_URL=https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID
```

### 4. Use the component

```tsx
import { GoogleScheduler } from '@/components/scheduler';

export default function Page() {
  return (
    <GoogleScheduler>
      Book Your Free Consultation
    </GoogleScheduler>
  );
}
```

## Usage Examples

### Basic Usage

```tsx
<GoogleScheduler>Book Appointment</GoogleScheduler>
```

### Custom Styling

```tsx
<GoogleScheduler
  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold"
>
  Schedule a Call
</GoogleScheduler>
```

### Dark Theme

```tsx
<GoogleScheduler theme="dark">
  Book Meeting
</GoogleScheduler>
```

### Custom Modal Size

```tsx
<GoogleScheduler
  modalWidth="600px"
  modalHeight="500px"
>
  Compact Scheduler
</GoogleScheduler>
```

### With Callbacks

```tsx
<GoogleScheduler
  onOpen={() => console.log('Modal opened')}
  onClose={() => console.log('Modal closed')}
  onError={(error) => console.error('Error:', error)}
>
  Schedule Meeting
</GoogleScheduler>
```

### Custom Calendar URL (Override Environment Variable)

```tsx
<GoogleScheduler
  calendarUrl="https://calendar.google.com/calendar/appointments/schedules/DIFFERENT_ID"
>
  Book with Team B
</GoogleScheduler>
```

### Disabled State

```tsx
<GoogleScheduler disabled>
  Currently Unavailable
</GoogleScheduler>
```

## API Reference

### GoogleScheduler Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | `'Book Appointment'` | Button content |
| `className` | `string` | Default blue button | Tailwind CSS classes for button |
| `calendarUrl` | `string` | `NEXT_PUBLIC_CALENDAR_URL` | Google Calendar URL |
| `modalWidth` | `string` | `'900px'` | Modal width (CSS value) |
| `modalHeight` | `string` | `'700px'` | Modal height (CSS value) |
| `theme` | `'light' \| 'dark'` | `'light'` | Modal color theme |
| `disabled` | `boolean` | `false` | Disable the button |
| `ariaLabel` | `string` | Button text | Accessible label |
| `onOpen` | `() => void` | - | Called when modal opens |
| `onClose` | `() => void` | - | Called when modal closes |
| `onError` | `(error: string) => void` | - | Called on error |

### Advanced Usage

For more control, you can import individual components:

```tsx
import {
  GoogleScheduler,      // Main component
  SchedulerButton,      // Just the button
  SchedulerModal,       // Just the modal
  ErrorBoundary,        // Error handling wrapper
  useScheduler,         // State management hook
  defaultConfig,        // Default configuration
  isValidCalendarUrl,   // URL validation utility
} from '@/components/scheduler';
```

### useScheduler Hook

```tsx
const {
  isOpen,           // boolean - modal open state
  isLoading,        // boolean - iframe loading state
  error,            // string | null - current error
  openScheduler,    // () => void - open modal
  closeScheduler,   // () => void - close modal
  clearError,       // () => void - clear error
  setIsLoading,     // (loading: boolean) => void
  setError,         // (error: string | null) => void
} = useScheduler();
```

## Project Structure

```
src/
├── index.ts                    # Main exports
├── GoogleScheduler/
│   └── GoogleScheduler.tsx     # Main component
├── ui/
│   ├── SchedulerButton.tsx     # Button component
│   ├── SchedulerModal.tsx      # Modal with iframe
│   └── ErrorBoundary.tsx       # Error boundary
├── hooks/
│   └── useScheduler.ts         # State management hook
├── types/
│   └── scheduler.types.ts      # TypeScript definitions
└── config/
    └── scheduler.config.ts     # Default configuration

example/                        # Demo Next.js application
├── app/
│   ├── page.tsx               # Demo page with examples
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Tailwind styles
├── package.json
└── .env.example               # Environment template
```

## Running the Example

```bash
# Install dependencies
npm run setup

# Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to see the demo.

## Requirements

- Next.js 13+ (App Router)
- React 18+
- Tailwind CSS (for default styling)

## Accessibility

- Keyboard navigation (Tab, Escape to close)
- Focus management (auto-focus close button on open)
- ARIA labels on all interactive elements
- Screen reader announcements for errors
- Native HTML `<dialog>` element for proper modal behavior

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Uses native HTML `<dialog>` element

## Contributing

- Report bugs via [Issues](https://github.com/karloversic/nextjs-google-calendar-scheduler/issues)
- Suggest features or improvements
- Submit pull requests

## License

MIT License - see [LICENSE](LICENSE) for details.

---

**Made with Next.js, TypeScript, and Tailwind CSS**

[View on GitHub](https://github.com/karloversic/nextjs-google-calendar-scheduler) | [Report Bug](https://github.com/karloversic/nextjs-google-calendar-scheduler/issues) | [Request Feature](https://github.com/karloversic/nextjs-google-calendar-scheduler/issues)
