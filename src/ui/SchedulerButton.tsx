'use client';

import React from "react";
import { SchedulerButtonProps } from '../types/scheduler.types';
import { schedulerConfig } from '../config/scheduler.config';

export const SchedulerButton: React.FC<SchedulerButtonProps> = ({
                                                                    children,
                                                                    className,
                                                                    onClick,
                                                                    disabled = false
                                                                }) => {
    const buttonClasses = className
        ? `${schedulerConfig.buttonClassName} ${className}`
        : schedulerConfig.buttonClassName;

    return (
        <button
            onClick={onClick}
            className={buttonClasses}
            type="button"
            disabled={disabled}
        >
            {children || schedulerConfig.buttonText}
        </button>
    );
};
