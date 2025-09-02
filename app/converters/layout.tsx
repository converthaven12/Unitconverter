"use client";

import { SidebarProvider } from "@/components/sidebar"; 

export default function ConvertersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
