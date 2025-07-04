import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AudioPlayer from '@/components/AudioPlayer';
import CodeInput from '@/components/CodeInput';

const Stage5 = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/stage/6');
  };

  const goBack = () => {
    navigate('/stage/4');
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
            🌟 שלב 5: אתגר הטלוויזיה 🌟
          </h1>
          <div className="text-2xl text-magic-gold font-semibold">
            פענחו את הרמז מהתמונה!
          </div>
        </div>
        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Instructions Card */}
          <Card className="p-8 bg-gradient-magical text-primary-foreground shadow-magical">
            <h2 className="text-3xl font-bold mb-6 text-center">
              🖼️ רמז בתמונה 🖼️
            </h2>
            <div className="bg-primary-foreground/10 rounded-lg p-6 mb-6">
              <p className="text-2xl leading-relaxed text-center font-bold">
                הסתכלו היטב בתמונה וגלו את הקוד!
              </p>
            </div>
            <div className="text-lg space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🖼️</span>
                <p>התמונה מכילה את הרמז לקוד</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔢</span>
                <p>הכניסו את הקוד בן 4 הספרות כדי לעבור לשלב הסופי</p>
              </div>
            </div>
          </Card>
          {/* Interactive Section */}
          <div className="space-y-6">
            <img
              src="https://escaperoomstorge.blob.core.windows.net/escape/tv2.jpeg"
              alt="רמז טלוויזיה 2"
              className="w-full rounded-lg mb-4"
            />
            <CodeInput
              correctCode="2222"
              onSuccess={handleSuccess}
              placeholder="הכנס 4 ספרות..."
              maxLength={4}
            />
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
            <div className="w-8 h-8 rounded-full bg-magic-gold text-primary-foreground flex items-center justify-center font-bold">
              ✓
            </div>
            <div className="w-8 h-8 rounded-full bg-magic-gold text-primary-foreground flex items-center justify-center font-bold">
              ✓
            </div>
            <div className="w-8 h-8 rounded-full bg-magic-purple text-primary-foreground flex items-center justify-center font-bold">
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage5;
