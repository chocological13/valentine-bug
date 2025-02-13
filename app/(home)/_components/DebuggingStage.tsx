import React from 'react';
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";

interface DebuggingStageProps {
    code: string;
    startDebugging: () => void;
}

const DebuggingStage: React.FC<DebuggingStageProps> = ({code, startDebugging} : {code:string, startDebugging:() => void}) => {
    return (
        <div>
            <Card className="p-8 bg-white/90 backdrop-blur-sm flex flex-col items-center">
                <div className="bg-gray-900 p-4 rounded-lg text-pink-300 font-indie text-base">
                    <pre className="whitespace-pre-wrap break-words">{code}</pre>
                </div>
                <p className="text-gray-700 font-dancing text-2xl">
                    Looks like there are some bugs in my code!
                    Can you help catch them? 🐛
                </p>
                <Button
                    onClick={startDebugging}
                    className="px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transform hover:scale-110 transition-all shadow-lg font-dancing text-xl"
                >
                    Debug My Heart
                </Button>
            </Card>
        </div>
    );
};

export default DebuggingStage;