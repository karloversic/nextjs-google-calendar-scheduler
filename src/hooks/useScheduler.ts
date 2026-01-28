'use client';

import { useState, useCallback } from 'react';
import { UseSchedulerReturn } from '../types/scheduler.types';

/**
 * Custom hook for managing scheduler modal state
 * Handles open/close states, loading states, and error handling
 */
export const useScheduler = (): UseSchedulerReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openScheduler = useCallback(() => {
    setError(null);
    setIsLoading(true);
    setIsOpen(true);
  }, []);

  const closeScheduler = useCallback(() => {
    setIsOpen(false);
    setIsLoading(false);
    setError(null);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isOpen,
    isLoading,
    error,
    openScheduler,
    closeScheduler,
    clearError,
    setIsLoading,
    setError,
  };
};
