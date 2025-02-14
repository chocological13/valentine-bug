"use client"
import React, {useState} from 'react';
import {GameState} from "@/types/types";
import WelcomeStage from "@/app/(home)/_components/WelcomeStage";
import DebuggingStage from "@/app/(home)/_components/DebuggingStage";
import SuccessStage from "@/app/(home)/_components/SuccessStage";
import FinalStage from "@/app/(home)/_components/FinalStage";
import {BugCatcher} from "@/app/(home)/_components/BugCatcher";
import {useGameLogic} from "@/hooks/useGameLogic";
import {useGameSounds} from "@/hooks/useGameSounds";
import SoundControl from "@/components/SoundControl";
import Confetti from "@/components/Confetti";

const ValentinesGame = () => {
    const [gameState, setGameState] = useState<GameState>({
        stage: 0,
        score: 0,
        isDebugging: false,
        isMuted: false,
    });
    const [showConfetti, setShowConfetti] = useState(false);
    const {playSuccess} = useGameSounds(gameState.isMuted)
    const {bugs, hearts, score, catchBug, resetGame} = useGameLogic({isDebugging: gameState.isDebugging, isMuted: gameState.isMuted});

    const onStartGame = () => {
        setGameState(prev => ({...prev, stage: 1}))
    }

    const setDebugging = (bool:boolean) => {
        setGameState(prev => ({ ...prev, isDebugging: bool }));
    }

    const handleCatchBug = (bugId: number) => {
        catchBug(bugId);
        setGameState(prev => {
            const newScore = prev.score + 1;
            if (newScore >= 5) {
                playSuccess();
                setDebugging(false);
                setStage(2);
            }
            return { ...prev, score: newScore };
        });
    };

    const setStage = (stage: number) => {
        setGameState(prev => ({...prev, stage}));
    };

    const sayYes = () => {
        setShowConfetti(true);
        setGameState(prev => ({ ...prev, stage: 3 }));
    }

    const resetStage = () => {
        setDebugging(false);
        setGameState({
            stage: 0,
            score: 0,
            isDebugging: false,
            isMuted: false,
        });
        setShowConfetti(false);
        resetGame();
    }

    const renderStage = () => {
        switch (gameState.stage) {
            case 0:
                return <WelcomeStage onStart={onStartGame}/>
            case 1:
                return <DebuggingStage startDebugging={() => setDebugging(true)}/>
            case 2:
                return <SuccessStage onClick={sayYes}/>
            default:
                return <FinalStage reset={() => resetStage()}/>
        }
    }

    const toggleMute = () => {
        setGameState(prev => ({...prev, isMuted: !prev.isMuted}))
    }


    return (
        <div
            className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">

            <SoundControl toggleMute={toggleMute} isMuted={gameState.isMuted} />

            {showConfetti && (
                <div className="pointer-events-none">
                    <Confetti />
                </div>
            )}

            {gameState.isDebugging ? (
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