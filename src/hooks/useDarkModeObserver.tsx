import { useEffect, useState } from "react";

function useDarkModeObserver() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Added this if check to prevent error when it runs in the server-side
    if (typeof window !== "undefined") {
      const checkDarkMode = () => {
        setIsDarkMode(document.body.classList.contains("dark"));
      };

      // Initial check
      checkDarkMode();

      const observer = new MutationObserver(() => checkDarkMode());
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => observer.disconnect();
    }
  }, []);

  return isDarkMode;
}

export default useDarkModeObserver;
