'use client';

import { GoogleScheduler } from '@scheduler/index';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Google Calendar Scheduler
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A lightweight, plug-and-play Next.js component for seamless Google Calendar
          appointment scheduling.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-12">
        {/* Basic Usage */}
        <section className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Basic Usage</h2>
          <p className="text-gray-600 mb-4">
            Default button with standard styling.
          </p>
          <GoogleScheduler>Book Appointment</GoogleScheduler>
          <pre className="mt-4 p-4 bg-gray-100 rounded-lg text-sm overflow-x-auto">
            {`<GoogleScheduler>Book Appointment</GoogleScheduler>`}
          </pre>
        </section>

        {/* Custom Styling */}
        <section className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Custom Styling</h2>
          <p className="text-gray-600 mb-4">
            Apply custom Tailwind classes to match your brand.
          </p>
          <GoogleScheduler className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all hover:shadow-xl">
            Schedule a Call
          </GoogleScheduler>
          <pre className="mt-4 p-4 bg-gray-100 rounded-lg text-sm overflow-x-auto">
            {`<GoogleScheduler
  className="bg-gradient-to-r from-purple-600 to-pink-600 ..."
>
  Schedule a Call
</GoogleScheduler>`}
          </pre>
        </section>

        {/* Dark Theme */}
        <section className="bg-gray-900 rounded-xl shadow-sm border border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-2">Dark Theme</h2>
          <p className="text-gray-400 mb-4">
            Modal adapts to dark mode automatically.
          </p>
          <GoogleScheduler
            theme="dark"
            className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Book Meeting
          </GoogleScheduler>
          <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-sm overflow-x-auto text-gray-300">
            {`<GoogleScheduler theme="dark">
  Book Meeting
</GoogleScheduler>`}
          </pre>
        </section>

        {/* With Callbacks */}
        <section className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">With Callbacks</h2>
          <p className="text-gray-600 mb-4">
            Track when the modal opens, closes, or errors. Check the console.
          </p>
          <GoogleScheduler
            onOpen={() => console.log('Modal opened')}
            onClose={() => console.log('Modal closed')}
            onError={(error) => console.error('Error:', error)}
          >
            Schedule (Check Console)
          </GoogleScheduler>
          <pre className="mt-4 p-4 bg-gray-100 rounded-lg text-sm overflow-x-auto">
            {`<GoogleScheduler
  onOpen={() => console.log('Modal opened')}
  onClose={() => console.log('Modal closed')}
  onError={(error) => console.error('Error:', error)}
>
  Schedule Meeting
</GoogleScheduler>`}
          </pre>
        </section>

        {/* Custom Size */}
        <section className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Custom Modal Size</h2>
          <p className="text-gray-600 mb-4">
            Adjust the modal dimensions to fit your needs.
          </p>
          <GoogleScheduler modalWidth="600px" modalHeight="500px">
            Compact Scheduler
          </GoogleScheduler>
          <pre className="mt-4 p-4 bg-gray-100 rounded-lg text-sm overflow-x-auto">
            {`<GoogleScheduler
  modalWidth="600px"
  modalHeight="500px"
>
  Compact Scheduler
</GoogleScheduler>`}
          </pre>
        </section>

        {/* Disabled State */}
        <section className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Disabled State</h2>
          <p className="text-gray-600 mb-4">
            Disable the button when scheduling is unavailable.
          </p>
          <GoogleScheduler disabled>Currently Unavailable</GoogleScheduler>
          <pre className="mt-4 p-4 bg-gray-100 rounded-lg text-sm overflow-x-auto">
            {`<GoogleScheduler disabled>
  Currently Unavailable
</GoogleScheduler>`}
          </pre>
        </section>
      </div>

      {/* Setup Instructions */}
      <section className="mt-12 bg-blue-50 rounded-xl border border-blue-200 p-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Setup Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-blue-800">
          <li>Create an appointment schedule in Google Calendar</li>
          <li>Copy the iframe URL from the sharing settings</li>
          <li>
            Add the URL to your <code className="bg-blue-100 px-1 rounded">.env.local</code>:
            <pre className="mt-2 p-3 bg-blue-100 rounded text-sm">
              NEXT_PUBLIC_CALENDAR_URL=https://calendar.google.com/calendar/appointments/schedules/YOUR_ID
            </pre>
          </li>
          <li>Restart your development server</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>
          Made with Next.js, TypeScript, and Tailwind CSS
        </p>
        <p className="mt-1">
          <a
            href="https://github.com/karloversic/nextjs-google-calendar-scheduler"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}
