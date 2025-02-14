import {useEffect, useState} from 'react';

interface TypewriterOptions {
    text: string;
    speed?: number;
    delay?: number;
    onComplete?: () => void;
}

export const useTypewriter = ({
                                  text,
                                  speed = 50,
                                  delay = 0,
                                  onComplete
                              }: TypewriterOptions) => {
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        // Reset states when text changes
        setDisplayText("");
        setIsTyping(false);
        setIsComplete(false);

        // Initial delay before starting
        timeoutId = setTimeout(() => {
            setIsTyping(true);
            let index = 0;

            const typeNextChar = () => {
                if (index < text.length) {
                    setDisplayText(text.slice(0, index + 1));
                    index++;
                    timeoutId = setTimeout(typeNextChar, speed);
                } else {
                    setIsTyping(false);
                    setIsComplete(true);
                    if (onComplete) onComplete();
                }
            };

            typeNextChar();
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [text, speed, delay, onComplete]);

    return {displayText, isTyping, isComplete};
};