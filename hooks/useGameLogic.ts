import { useState, useEffect, useCallback } from 'react';
import type { Bug, Heart } from '@/types/types';

export const useGameLogic = (isDebugging: boolean) => {
    const [bugs, setBugs] = useState<Bug[]>([]);
    const [hearts, setHearts] = useState<Heart[]>([]);
    const [score, setScore] = useState(0);

    // Generate bugs
    useEffect(() => {
        if (isDebugging && bugs.length < 5) {
            const interval = setInterval(() => {
                const newBug = {
                    id: Math.random(),
                    x: Math.random() * 80 + 10,
                    y: Math.random() * 80 + 10,
                    speed: Math.random() * 2 + 1,
                };
                setBugs(prev => [...prev, newBug]);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isDebugging, bugs.length]);

    // Move bugs
    useEffect(() => {
        if (isDebugging) {
            const moveInterval = setInterval(() => {
                setBugs(prev => prev.map(bug => ({
                    ...bug,
                    x: Math.max(0, Math.min(90, bug.x + (Math.random() - 0.5) * bug.speed)),
                    y: Math.max(0, Math.min(90, bug.y + (Math.random() - 0.5) * bug.speed)),
                })));
            }, 50);

            return () => clearInterval(moveInterval);
        }
    }, [isDebugging]);

    const catchBug = useCallback((bugId: number) => {
        setBugs(prev => prev.filter(bug => bug.id !== bugId));
        setScore(prev => prev + 1);

        // Add heart animation
        const newHeart = {
            id: Math.random(),
            x: Math.random() * 80 + 10,
            y: Math.random() * 80 + 10,
        };
        setHearts(prev => [...prev, newHeart]);
        setTimeout(() => {
            setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
        }, 1000);
    }, []);

    const resetGame = () => {
        setScore(0);
        setHearts([]);
    }

    return {
        bugs,
        hearts,
        score,
        catchBug,
        resetGame,
    };
};