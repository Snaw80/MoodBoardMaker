import { useState, useEffect } from 'react';
import './App.css'
import { Header } from './components/Header';

interface Image {
  id: string;
  url: string;
}

function App() {
  const [isDark, setIsDark] = useState(false);
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    document.documentElement.style.setProperty('--background-color', isDark ? '#1a1a1a' : '#ffffff');
    document.documentElement.style.setProperty('--text-color', isDark ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)');
  }, [isDark]);

  const handleAddImage = (url: string) => {
    if (url && url.match(/\.(jpeg|jpg|gif|png)$/)) {
      setImages(prev => [...prev, { id: Date.now().toString(), url }]);
    }
  };

  return (
    <>
      <Header isDark={isDark} onThemeToggle={() => setIsDark(isDark => !isDark)} onAddImage={handleAddImage} />
      <div className="container">
        <div className="moodboard">
          {images.map(image => (
            <div key={image.id} className="moodboard-item">
              <img src={image.url} alt="Moodboard item" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
