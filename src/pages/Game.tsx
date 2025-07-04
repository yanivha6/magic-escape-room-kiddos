import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AudioPlayer from '@/components/AudioPlayer';

const Game = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/stage/1');
  };

  return (
    <div className="min-h-screen bg-gradient-mystical p-6" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-magic-purple mb-4">
            🪄 חדר בריחה קסום 🪄
          </h1>
          <h2 className="text-2xl text-magic-gold font-semibold mb-2">
            הרפתקת הקוסמים הצעירים
          </h2>
          <p className="text-lg text-muted-foreground">
            ברוכים הבאים לעולם הקסמים המופלא!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          
          {/* Instructions Card */}
          <Card className="p-8 bg-gradient-magical text-primary-foreground shadow-magical">
            <h3 className="text-3xl font-bold mb-6 text-center">
              📜 הוראות המשחק 📜
            </h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎯</span>
                <p>פתרו חידות קסומות וגלו קודים סודיים</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🔍</span>
                <p>חפשו רמזים בחדר ובהקלטות הקוליות</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🔢</span>
                <p>הכניסו קודים בני 4 ספרות כדי להתקדם</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎉</span>
                <p>עבדו כצוות ותהנו מההרפתקה!</p>
              </div>
            </div>
          </Card>

          {/* Audio & Start Section */}
          <div className="space-y-6">
            {/* Audio Player */}
            <AudioPlayer 
              placeholder="הקלטת הקדמה - בקרוב יתווסף שמע"
              audioUrl="https://escaperoomstorge.blob.core.windows.net/escape/opening.m4a"
            />
            
            {/* Start Button */}
            <Card className="p-8 text-center bg-gradient-sparkle shadow-sparkle">
              <h3 className="text-3xl font-bold mb-6 text-accent-foreground">
                🌟 מוכנים להתחיל? 🌟
              </h3>
              <Button
                onClick={startGame}
                variant="magical"
                size="lg"
                className="text-2xl px-12 py-6 transform hover:scale-110 transition-all duration-300"
              >
                🚀 התחל את ההרפתקה! 🚀
              </Button>
              <p className="mt-4 text-lg text-accent-foreground font-semibold">
                לחצו כדי להיכנס לעולם הקסמים
              </p>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="text-4xl mb-4">✨🔮⭐🪄✨</div>
          <p className="text-lg text-magic-purple font-semibold">
            בהצלחה, קוסמים צעירים!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
