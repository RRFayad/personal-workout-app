"use client";
import { useState } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./tooltip";
import { MoonIcon, SunIcon } from "lucide-react";

interface LightDarkToggleProps {
  className?: string;
}

function LightDarkToggle({ className }: LightDarkToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="hidden lg:inline-block">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={className}
            onClick={() => {
              setIsDarkMode((prevState) => !prevState);
              document.body.classList.toggle("dark");
            }}
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </TooltipTrigger>
          <TooltipContent>
            {isDarkMode ? "Enable light mode" : "Enable dark mode"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default LightDarkToggle;
