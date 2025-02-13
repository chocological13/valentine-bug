import {Bug as BugType, Heart as HeartType} from "@/types/types";
import {Card} from "@/components/ui/card";
import {Bug, Heart} from "lucide-react"

interface GameStageProps {
    score: number;
    bugs: BugType[];
    hearts: HeartType[];
    onCatchBug: (id: number) => void;
}

export const BugCatcher = ({ score, bugs, hearts, onCatchBug }: GameStageProps) => {
    return (
        <Card className="w-full max-w-2xl h-[400px] relative border-2 border-pink-300 bg-white/90">
            <div className="absolute top-2 left-2 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-dancing">
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
                    onClick={() => onCatchBug(bug.id)}
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
        </Card>
    );
};