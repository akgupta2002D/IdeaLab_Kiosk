import { useState, useEffect } from "react";

export function usePosterSlider(events, intervalTime = 15000) {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [events.length, intervalTime]);

  return events[currentEventIndex] || {};
}