import { LucideIcon } from "lucide-react";

interface InfoItemProps {
  Icon: LucideIcon;
  text: string;
}

export function InfoItem({ Icon, text }: InfoItemProps) {
  return (
    <div className="flex flex-row items-center space-x-2">
      <Icon className="h-4 w-4 text-red-700" />
      <span>{text}</span>
    </div>
  );
}
