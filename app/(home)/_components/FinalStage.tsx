import React from 'react';
import {RefreshCcw, Sparkles} from "lucide-react";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

interface FinalStageProps {
    reset: () => void;
}

const FinalStage: React.FC<FinalStageProps> = ({reset}) => {
    const successCode = [
        "Status: Compilation successful",
        "Return value: Infinite love",
        "Debug result: Perfect match found!",
    ].join("\n");

    return (
        <Card className="p-8 bg-white/90 backdrop-blur-sm flex flex-col gap-2 items-center text-center">
            <Sparkles className="w-16 h-16 text-pink-500 mx-auto animate-spin"/>
            <h1 className="text-4xl font-indie text-pink-600">
                Code Compilation Successful! 🎉
            </h1>
            <p className="text-2xl text-gray-700 font-indie">
                Our love has no bugs, only features! 🩷
            </p>
            <div className="bg-gray-900 p-4 rounded-lg text-green-400 font-indie text-base">
              <pre className="whitespace-pre-wrap break-words text-left">
                {successCode}
              </pre>
            </div>
            <Button
                onClick={reset}
                className="bg-gray-400 p-4 rounded-lg text-white font-indie text-base">
                Wanna debug again? <RefreshCcw className="w-5 h-5 text-pink-500" />
            </Button>
        </Card>
    );
};

export default FinalStage;