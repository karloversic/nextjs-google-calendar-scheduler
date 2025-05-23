'use client';

import { useState, useCallback } from 'react';

export const useScheduler = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const openScheduler = useCallback(() => {
        try {
            setError(null);
            setIsOpen(true);
            console.log('Scheduler modal opened successfully');
        } catch (err) {
            const errorMessage = 'Failed to open scheduler modal';
            console.error(errorMessage, err);
            setError(errorMessage);
        }
    }, []);

    const closeScheduler = useCallback(() => {
        try {
            setIsOpen(false);
            setError(null);
            console.log('Scheduler modal closed successfully');
        } catch (err) {
            console.error('Error closing scheduler modal:', err);
        }
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return {
        isOpen,
        error,
        openScheduler,
        closeScheduler,
        clearError
    };
};
