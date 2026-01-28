import { ReactNode } from 'react';

/**
 * Configuration options for the scheduler
 */
export interface SchedulerConfig {
  /** Google Calendar appointment scheduler URL */
  calendarUrl: string;
  /** Default button text when no children provided */
  buttonText: string;
  /** Default Tailwind CSS classes for the button */
  buttonClassName: string;
  /** Modal width (CSS value) */
  modalWidth: string;
  /** Modal height (CSS value) */
  modalHeight: string;
  /** Color theme for the modal */
  theme: 'light' | 'dark';
}

/**
 * Props for the main GoogleScheduler component
 */
export interface GoogleSchedulerProps {
  /** Button content - overrides default buttonText */
  children?: ReactNode;
  /** Additional CSS classes for the button */
  className?: string;
  /** Google Calendar URL - overrides env variable */
  calendarUrl?: string;
  /** Modal width (e.g., '900px', '80vw') */
  modalWidth?: string;
  /** Modal height (e.g., '700px', '80vh') */
  modalHeight?: string;
  /** Color theme */
  theme?: 'light' | 'dark';
  /** Callback when modal opens */
  onOpen?: () => void;
  /** Callback when modal closes */
  onClose?: () => void;
  /** Callback when an error occurs */
  onError?: (error: string) => void;
  /** Disable the scheduler button */
  disabled?: boolean;
  /** Custom aria-label for the button */
  ariaLabel?: string;
}

/**
 * Props for the SchedulerButton component
 */
export interface SchedulerButtonProps {
  /** Button content */
  children?: ReactNode;
  /** CSS classes for styling */
  className?: string;
  /** Click handler */
  onClick: () => void;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Accessible label */
  ariaLabel?: string;
  /** Whether scheduler is currently loading */
  isLoading?: boolean;
}

/**
 * Props for the SchedulerModal component
 */
export interface SchedulerModalProps {
  /** Whether modal is open */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Google Calendar URL to embed */
  calendarUrl: string;
  /** Modal width */
  width?: string;
  /** Modal height */
  height?: string;
  /** Color theme */
  theme?: 'light' | 'dark';
  /** Loading state handler */
  onLoad?: () => void;
  /** Error handler */
  onError?: (error: string) => void;
}

/**
 * Props for the ErrorBoundary component
 */
export interface ErrorBoundaryProps {
  /** Child components to wrap */
  children: ReactNode;
  /** Custom fallback UI */
  fallback?: ReactNode;
  /** Error callback */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

/**
 * State for the ErrorBoundary component
 */
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * Return type for the useScheduler hook
 */
export interface UseSchedulerReturn {
  /** Whether modal is open */
  isOpen: boolean;
  /** Whether iframe is loading */
  isLoading: boolean;
  /** Current error message */
  error: string | null;
  /** Open the scheduler modal */
  openScheduler: () => void;
  /** Close the scheduler modal */
  closeScheduler: () => void;
  /** Clear the current error */
  clearError: () => void;
  /** Set loading state */
  setIsLoading: (loading: boolean) => void;
  /** Set error state */
  setError: (error: string | null) => void;
}
