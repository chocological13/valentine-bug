"use client"
import React, {useState} from 'react';
import {GameState} from "@/types/types";
import WelcomeStage from "@/app/(home)/_components/WelcomeStage";
import DebuggingStage from "@/app/(home)/_components/DebuggingStage";
import FixedStage from "@/app/(home)/_components/FixedStage";
import FinalStage from "@/app/(home)/_components/FinalStage";
import {HeartDoodle, Squiggle, Star} from "@/components/decorative/Doodles";
import {BugCatcher} from "@/app/(home)/_components/BugCatcher";
import {useGameLogic} from "@/hooks/useGameLogic";

const ValentinesGame = () => {
    const [gameState, setGameState] = useState<GameState>({
        stage: 0,
        score: 0,
        isDebugging: false,
        isMuted: false,
    });
    const [isDebugging, setIsDebugging] = useState(false);
    const [code, setCode] = useState<string>("");

    const onStartGame = () => {
        setGameState(prev => ({...prev, stage:1}))
    }

    const loveCode = [
        'const feelings = {',
        '  love: true,',
        '  intensity: "∞",',
        '  since: new Date("FirstMet"),',
        '  reason: "You make my heart skip a beat ❤️"',
        '};'
    ].join('\n');

    const startDebugging = () => {
        setIsDebugging(true);
        setCode(loveCode);
    }

    const renderStage = () => {
        switch (gameState.stage) {
            case 0:
                return <WelcomeStage onStart={onStartGame} />
            case 1:
                return <DebuggingStage code={code} startDebugging={startDebugging} />
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {renderStage()}
        </div>
    );
};

export default ValentinesGame;