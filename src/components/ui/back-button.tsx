"use client";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "lucide-react";

function BackButton({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <span
      className={`flex cursor-pointer align-middle font-bold text-project-dark-gray dark:text-secondary-foreground ${className}`}
      onClick={() => router.back()}
    >
      <ChevronLeftIcon />
      Back
    </span>
  );
}

export default BackButton;
