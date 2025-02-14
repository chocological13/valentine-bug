import React from 'react';
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {gameMessages} from "@/constants/messages";
import {useTypewriter} from "@/hooks/useTypewriter";

interface DebuggingStageProps {
    startDebugging: () => void;
}

const DebuggingStage: React.FC<DebuggingStageProps> = ({startDebugging} : DebuggingStageProps) => {
    const randomTitle = React.useMemo(() =>
            gameMessages.debugging.title[Math.floor(Math.random() * gameMessages.debugging.title.length)],
        []
    );
    const randomDesc = React.useMemo(() =>
            gameMessages.debugging.description[Math.floor(Math.random() * gameMessages.debugging.description.length)],
        []
    );
    const randomButton = React.useMemo(() =>
            gameMessages.debugging.buttonText[Math.floor(Math.random() * gameMessages.debugging.buttonText.length)],
        []
    );

    const { displayText: titleText, isComplete: isTitleComplete } = useTypewriter({
        text: randomTitle,
        speed: 50
    });

    const { displayText: descText, isComplete: isDescComplete } = useTypewriter({
        text: randomDesc,
        speed: 50,
        delay: 1750
    });


    return (
        <div>
            <Card className="p-8 bg-white/90 backdrop-blur-sm flex flex-col gap-3 items-center">
                <div className="bg-gray-900 p-4 rounded-lg text-pink-300 font-indie text-base">
                    <pre className="whitespace-pre-wrap break-words">{gameMessages.codePuzzle}</pre>
                </div>
                <h2 className="text-2xl text-pink-600 font-indie min-h-[2rem] text-center">
                    {titleText}
                    {!isTitleComplete && <span className="animate-pulse">|</span>}
                </h2>
                <p className="text-gray-700 font-indie text-xl text-center min-h-[2rem]">
                    {descText}
                    {!isDescComplete && isTitleComplete && <span className="animate-pulse">|</span>}
                </p>
                <Button
                    onClick={startDebugging}
                    className={`px-8 py-4 bg-pink-500 text-white rounded-full 
                    hover:bg-pink-600 transform hover:scale-110 transition-all 
                    shadow-lg font-indie text-xl ${
                        isDescComplete ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {randomButton}
                </Button>
            </Card>
        </div>
    );
};

export default DebuggingStage;