"use client"

import { useEffect, useState } from "react";

function getWindowDimensions() {
  // Check if window is defined to avoid errors during SSR
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      w: width,
      h: height
    };
  } else {
    // Provide a default value for server-side rendering
    return {
      w: 0,
      h: 0
    };
  }
}


export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
