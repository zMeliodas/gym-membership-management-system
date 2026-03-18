import type { IconType } from "react-icons";

export interface ButtonProps {
  Icon?: IconType;
  title?: string;
  link?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
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
  onClickDetails: () => void;
}

export interface AddMemberModalProps {
  onSubmit: (data: {
    fn: string;
    ln: string;
    email: string;
    phone: string;
    plan: string;
    startDate: string;
    duration: string;
  }) => void;
}

export interface ModalContextType {
  isAddMemberOpen: boolean;
  openAddMember: () => void;
  closeAddMember: () => void;
}

export interface AddMemberData {
  fn: string;
  ln: string;
  email: string;
  phone: string;
  plan: string;
  startDate: string;
  duration: string;
}

export interface AddMemberModalProps {
  onSubmit: (data: AddMemberData) => void;
}

export type Theme = "light" | "dark";
