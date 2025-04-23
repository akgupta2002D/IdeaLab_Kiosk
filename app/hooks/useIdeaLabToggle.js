import { useState, useEffect } from 'react';

// Custom hook to toggle the visibility of IdeaLab hours every 30 seconds
export function useIdeaLabToggle() {
  // State to track whether IdeaLab hours should be shown or not
  const [showIdeaLabHours, setShowIdeaLabHours] = useState(false);

  useEffect(() => {
    // Set up an interval to toggle the state every 30 seconds
    const interval = setInterval(() => {
      setShowIdeaLabHours(prev => !prev); // Toggle the state
    }, 30000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Return the current state
  return showIdeaLabHours;
}