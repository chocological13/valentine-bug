import useSound from "use-sound";
import {useEffect} from "react";

export const useGameSounds = (isMuted : boolean) => {

    const [playPop] = useSound('/sounds/bug-catch.wav', { soundEnabled: !isMuted });
    const [playSuccess] = useSound('/sounds/success.wav', { soundEnabled: !isMuted, volume: 0.05 });
    const [playBgMusic, { pause: pauseBgMusic }] = useSound('/sounds/bg-music.mp3', {
        soundEnabled: !isMuted,
        loop: true,
        volume: 0.1,
        preload: true,
    });

    useEffect(() => {
        if (!isMuted) {
            playBgMusic();
        } else {
            pauseBgMusic();
        }
    }, [isMuted, playBgMusic, pauseBgMusic]);

    return {
        playPop,
        playSuccess,
        playBgMusic,
    }
}