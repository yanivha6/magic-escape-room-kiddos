import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AudioPlayer from '@/components/AudioPlayer';
import CodeInput from '@/components/CodeInput';

const Stage3 = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/stage/4');
  };

  const goBack = () => {
    navigate('/stage/2');
  };

  return (
    <div className="min-h-screen bg-gradient-mystical p-6" dir="rtl">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            onClick={goBack}
            variant="mystical"
            className="absolute top-6 left-6"
          >
            ← חזרה לשלב קודם
          </Button>
          
          <h1 className="text-5xl font-bold text-magic-purple mb-4">
            🌟 שלב 3: החידה המסתורית 🌟
          </h1>
          <div className="text-2xl text-magic-gold font-semibold">
            פתרו את החידה הקסומה
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Riddle Card */}
          <Card className="p-8 bg-gradient-magical text-primary-foreground shadow-magical">
            <h2 className="text-3xl font-bold mb-6 text-center">
              🧩 החידה הקסומה 🧩
            </h2>
            
            <div className="bg-primary-foreground/10 rounded-lg p-6 mb-6">
              <p className="text-2xl leading-relaxed text-center font-bold">
                "אני נמצא בעמוק במים ויש לי 8 ידיים, מי אני?"
              </p>
            </div>
            
            <div className="text-lg space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌊</span>
                <p>חיה במים העמוקים</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🐙</span>
                <p>יש לי 8 ידיים ארוכות</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔍</span>
                <p>מי אני? (הכניסו ספרה אחת בלבד)</p>
              </div>
            </div>
          </Card>

          {/* Interactive Section */}
          <div className="space-y-6">
            
            {/* Audio Player */}
            <AudioPlayer 
              placeholder="הקלטה לשלב 3 - בקרוב יתווסף שמע"
              audioUrl="https://escaperoomstorge.blob.core.windows.net/escape/octopus.m4a"
            />
            
            {/* Code Input */}
            <CodeInput
              correctCode="4"
              onSuccess={handleSuccess}
              placeholder="הכנס ספרה אחת..."
              maxLength={1}
            />
            
            {/* Hint Card */}
            <Card className="p-6 bg-gradient-sparkle shadow-sparkle">
              <h3 className="text-xl font-bold text-accent-foreground mb-4 text-center">
                💡 רמזים נוספים 💡
              </h3>
              <div className="text-center space-y-2">
                <p className="text-accent-foreground">
                  🌊 חיה ימית חכמה
                </p>
                <p className="text-accent-foreground">
                  🐙 יש לה זרועות רבות
                </p>
                <p className="text-accent-foreground">
                  💜 יכולה לשנות צבעים
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 text-center">
          <div className="text-lg text-magic-purple font-semibold mb-4">
            התקדמות במשחק
          </div>
          <div className="flex justify-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-magic-gold text-primary-foreground flex items-center justify-center font-bold">
              ✓
            </div>
            <div className="w-8 h-8 rounded-full bg-magic-gold text-primary-foreground flex items-center justify-center font-bold">
              ✓
            </div>
            <div className="w-8 h-8 rounded-full bg-magic-purple text-primary-foreground flex items-center justify-center font-bold">
              3
            </div>
            <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage3;
