import React from 'react';
import {Button} from "@/components/ui/button";
import {Volume2, VolumeX} from "lucide-react";

interface SoundControlProps {
    toggleMute: () => void;
    isMuted: boolean
}

const SoundControl = ({toggleMute, isMuted} : SoundControlProps) => {
    return (
        <Button
            onClick={toggleMute}
            className="absolute top-4 right-4 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-all"
        >
            {
                isMuted ? (
                    <VolumeX className="w-6 h-6 text-pink-500"/>
                ) : (
                    <Volume2 className="w-6 h-6 text-pink-500"/>
                )
            }
        </Button>
    );
};

export default SoundControl;