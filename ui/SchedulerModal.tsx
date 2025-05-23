'use client';

import React, { useEffect, useRef } from 'react';
import { SchedulerModalProps } from '../types/scheduler.types';
import { schedulerConfig } from '../config/scheduler.config';

export const SchedulerModal: React.FC<SchedulerModalProps> = ({
                                                                  isOpen,
                                                                  onClose
                                                              }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    // Handle modal open/close
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        try {
            if (isOpen) {
                dialog.showModal();
            } else {
                dialog.close();
            }
        } catch (err) {
            console.error('Error managing dialog state:', err);
        }
    }, [isOpen]);

    // Click outside to close
    const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        try {
            const dialog = dialogRef.current;
            if (!dialog) return;

            const rect = dialog.getBoundingClientRect();
            if (
                e.clientX < rect.left || e.clientX > rect.right ||
                e.clientY < rect.top || e.clientY > rect.bottom
            ) {
                onClose();
            }
        } catch (err) {
            console.error('Error handling dialog click:', err);
        }
    };

    // Handle iframe load errors
    const handleIframeError = () => {
        const errorMsg = 'Failed to load Google Calendar. Please check your internet connection.';
        console.error('Iframe load error:', errorMsg);
    };

    return (
        <dialog
            ref={dialogRef}
            onClick={handleDialogClick}
            className={`
        w-full max-w-4xl h-[80vh] rounded-lg shadow-xl backdrop:bg-black/50 p-0
        ${schedulerConfig.theme === 'dark' ? 'bg-gray-900' : 'bg-white'}
      `}
            style={{
                width: schedulerConfig.modalWidth,
                height: schedulerConfig.modalHeight
            }}
        >
            <div className="relative w-full h-full">
                <button
                    onClick={onClose}
                    className={`
            absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold transition-colors
            ${schedulerConfig.theme === 'dark'
                        ? 'bg-gray-800 text-white hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
          `}
                >
                    ×
                </button>
                {schedulerConfig.calendarUrl ? (
                    <iframe
                        src={schedulerConfig.calendarUrl}
                        className="w-full h-full rounded-lg"
                        frameBorder="0"
                        title="Google Calendar Scheduler"
                        onError={handleIframeError}
                    />
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500">Calendar URL not configured</p>
                    </div>
                )}
            </div>
        </dialog>
    );
};
