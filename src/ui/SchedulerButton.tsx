'use client';

import React from 'react';
import { SchedulerButtonProps } from '../types/scheduler.types';
import { defaultConfig } from '../config/scheduler.config';

/**
 * Scheduler trigger button component
 * Handles click events and displays loading/disabled states
 */
export const SchedulerButton: React.FC<SchedulerButtonProps> = ({
  children,
  className,
  onClick,
  disabled = false,
  ariaLabel,
  isLoading = false,
}) => {
  const buttonClasses = className || defaultConfig.buttonClassName;

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      type="button"
      disabled={disabled || isLoading}
      aria-label={ariaLabel || (typeof children === 'string' ? children : defaultConfig.buttonText)}
      aria-busy={isLoading}
    >
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5"
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
      )}
      {children || defaultConfig.buttonText}
    </button>
  );
};
