"use client";

import { SidebarProvider } from "@/components/sidebar"; // 👈 change path if SidebarProvider lives elsewhere

export default function ConvertersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
