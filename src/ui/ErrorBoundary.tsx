'use client';

import { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        console.error('ErrorBoundary caught an error:', error);
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.error('ErrorBoundary - Component stack trace:', errorInfo.componentStack);
        console.error('ErrorBoundary - Error details:', {
            message: error.message,
            stack: error.stack,
            name: error.name
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h3 className="text-red-800 font-medium">Something went wrong</h3>
                        <p className="text-red-600 text-sm mt-1">
                            Unable to load the scheduler. Please try refreshing the page.
                        </p>
                        <button
                            onClick={() => this.setState({ hasError: false, error: undefined })}
                            className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                        >
                            Try Again
                        </button>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}
