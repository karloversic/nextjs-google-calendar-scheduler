/**
 * Next.js Google Calendar Scheduler
 *
 * A lightweight, plug-and-play component for seamless Google Calendar
 * appointment scheduling in Next.js applications.
 *
 * @packageDocumentation
 */

// Main component
export { GoogleScheduler } from './GoogleScheduler/GoogleScheduler';

// UI components for advanced usage
export { SchedulerButton } from './ui/SchedulerButton';
export { SchedulerModal } from './ui/SchedulerModal';
export { ErrorBoundary } from './ui/ErrorBoundary';

// Hook for custom implementations
export { useScheduler } from './hooks/useScheduler';

// Configuration and utilities
export {
  defaultConfig,
  isValidCalendarUrl,
  getCalendarUrl,
} from './config/scheduler.config';

// Types
export type {
  SchedulerConfig,
  GoogleSchedulerProps,
  SchedulerButtonProps,
  SchedulerModalProps,
  ErrorBoundaryProps,
  ErrorBoundaryState,
  UseSchedulerReturn,
} from './types/scheduler.types';
