import type { ComponentType } from "react";
import {
  Anchor,
  Sparkles,
  Grip,
  Sun,
  Crown,
  MessageCircle,
  Plane,
  Stethoscope,
  BedDouble,
  MapPin,
  HeartPulse,
  Smile,
} from "lucide-react";

type IconProps = { className?: string; strokeWidth?: number };

/** Maps the icon-name strings stored in lib/* data to lucide components. */
const map: Record<string, ComponentType<IconProps>> = {
  Anchor,
  Sparkles,
  Grip,
  Sun,
  Crown,
  MessageCircle,
  Plane,
  Stethoscope,
  BedDouble,
  MapPin,
  HeartPulse,
  Smile,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
