"use client";

import Image, { StaticImageData } from "next/image";
import useDarkModeObserver from "@/hooks/useDarkModeObserver";

interface LogoLightDarkSwitcherProps {
  LightModeImage: StaticImageData;
  DarkModeImage: StaticImageData;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

function LogoLightDarkSwitcher({
  LightModeImage,
  DarkModeImage,
  width = 60,
  height = 60,
  className,
  alt,
}: LogoLightDarkSwitcherProps) {
  const isDarkMode = useDarkModeObserver();

  return (
    <Image
      src={isDarkMode ? DarkModeImage : LightModeImage}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
}

export default LogoLightDarkSwitcher;
