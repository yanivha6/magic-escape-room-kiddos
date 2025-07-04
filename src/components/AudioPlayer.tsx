import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface AudioPlayerProps {
  audioUrl?: string;
  placeholder?: string;
  autoplay?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  audioUrl, 
  placeholder = "אין קובץ שמע זמין כרגע",
  autoplay = false
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  React.useEffect(() => {
    if (autoplay && audioRef.current && audioUrl) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
    // eslint-disable-next-line
  }, [autoplay, audioUrl]);

  const togglePlayPause = () => {
    if (!audioRef.current || !audioUrl) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="p-6 bg-gradient-mystical border-magic-purple shadow-magical">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-lg font-bold text-magic-purple text-center">
          🎵 הקלטה קולית 🎵
        </div>
        
        {audioUrl ? (
          <>
            <audio
              ref={audioRef}
              src={audioUrl}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
            />
            
            <Button
              onClick={togglePlayPause}
              variant="sparkle"
              size="lg"
              className="text-xl px-8"
            >
              {isPlaying ? '⏸️ עצור' : '▶️ נגן'}
            </Button>
            
            {duration > 0 && (
              <div className="w-full max-w-xs">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                <div className="w-full bg-magic-purple-light rounded-full h-2 mt-1">
                  <div
                    className="bg-magic-purple h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-muted-foreground py-4">
            <div className="text-4xl mb-2">🎙️</div>
            <p>{placeholder}</p>
            <p className="text-sm mt-2 text-magic-purple">
              (ניתן להוסיף קובץ שמע מאוחר יותר)
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default AudioPlayer;
