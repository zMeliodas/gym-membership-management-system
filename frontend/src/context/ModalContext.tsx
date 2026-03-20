import { createContext, useContext, useState } from "react";
import type { EditMemberData, ModalContextType } from "../types/types";

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<EditMemberData | null>(
    null,
  );
  const [isEditMemberOpen, setIsEditMemberOpen] = useState(false);

  const openAddMember = () => setIsAddMemberOpen(true);
  const closeAddMember = () => setIsAddMemberOpen(false);

  const openEditMember = (member: EditMemberData) => {
    setEditingMember(member);
    setIsEditMemberOpen(true);
  };

  const closeEditMember = () => {
    setIsEditMemberOpen(false);
    // small delay so the exit transition plays before clearing the member
    setTimeout(() => setEditingMember(null), 300);
  };

  return (
    <ModalContext.Provider
      value={{
        isAddMemberOpen,
        openAddMember,
        closeAddMember,
        editingMember,
        isEditMemberOpen,
        openEditMember,
        closeEditMember,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within a ModalProvider");
  return ctx;
};
