"use client"
import React, {useState} from 'react';
import {GameState} from "@/types/types";
import WelcomeStage from "@/app/(home)/_components/WelcomeStage";
import DebuggingStage from "@/app/(home)/_components/DebuggingStage";
import SuccessStage from "@/app/(home)/_components/SuccessStage";
import FinalStage from "@/app/(home)/_components/FinalStage";
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
    const {bugs, hearts, score, catchBug, resetGame} = useGameLogic(isDebugging);

    const onStartGame = () => {
        setGameState(prev => ({...prev, stage: 1}))
    }

    const startDebugging = () => {
        setIsDebugging(true);
    }

    const handleCatchBug = (bugId: number) => {
        catchBug(bugId);
        setGameState(prev => {
            const newScore = prev.score + 1;
            if (newScore >= 5) {
                setIsDebugging(false);
                setStage(2);
            }
            return { ...prev, score: newScore };
        });
    };

    const setStage = (stage: number) => {
        setGameState(prev => ({...prev, stage}));
    };

    const resetStage = () => {
        setIsDebugging(false);
        setGameState({
            stage: 0,
            score: 0,
            isDebugging: false,
            isMuted: false,
        });
        resetGame();
    }

    const renderStage = () => {
        switch (gameState.stage) {
            case 0:
                return <WelcomeStage onStart={onStartGame}/>
            case 1:
                return <DebuggingStage startDebugging={startDebugging}/>
            case 2:
                return <SuccessStage onClick={() => setGameState(prev => ({...prev, stage: 3}))}/>
            default:
                return <FinalStage reset={() => resetStage()}/>
        }
    }

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {isDebugging ? (
                <BugCatcher
                    score={score}
                    bugs={bugs}
                    hearts={hearts}
                    onCatchBug={handleCatchBug}
                />
            ) : renderStage()}
        </div>
    );
};

export default ValentinesGame;