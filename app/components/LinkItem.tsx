import { MoveUpRight } from "lucide-react";
import Link from "next/link";

interface LinkItemProps {
  href: string;
  label: string;
}

export function LinkItem({ href, label }: LinkItemProps) {
  return (
    <div className="flex flex-row items-center space-x-2">
      <MoveUpRight className="h-4 w-4 text-red-700" />
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </Link>
    </div>
  );
}
