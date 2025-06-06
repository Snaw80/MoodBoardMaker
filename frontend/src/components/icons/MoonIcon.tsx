import React from 'react';

interface MoonIconProps {
  className?: string;
}

export const MoonIcon: React.FC<MoonIconProps> = ({ className }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
  </svg>
); 