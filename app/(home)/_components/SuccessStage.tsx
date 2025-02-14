import React, {useState} from 'react';
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {gameMessages} from "@/constants/messages";
import {useTypewriter} from "@/hooks/useTypewriter";

interface FixedStageProps {
    onClick?: () => void;
}

const SuccessStage: React.FC<FixedStageProps> = ({onClick}) => {
    // Random messages
    const messages = React.useMemo(() => ({
        title: gameMessages.success.title[Math.floor(Math.random() * gameMessages.success.title.length)],
        desc: gameMessages.success.description[Math.floor(Math.random() * gameMessages.success.description.length)],
        question: gameMessages.success.question[Math.floor(Math.random() * gameMessages.success.question.length)],
        button: gameMessages.success.buttonText[Math.floor(Math.random() * gameMessages.success.buttonText.length)]
    }), []);

    // Title animation
    const {
        displayText: titleText,
        isComplete: isTitleComplete
    } = useTypewriter({
        text: messages.title,
        speed: 50
    });

    // Description animation - starts after title
    const {
        displayText: descText,
        isComplete: isDescComplete
    } = useTypewriter({
        text: messages.desc,
        speed: 50,
        delay: 1500,
    });

    // Question animation - starts after description
    const {
        displayText: questionText,
        isComplete: isQuestionComplete
    } = useTypewriter({
        text: messages.question,
        speed: 50,
        delay: 3500,
    });

    // Button visibility
    const [showButton, setShowButton] = useState(false);

    // Show button after question is complete
    React.useEffect(() => {
        if (isQuestionComplete) {
            const timer = setTimeout(() => setShowButton(true), 500);
            return () => clearTimeout(timer);
        }
    }, [isQuestionComplete]);

    return (
        <Card className="p-8 bg-white/90 backdrop-blur-sm flex flex-col gap-2 items-center text-center">
            <h1 className="text-4xl font-indie text-pink-600 min-h-[4rem]">
                {titleText}
                {!isTitleComplete && <span className="animate-pulse">|</span>}
            </h1>

            <p className="text-2xl text-gray-700 font-indie min-h-[3rem]">
                {descText}
                {!isDescComplete && isTitleComplete && <span className="animate-pulse">|</span>}
            </p>

            <div className="space-y-4">
                <p className="text-3xl text-pink-500 font-bold font-indie mt-6 min-h-[3rem]">
                    {questionText}
                    {!isQuestionComplete && isDescComplete && <span className="animate-pulse">|</span>}
                </p>

                <div className="flex justify-center gap-4">
                    <Button
                        onClick={onClick}
                        className={`px-8 py-4 bg-pink-500 text-white rounded-full 
                            hover:bg-pink-600 transform hover:scale-110 transition-all 
                            shadow-lg font-indie text-xl ${
                            showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        } transition-all duration-500`}
                    >
                        {messages.button}
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default SuccessStage;