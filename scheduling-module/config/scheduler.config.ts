import { SchedulerConfig } from '../types/scheduler.types';

export const schedulerConfig: SchedulerConfig = {
    calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL || '',
    buttonText: 'Book Appointment',
    buttonClassName: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
    modalWidth: '900px',
    modalHeight: '700px',
    theme: 'light'
};
