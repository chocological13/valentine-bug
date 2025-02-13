import React from 'react';
import {Card} from "@/components/ui/card";
import {HeartDoodle} from "@/components/decorative/Doodles";
import {Terminal} from "lucide-react";
import {Button} from "@/components/ui/button";

interface WelcomeStageProps {
    onStart?: () => void;
}

const WelcomeStage: React.FC<WelcomeStageProps> = ({onStart}) => {
    return (
        <Card className="p-8 bg-white/90 backdrop-blur-sm flex flex-col items-center">
            <h1 className="text-4xl font-indie text-pink-600 mb-8 relative">
                Help me debug my feelings.exe? 💝
            </h1>
            <Terminal className="w-16 h-16 text-pink-500 mx-auto animate-pulse" />
            <Button
                onClick={onStart}
                className="mt-6 font-indie text-xl"
                size="lg"
            >
                Start Debugging
            </Button>
        </Card>
    );
};

export default WelcomeStage;