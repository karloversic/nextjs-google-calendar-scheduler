'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { SchedulerModalProps } from '../types/scheduler.types';
import { defaultConfig } from '../config/scheduler.config';

/**
 * Modal component for displaying the Google Calendar scheduler
 * Uses native HTML dialog element for proper accessibility
 */
export const SchedulerModal: React.FC<SchedulerModalProps> = ({
  isOpen,
  onClose,
  calendarUrl,
  width = defaultConfig.modalWidth,
  height = defaultConfig.modalHeight,
  theme = defaultConfig.theme,
  onLoad,
  onError,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Handle modal open/close
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      setIsLoading(true);
      // Focus the close button for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      dialog.close();
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Click outside to close
  const handleDialogClick = useCallback((e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const rect = dialog.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      onClose();
    }
  }, [onClose]);

  // Handle iframe load
  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  // Handle iframe error
  const handleIframeError = useCallback(() => {
    setIsLoading(false);
    const errorMsg = 'Failed to load Google Calendar. Please check your internet connection.';
    onError?.(errorMsg);
  }, [onError]);

  const isDark = theme === 'dark';

  return (
    <dialog
      ref={dialogRef}
      onClick={handleDialogClick}
      className={`
        w-full max-w-4xl rounded-lg shadow-xl backdrop:bg-black/50 p-0 border-0
        ${isDark ? 'bg-gray-900' : 'bg-white'}
      `}
      style={{ width, height }}
      aria-labelledby="scheduler-modal-title"
      aria-modal="true"
    >
      <div className="relative w-full h-full">
        {/* Hidden title for screen readers */}
        <h2 id="scheduler-modal-title" className="sr-only">
          Schedule an Appointment
        </h2>

        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className={`
            absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center
            text-xl font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
            ${isDark
              ? 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 focus:ring-gray-400'
            }
          `}
          aria-label="Close scheduler"
          type="button"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Loading indicator */}
        {isLoading && calendarUrl && (
          <div className={`absolute inset-0 flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="flex flex-col items-center gap-4">
              <svg
                className={`animate-spin h-10 w-10 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Loading calendar...
              </p>
            </div>
          </div>
        )}

        {/* Calendar iframe or error message */}
        {calendarUrl ? (
          <iframe
            src={calendarUrl}
            className={`w-full h-full rounded-lg ${isLoading ? 'invisible' : 'visible'}`}
            frameBorder="0"
            title="Google Calendar Scheduler"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            allow="payment"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className={`text-center p-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <svg
                className="w-16 h-16 mx-auto mb-4 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="font-medium">Calendar URL not configured</p>
              <p className="text-sm mt-1">Please set NEXT_PUBLIC_CALENDAR_URL in your environment</p>
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
};
