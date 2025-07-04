import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface CodeInputProps {
  correctCode: string;
  onSuccess: () => void;
  placeholder?: string;
  maxLength?: number;
}

const CodeInput: React.FC<CodeInputProps> = ({ 
  correctCode, 
  onSuccess, 
  placeholder = "הכנס קוד...",
  maxLength = 4 
}) => {
  const [inputCode, setInputCode] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (inputCode === correctCode) {
      toast({
        title: "🎉 כל הכבוד!",
        description: "הקוד נכון! אתה ממשיך לשלב הבא",
      });
      onSuccess();
    } else {
      setIsShaking(true);
      toast({
        title: "❌ קוד שגוי",
        description: "נסה שוב! תחשוב על החידה...",
        variant: "destructive",
      });
      
      // Reset shaking animation
      setTimeout(() => setIsShaking(false), 500);
      
      // Clear input after wrong attempt
      setTimeout(() => setInputCode(''), 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Card className="p-6 bg-gradient-mystical border-magic-purple shadow-magical">
      <div className="flex flex-col items-center space-y-6">
        <div className="text-xl font-bold text-magic-purple text-center">
          🔐 הכנס את הקוד הסודי 🔐
        </div>
        
        <div className={`w-full max-w-xs ${isShaking ? 'animate-bounce' : ''}`}>
          <Input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value.slice(0, maxLength))}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="text-center text-2xl font-bold tracking-widest border-magic-purple focus:border-magic-gold"
            maxLength={maxLength}
          />
        </div>
        
        <div className="flex space-x-4">
          <Button
            onClick={handleSubmit}
            variant="magical"
            size="lg"
            disabled={inputCode.length === 0}
            className="text-xl px-8"
          >
            ✨ בדוק קוד ✨
          </Button>
          
          <Button
            onClick={() => setInputCode('')}
            variant="mystical"
            size="lg"
            className="text-lg"
          >
            🗑️ נקה
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground text-center">
          הקוד מכיל {maxLength} ספרות
        </div>
      </div>
    </Card>
  );
};

export default CodeInput;