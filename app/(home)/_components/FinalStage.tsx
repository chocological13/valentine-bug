import React, {useMemo, useState} from 'react';
import {RefreshCcw, Sparkles} from "lucide-react";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {gameMessages} from "@/constants/messages";
import {useTypewriter} from "@/hooks/useTypewriter";

interface FinalStageProps {
    reset: () => void;
}

const FinalStage: React.FC<FinalStageProps> = ({reset}) => {
    const randomTitle = useMemo(() => {
        return gameMessages.final.title[Math.floor(Math.random() * gameMessages.final.title.length)]
    }, [])

    const randomDescription = useMemo(() => {
        return gameMessages.final.description[Math.floor(Math.random() * gameMessages.final.description.length)]
    }, [])

    const randomConsole = useMemo(() => {
        return gameMessages.final.consoleOutput[Math.floor(Math.random() * gameMessages.final.consoleOutput.length)]
    }, [])

    const randomButton = useMemo(() =>{
        return gameMessages.final.buttonText[Math.floor(Math.random() * gameMessages.final.buttonText.length)]
    }, [])

    const { displayText: titleText, isComplete: isTitleComplete} = useTypewriter({
        text: randomTitle,
        speed: 50
    })

    const { displayText: descText, isComplete: isDescComplete } = useTypewriter({
        text: randomDescription,
        speed: 50,
        delay: 1750
    })

    const [showConsole, setShowConsole] = useState(false);

    React.useEffect(() => {
        if (isDescComplete) {
            setTimeout(() => setShowConsole(true), 500);
        }
    }, [isDescComplete]);

    return (
        <Card className="p-8 bg-white/90 backdrop-blur-sm flex flex-col gap-2 items-center text-center">
            <Sparkles className="w-16 h-16 text-pink-500 mx-auto animate-spin"/>
            <h1 className="text-4xl font-indie text-pink-600 min-h-[4rem]">
                {titleText}
                {!isTitleComplete && <span className="animate-pulse">|</span>}
            </h1>
            <p className="text-2xl text-gray-700 font-indie min-h-[4rem]">
                {descText}
                {!isDescComplete && isTitleComplete && <span className="animate-pulse">|</span>}
            </p>
            <div
                className={`bg-gray-900 p-4 rounded-lg text-green-400 font-indie text-base transition-opacity duration-500 ${
                    showConsole ? 'opacity-100' : 'opacity-0'
                }`}>
                <pre className="whitespace-pre-wrap break-words text-left">
                    {randomConsole.join('\n')}
                </pre>
            </div>
            <Button
                onClick={reset}
                className={`bg-gray-400 p-4 rounded-lg text-white font-indie text-base 
                    transition-opacity duration-500 ${showConsole ? 'opacity-100' : 'opacity-0'}`}
            >
                {randomButton} <RefreshCcw className="w-5 h-5 ml-2 text-pink-500"/>
            </Button>
        </Card>
    );
};

export default FinalStage;