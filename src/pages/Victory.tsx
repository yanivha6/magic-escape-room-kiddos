import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AudioPlayer from '@/components/AudioPlayer';

const Victory = () => {
  const navigate = useNavigate();

  const startNewGame = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-magical p-6" dir="rtl">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Victory Header */}
        <div className="mb-12">
          <div className="text-8xl mb-6">🎉</div>
          <h1 className="text-6xl font-bold text-primary-foreground mb-6 animate-bounce">
            🏆 ניצחתם! 🏆
          </h1>
          <div className="text-3xl text-primary-foreground font-bold mb-4">
            ברכותינו - אתם עכשיו קוסמים אמיתיים! 
          </div>
          <div className="text-2xl text-primary-foreground/90">
            ✨ כל הכבוד על השלמת כל האתגרים! ✨
          </div>
        </div>

        {/* Victory Content */}
        <div className="space-y-8">
          
          {/* Achievement Card */}
          <Card className="p-8 bg-gradient-sparkle shadow-sparkle transform hover:scale-105 transition-all duration-300">
            <h2 className="text-4xl font-bold text-accent-foreground mb-6">
              🌟 הישג מיוחד 🌟
            </h2>
            <div className="text-2xl text-accent-foreground space-y-4">
              <p>🧙‍♂️ קיבלתם את התואר "קוסם מתחיל"</p>
              <p>🔮 פתרתם את כל החידות הקסומות</p>
              <p>⭐ הוכחתם שאתם קוסמים אמיתיים!</p>
            </div>
          </Card>

          {/* Audio Player */}
          <AudioPlayer 
            placeholder="הקלטת ניצחון - בקרוב יתווסף שמע חגיגי"
          />

          {/* Magic Effects */}
          <div className="text-8xl space-x-4 animate-bounce">
            ✨ 🎭 🔮 🌟 ⭐
          </div>

          {/* Celebration Message */}
          <Card className="p-8 bg-gradient-mystical border-magic-gold shadow-magical">
            <h3 className="text-3xl font-bold text-magic-purple mb-6">
              🎪 חגיגת הקסמים 🎪
            </h3>
            <div className="text-xl text-magic-purple space-y-3">
              <p>🎉 עברתם את כל השלבים בהצלחה</p>
              <p>🧠 הוכחתם שאתם חכמים וחשובים</p>
              <p>🏆 אתם ראויים לתואר קוסם אמיתי</p>
              <p>✨ הקסם שלכם יימשך לנצח!</p>
            </div>
          </Card>

          {/* Play Again Button */}
          <div className="pt-8">
            <Button
              onClick={startNewGame}
              variant="magical"
              size="lg"
              className="text-2xl px-12 py-4 transform hover:scale-110 transition-all duration-300"
            >
              🎮 שחקו שוב 🎮
            </Button>
          </div>

          {/* Final Message */}
          <div className="text-xl text-primary-foreground/80 pt-6">
            תודה שהשתתפתם במשחק הבריחה הקסום! 🌟
          </div>
        </div>
      </div>
    </div>
  );
};

export default Victory;