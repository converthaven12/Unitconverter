"use client";

// use relative path instead of '@/...'
import { SidebarProvider } from "../../components/sidebar";

export default function ConvertersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
