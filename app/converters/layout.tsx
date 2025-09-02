"use client";

// From app/converters/layout.tsx to components/sidebar.tsx is two folders up
// app/converters/layout.tsx  ->  ../../components/sidebar
import { SidebarProvider } from "../../components/sidebar";

export default function ConvertersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
