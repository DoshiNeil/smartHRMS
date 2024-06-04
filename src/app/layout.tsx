import type { Metadata } from "next";
import "./globals.css";
import PrelineScript from "@@/components/PrelineScript";


export const metadata: Metadata = {
  title: "smartHRMS",
  description: "a hrms designed with nextjs and preline", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen" >{children}</body>
      <PrelineScript/>
    </html>
  );
}
