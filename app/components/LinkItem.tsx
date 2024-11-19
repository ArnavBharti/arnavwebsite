import { MoveUpRight } from "lucide-react";
import Link from "next/link";

interface LinkItemProps {
  href: string;
  label: string;
}

export function LinkItem({ href, label }: LinkItemProps) {
  return (
    <div className="flex flex-row items-center space-x-1">
      <MoveUpRight className="h-4 w-4" />
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </Link>
    </div>
  );
}
