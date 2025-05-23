# 📅 Google Calendar Scheduler

**A lightweight, plug-and-play Next.js component for seamless Google Calendar appointment scheduling**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

> Transform your Next.js application with professional appointment scheduling in minutes, not hours. No backend required, no recurring fees, just copy, paste, and schedule.

## ✨ Why Choose This Scheduler?

- **🚀 Zero Setup Complexity** - Copy 7 files and you're done
- **💰 No Recurring Costs** - Uses Google's free appointment scheduler
- **🎨 Fully Customizable** - Tailwind CSS classes for perfect brand matching
- **🔒 Type-Safe** - Complete TypeScript support with error boundaries
- **📱 Mobile Responsive** - Beautiful on all devices
- **⚡ Performance Optimized** - Minimal bundle size, maximum efficiency

## 🎯 Perfect For

- **SaaS Applications** - Customer onboarding calls
- **Consulting Websites** - Client consultation booking
- **Service Businesses** - Appointment scheduling
- **Portfolio Sites** - Meeting requests
- **E-commerce** - Customer support calls

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Usage Examples](#-usage-examples)
- [Configuration](#-configuration)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Quick Start

**1. Get your Google Calendar URL**
```
Create appointment scheduler in Google Calendar → Share → Copy inline iframe URL
```

**2. Copy the module**
```
# Copy the scheduling-module folder to your project
cp -r scheduling-module your-nextjs-project/components/
```

**3. Add environment variable**
```
# .env.local
NEXT_PUBLIC_CALENDAR_URL=your_google_calendar_appointment_url
```

**4. Use in your component**
```
import { GoogleScheduler } from '@/components/scheduling-module/schedulerComponents/GoogleScheduler/GoogleScheduler';

export default function HomePage() {
  return (
    <GoogleScheduler>
      Book Your Free Consultation
    </GoogleScheduler>
  );
}
```

**That's it! 🎉** Your appointment scheduler is ready.

## 📦 Installation

### Prerequisites
- Next.js 13+ with App Router
- React 18+
- Tailwind CSS (for styling)
- TypeScript (recommended)

### Step-by-Step Setup

**1. Create Google Calendar Appointment Scheduler**
```
1. Go to Google Calendar
2. Click "Create" → "Appointment schedule"
3. Configure your availability and settings
4. Save and click "Share" and choose "Inline booking page"
5. From "Embed Code" copy the url of the <iframe>
```

**2. Download and Copy Files**
```
# Clone or download the scheduling-module folder
# Copy to your Next.js project under components:

    your-nextjs-project/
        ├── components/
        │   └── scheduling-module/  ← Copy here
```

**3. Environment Configuration**
```
# Add to your .env.local file
NEXT_PUBLIC_CALENDAR_URL=https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID
```


## 💡 Usage Examples

### Basic Usage
```
import { GoogleScheduler } from '@/components/scheduling-module/schedulerComponents/GoogleScheduler/GoogleScheduler';

export default function ContactPage() {
  return (
    <div className="text-center">
      <h1>Ready to get started?</h1>
      <GoogleScheduler>
        Schedule Your Free Consultation
      </GoogleScheduler>
    </div>
  );
}
```

### Custom Styling
```
<GoogleScheduler className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
  Book Premium Consultation
</GoogleScheduler>
```

## ⚙️ Configuration

### Customizing the Scheduler

Edit `config/scheduler.config.ts` to match your brand:

```
export const schedulerConfig: SchedulerConfig = {
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL || '',
  buttonText: 'Book Appointment',
  buttonClassName: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
  modalWidth: '900px',
  modalHeight: '700px',
  theme: 'light'
};
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_CALENDAR_URL` | Your Google Calendar appointment scheduler URL | ✅ Yes |

## 🏗️ Project Structure

```
scheduling-module/
├── schedulerComponents/
│   ├── ui/
│   │   ├── SchedulerButton.tsx      # Customizable button component
│   │   ├── SchedulerModal.tsx       # Modal with iframe
│   │   └── ErrorBoundary.tsx        # Error handling wrapper
│   └── GoogleScheduler/
│       └── GoogleScheduler.tsx      # Main orchestrator component
├── hooks/
│   └── useScheduler.ts              # Modal state management
├── types/
│   └── scheduler.types.ts           # TypeScript definitions
├── config/
│   └── scheduler.config.ts          # Configuration settings
└── README.md                        # This file
```

## 🔧 Features

### Error Handling
- **Automatic error boundaries** catch and display user-friendly messages
- **Console logging** for debugging during development
- **Configuration validation** prevents common setup mistakes
- **Graceful fallbacks** when calendar fails to load

### Accessibility
- **Keyboard navigation** support
- **Focus management** for modal interactions
- **Screen reader** compatible
- **ARIA labels** for better accessibility

### Performance
- **Lazy loading** of calendar iframe
- **Minimal bundle impact** (~3KB gzipped
- **Tree-shakeable** exports
- **Zero external dependencies**

## 🤝 Contributing
- 🐛 **Report bugs** via [Issues](https://github.com/karloversic/nextjs-google-calendar-scheduler/issues)
- 💡 **Suggest features** or improvements
- 📖 **Improve documentation**
- ⭐ **Star the repo** if you find it useful!


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---


**Made with ❤️ for the Next.js community**

[⭐ Star this repo](https://github.com/karloversic/nextjs-google-calendar-scheduler) • [🐛 Report Bug](https://github.com/karloversic/nextjs-google-calendar-scheduler/issues) • [✨ Request Feature](https://github.com/karloversic/nextjs-google-calendar-scheduler/issues)

