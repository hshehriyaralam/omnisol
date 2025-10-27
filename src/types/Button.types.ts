
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface GradientButtonProps {
  text: string;
  fromColor?: string;     
  toColor?: string;     
  icon?: IconDefinition;  
  iconColor?: string;
  className?: string;
  width?: string | number;
}
