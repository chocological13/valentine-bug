import React from 'react';
import {Card} from "@/components/ui/card";
import {Terminal} from "lucide-react";
import {Button} from "@/components/ui/button";
import {gameMessages} from "@/constants/messages";
import {useTypewriter} from "@/hooks/useTypewriter";

interface WelcomeStageProps {
    onStart?: () => void;
}

const WelcomeStage: React.FC<WelcomeStageProps> = ({onStart}) => {
    const randomMessage = React.useMemo(() =>
            gameMessages.welcome[Math.floor(Math.random() * gameMessages.welcome.length)],
        []
    );

    const { displayText, isComplete } = useTypewriter({
        text: randomMessage,
        speed: 50
    });

    return (
        <Card className="p-8 bg-white/90 backdrop-blur-sm flex flex-col items-center">
            <h1 className="text-4xl font-indie text-pink-600 mb-8 relative text-center">
                {displayText}
                {!isComplete && <span className="animate-pulse">|</span>}
            </h1>
            <Terminal className="w-16 h-16 text-pink-500 mx-auto animate-pulse" />
            <Button
                onClick={onStart}
                className={`mt-6 font-indie text-xl transition-opacity duration-500 ${
                    isComplete ? 'opacity-100' : 'opacity-0'
                }`}
                size="lg"
            >
                Start Debugging
            </Button>
        </Card>
    );
};

export default WelcomeStage;