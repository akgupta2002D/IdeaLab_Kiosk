import { useState, useEffect } from 'react';

export function useIdeaLabToggle() {
  const [showIdeaLabHours, setShowIdeaLabHours] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIdeaLabHours(prev => !prev);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return showIdeaLabHours;
}