import { SchedulerConfig } from '../types/scheduler.types';

/**
 * Default configuration for the scheduler
 * These values are used when props are not provided
 */
export const defaultConfig: SchedulerConfig = {
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL || '',
  buttonText: 'Book Appointment',
  buttonClassName: 'inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  modalWidth: '900px',
  modalHeight: '700px',
  theme: 'light',
};

/**
 * Validates a Google Calendar URL
 */
export const isValidCalendarUrl = (url: string): boolean => {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.hostname.includes('calendar.google.com');
  } catch {
    return false;
  }
};

/**
 * Gets the calendar URL from props or environment
 */
export const getCalendarUrl = (propsUrl?: string): string => {
  return propsUrl || defaultConfig.calendarUrl;
};
