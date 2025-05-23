export interface SchedulerConfig {
    calendarUrl: string;
    buttonText?: string;
    buttonClassName?: string;
    modalWidth?: string;
    modalHeight?: string;
    theme?: 'light' | 'dark';
}

export interface GoogleSchedulerProps {
    children?: React.ReactNode;
    className?: string;
}

export interface SchedulerButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}

export interface SchedulerModalProps {
    isOpen: boolean;
    onClose: () => void;
}
