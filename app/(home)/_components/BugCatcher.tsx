import {Bug as BugType, Heart as HeartType} from "@/types/types";
import {Card} from "@/components/ui/card";
import {Bug, Heart} from "lucide-react"
import {gameMessages} from "@/constants/messages";
import {useState} from "react";

interface GameStageProps {
    score: number;
    bugs: BugType[];
    hearts: HeartType[];
    onCatchBug: (id: number) => void;
}

export const BugCatcher = ({ score, bugs, hearts, onCatchBug }: GameStageProps) => {
    const [catchMessage, setCatchMessage] = useState<string | null>(null);
    const [messagePosition, setMessagePosition] = useState({ x: 0, y: 0 });

    const handleCatchBug = (bug: BugType) => {
        // Set message position to bug's position
        setMessagePosition({ x: bug.x, y: bug.y });

        // Show random catching message
        const randomMessage = gameMessages.catchingPrompts[
            Math.floor(Math.random() * gameMessages.catchingPrompts.length)
            ];
        setCatchMessage(randomMessage);

        // Clear message after animation
        setTimeout(() => setCatchMessage(null), 1000);

        onCatchBug(bug.id);
    };

    return (
        <Card className="w-full max-w-2xl h-[400px] relative border-2 border-pink-300 bg-white/90">
            <div className="absolute top-2 left-2 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-indie">
                Score: {score}/5
            </div>

            {bugs.map((bug) => (
                <div
                    key={bug.id}
                    className="absolute cursor-pointer transform hover:scale-110 transition-all"
                    style={{
                        left: `${bug.x}%`,
                        top: `${bug.y}%`,
                    }}
                    onClick={() => handleCatchBug(bug)}
                >
                    <Bug className="w-8 h-8 text-gray-700" />
                </div>
            ))}

            {hearts.map(heart => (
                <Heart
                    key={heart.id}
                    className="absolute w-8 h-8 text-pink-500 animate-ping"
                    style={{
                        left: `${heart.x}%`,
                        top: `${heart.y}%`,
                    }}
                />
            ))}

            {catchMessage && (
                <div
                    className="absolute font-indie text-pink-500 animate-bounce transform -translate-y-full"
                    style={{
                        left: `${messagePosition.x}%`,
                        top: `${messagePosition.y}%`,
                    }}
                >
                    {catchMessage}
                </div>
            )}
        </Card>
    );
};