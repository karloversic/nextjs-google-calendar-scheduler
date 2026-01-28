import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Google Calendar Scheduler Demo',
  description: 'Demo of the Next.js Google Calendar Scheduler component',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
