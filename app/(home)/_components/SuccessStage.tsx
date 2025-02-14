import React from 'react';
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

interface FixedStageProps {
    onClick?: () => void;
}

const SuccessStage: React.FC<FixedStageProps> = ({onClick}) => {
    return (
        <Card className="p-8 bg-white/90 backdrop-blur-sm flex flex-col gap-2 items-center text-center">
            <h1 className="text-4xl font-indie text-pink-600">
                You fixed my heart! ❤️
            </h1>
            <p className="text-2xl text-gray-700 font-indie">
                Now I can properly express my feelings...
            </p>
            <div className="space-y-4">
                <p className="text-3xl text-pink-500 font-bold font-indie mt-6">
                    Will you be my Valentine?
                </p>
                <div className="flex justify-center gap-4">
                    <Button
                        onClick={onClick}
                        className="px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transform hover:scale-110 transition-all shadow-lg font-indie text-xl"
                    >
                        Yes! ❤️
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default SuccessStage;