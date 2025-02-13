import React from 'react';
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";

interface DebuggingStageProps {
    startDebugging: () => void;
}

const DebuggingStage: React.FC<DebuggingStageProps> = ({startDebugging} : DebuggingStageProps) => {
    const loveCode = [
        'const feelings = {',
        '  love: true,',
        '  intensity: "∞",',
        '  since: new Date("FirstMet"),',
        '  reason: "You make my heart skip a beat ❤️"',
        '};'
    ].join('\n');

    return (
        <div>
            <Card className="p-8 bg-white/90 backdrop-blur-sm flex flex-col gap-3 items-center">
                <div className="bg-gray-900 p-4 rounded-lg text-pink-300 font-indie text-base">
                    <pre className="whitespace-pre-wrap break-words">{loveCode}</pre>
                </div>
                <p className="text-gray-700 font-indie text-2xl text-center">
                    Looks like there are some bugs in my code!
                    Can you help catch them? 🐛
                </p>
                <Button
                    onClick={startDebugging}
                    className="px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transform hover:scale-110 transition-all shadow-lg font-indie text-xl"
                >
                    Debug My Heart 🩹
                </Button>
            </Card>
        </div>
    );
};

export default DebuggingStage;