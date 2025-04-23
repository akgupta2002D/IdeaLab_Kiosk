import { useState, useEffect } from "react";

export function usePosterSlider(events, intervalTime = 5000) {
  const [currentEventIndex, setCurrentEventIndex] = useState(0); // State to track the current event index

  useEffect(() => {
    // Set up an interval to update the current event index periodically
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length); // Cycle through events
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [events.length, intervalTime]); // Re-run effect if events length or interval time changes

  return events[currentEventIndex] || {}; // Return the current event or an empty object if none
}