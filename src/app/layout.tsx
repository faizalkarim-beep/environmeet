import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EnvironMeet — ASEAN-rooted, globally open",
  description: "An inclusive community where young people exchange ideas, grow mindsets, practice English, and connect across borders.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
