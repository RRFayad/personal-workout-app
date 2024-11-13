"use client";

import { DrawerContext } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

interface MenuItemProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function MobileMenuItem({ children, href, className }: MenuItemProps) {
  const { onClose } = useContext(DrawerContext);
  const pathname = usePathname();
  const isActive = `/${pathname.split("/")[1]}` === href && href !== "/";

  return (
    <li key={href} className={`w-full`}>
      <Link
        className={`block w-full rounded-md p-2 font-bold ${!isActive && "text-foreground"} ${isActive && "bg-project-blue text-white"} ${className} `}
        href={href}
        onClick={onClose}
      >
        {children}
      </Link>
    </li>
  );
}

export default MobileMenuItem;
