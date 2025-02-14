import React from 'react';
import {Heart} from "lucide-react";

const Confetti = () => {
    const confettiColors = [
        "text-pink-400",
        "text-pink-500",
        "text-pink-600",
        "text-purple-500",
        "text-blue-400",
        "text-yellow-400"
    ];

    const confettiCount = window.innerWidth < 640 ? 20 :50;

    return (
        <div className="fixed inset-0 z-50">
            {[...Array(confettiCount)].map((_, i) => (
                <Heart
                    key={i}
                    className={`absolute w-4 h-4 ${confettiColors[Math.floor(Math.random() * confettiColors.length)]} animate-confetti`}
                    style={{
                        "--direction": Math.random(),
                        "--rotation-speed": Math.random() * 2,
                        left: `${Math.random() * 100}vw`,
                        top: '-20px',
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
};

export default Confetti;