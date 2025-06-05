import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';
import { useState } from 'react';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
  onAddImage: (url: string) => void;
}

export function Header({ isDark, onThemeToggle, onAddImage }: HeaderProps) {
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (imageUrl.trim()) {
      onAddImage(imageUrl.trim());
      setImageUrl('');
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="title"><div className="mood">Mood</div><div className="dot">.</div></div>
        <form onSubmit={handleSubmit}>
          <input
            className="add-image"
            aria-label="Add image"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL..."
          />
        </form>
      </div>
      <button
        className="theme-toggle"
        onClick={onThemeToggle}
        aria-label="Toggle dark mode"
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </button>
    </header>
  );
} 