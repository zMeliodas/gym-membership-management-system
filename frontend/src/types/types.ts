import type { IconType } from "react-icons";

export interface ButtonProps {
  Icon?: IconType;
  title?: string;
  link?: string;
  type?: "button" | "submit" | "reset";
}

export interface StatCardProps {
  title?: string;
  Icon?: IconType;
  value?: string;
}

export interface PlanCardProps {
  tier: "Basic" | "Silver" | "Gold";
  price: number;
  active: number;
  revenue: number;
  description: string;
  features?: string[];
  featureLimit?: number;
  onClickDetails: () => void,
}

