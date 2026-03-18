import { createContext, useContext, useState } from "react";
import type { ModalContextType } from "../types/types";

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);

  const openAddMember  = () => setIsAddMemberOpen(true);
  const closeAddMember = () => setIsAddMemberOpen(false);

  return (
    <ModalContext.Provider value={{ isAddMemberOpen, openAddMember, closeAddMember }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within a ModalProvider");
  return ctx;
};