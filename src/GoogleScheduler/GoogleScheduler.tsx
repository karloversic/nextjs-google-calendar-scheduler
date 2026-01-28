'use client';

import React, { useEffect, useCallback } from 'react';
import { useScheduler } from '../hooks/useScheduler';
import { defaultConfig, getCalendarUrl, isValidCalendarUrl } from '../config/scheduler.config';
import { ErrorBoundary } from '../ui/ErrorBoundary';
import { SchedulerButton } from '../ui/SchedulerButton';
import { SchedulerModal } from '../ui/SchedulerModal';
import { GoogleSchedulerProps } from '../types/scheduler.types';

/**
 * Internal scheduler component with all functionality
 */
const SchedulerComponent: React.FC<GoogleSchedulerProps> = ({
  children,
  className,
  calendarUrl: propsCalendarUrl,
  modalWidth,
  modalHeight,
  theme,
  onOpen,
  onClose,
  onError,
  disabled = false,
  ariaLabel,
}) => {
  const {
    isOpen,
    isLoading,
    error,
    openScheduler,
    closeScheduler,
    clearError,
    setIsLoading,
    setError,
  } = useScheduler();

  // Resolve the calendar URL from props or environment
  const calendarUrl = getCalendarUrl(propsCalendarUrl);

  // Validate configuration on mount
  useEffect(() => {
    if (!calendarUrl) {
      console.warn('Scheduler: NEXT_PUBLIC_CALENDAR_URL is not set');
    } else if (!isValidCalendarUrl(calendarUrl)) {
      console.warn('Scheduler: Invalid Google Calendar URL format');
    }
  }, [calendarUrl]);

  // Handle open with callback
  const handleOpen = useCallback(() => {
    openScheduler();
    onOpen?.();
  }, [openScheduler, onOpen]);

  // Handle close with callback
  const handleClose = useCallback(() => {
    closeScheduler();
    onClose?.();
  }, [closeScheduler, onClose]);

  // Handle iframe load complete
  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  // Handle errors with callback
  const handleError = useCallback((errorMsg: string) => {
    setError(errorMsg);
    setIsLoading(false);
    onError?.(errorMsg);
  }, [setError, setIsLoading, onError]);

  const isDisabled = disabled || !calendarUrl;

  return (
    <>
      {/* Error Display */}
      {error && (
        <div
          className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md"
          role="alert"
        >
          <p className="text-red-700 text-sm">{error}</p>
          <button
            onClick={clearError}
            className="mt-1 text-red-600 hover:text-red-800 text-xs underline"
            type="button"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Trigger Button */}
      <SchedulerButton
        onClick={handleOpen}
        className={className}
        disabled={isDisabled}
        ariaLabel={ariaLabel}
        isLoading={isOpen && isLoading}
      >
        {children}
      </SchedulerButton>

      {/* Scheduler Modal */}
      <SchedulerModal
        isOpen={isOpen}
        onClose={handleClose}
        calendarUrl={calendarUrl}
        width={modalWidth}
        height={modalHeight}
        theme={theme}
        onLoad={handleLoad}
        onError={handleError}
      />
    </>
  );
};

/**
 * Google Calendar Scheduler Component
 *
 * A fully customizable appointment scheduling button that opens
 * a modal with your Google Calendar appointment scheduler.
 *
 * @example
 * ```tsx
 * <GoogleScheduler
 *   theme="dark"
 *   modalWidth="800px"
 *   onOpen={() => console.log('opened')}
 * >
 *   Book Appointment
 * </GoogleScheduler>
 * ```
 */
export const GoogleScheduler: React.FC<GoogleSchedulerProps> = (props) => {
  return (
    <ErrorBoundary onError={(error) => props.onError?.(error.message)}>
      <SchedulerComponent {...props} />
    </ErrorBoundary>
  );
};

// Re-export for convenience
export { defaultConfig, isValidCalendarUrl, getCalendarUrl } from '../config/scheduler.config';
export type { GoogleSchedulerProps, SchedulerConfig } from '../types/scheduler.types';
