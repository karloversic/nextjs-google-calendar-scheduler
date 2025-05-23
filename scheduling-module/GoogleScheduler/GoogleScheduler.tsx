'use client';

import React, { useEffect } from 'react';
import { useScheduler } from '../hooks/useScheduler';
import { schedulerConfig } from '../config/scheduler.config';
import { ErrorBoundary } from '../ui/ErrorBoundary';
import { SchedulerButton } from '../ui/SchedulerButton';
import { SchedulerModal } from '../ui/SchedulerModal';
import { GoogleSchedulerProps } from '../types/scheduler.types';

const SchedulerComponent: React.FC<GoogleSchedulerProps> = ({
                                                                children,
                                                                className
                                                            }) => {
    const { isOpen, error, openScheduler, closeScheduler, clearError } = useScheduler();

    // Validate configuration on mount
    useEffect(() => {
        if (!schedulerConfig.calendarUrl) {
            const errorMsg = 'NEXT_PUBLIC_CALENDAR_URL environment variable is not set';
            console.error('Scheduler configuration error:', errorMsg);
        } else if (!schedulerConfig.calendarUrl.includes('calendar.google.com')) {
            const errorMsg = 'Invalid Google Calendar URL format';
            console.error('Scheduler configuration error:', errorMsg);
        } else {
            console.log('Scheduler configured successfully with URL:', schedulerConfig.calendarUrl);
        }
    }, []);

    return (
        <>
            {/* Error Display */}
            {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-700 text-sm">{error}</p>
                    <button
                        onClick={clearError}
                        className="mt-1 text-red-600 hover:text-red-800 text-xs underline"
                    >
                        Dismiss
                    </button>
                </div>
            )}

            {/* Button */}
            <SchedulerButton
                onClick={openScheduler}
                className={className}
                disabled={!schedulerConfig.calendarUrl}
            >
                {children}
            </SchedulerButton>

            {/* Modal */}
            <SchedulerModal
                isOpen={isOpen}
                onClose={closeScheduler}
            />
        </>
    );
};

export const GoogleScheduler: React.FC<GoogleSchedulerProps> = (props) => {
    return (
        <ErrorBoundary>
            <SchedulerComponent {...props} />
        </ErrorBoundary>
    );
};

// Export config for easy customization
export { schedulerConfig } from '../config/scheduler.config';
export type { SchedulerConfig } from '../types/scheduler.types';
