// Update this page (the content is just a fallback if you fail to update the page)

import AudioPlayer from "@/components/AudioPlayer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
      <AudioPlayer
        audioUrl="https://escaperoomstorge.blob.core.windows.net/escape/opening.m4a"
        autoplay={true}
      />
    </div>
  );
};

export default Index;
