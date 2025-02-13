import React from 'react';
import { cn } from "@/lib/utils";

interface DoodleProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export const HeartDoodle = ({ className, ...props }: DoodleProps) => (
    <svg
        className={cn("w-20 h-20 text-pink-200/50", className)}
        viewBox="0 0 100 100"
        {...props}
    >
        <path
            d="M50 90C50 90 87 62 87 35C87 19 74 10 62 10C50 10 50 23 50 23C50 23 50 10 38 10C26 10 13 19 13 35C13 62 50 90 50 90Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const Squiggle = ({ className, ...props }: DoodleProps) => (
    <svg
        className={cn("w-24 h-12 text-purple-200/50", className)}
        viewBox="0 0 100 50"
        {...props}
    >
        <path
            d="M0 25C20 25 20 0 40 0C60 0 60 50 80 50C100 50 100 25 120 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export const Star = ({ className, ...props }: DoodleProps) => (
    <svg
        className={cn("w-12 h-12 text-yellow-200/50", className)}
        viewBox="0 0 50 50"
        {...props}
    >
        <path
            d="M25 0L30 20L50 25L30 30L25 50L20 30L0 25L20 20L25 0Z"
            fill="currentColor"
        />
    </svg>
);