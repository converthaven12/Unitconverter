"use client";

import { createContext, useContext, useState } from "react";

type SidebarContextType = {
  open: boolean;
  setOpen: (v: boolean) => void;
  toggle: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  return (
    <SidebarContext.Provider value={{ open, setOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("useSidebar must be used within a SidebarProvider");
    }
    // Fallback in production if provider missing
    return { open: false, setOpen: () => {}, toggle: () => {} } as SidebarContextType;
  }
  return ctx;
}
