import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "EasyMart — نظام نقاط بيع ذكي لعملك",
  description:
    "EasyMart هو نظام نقاط بيع حديث مع إدارة المخزون، التحليلات، دعم المستخدمين المتعددين، والذكاء الاصطناعي المدمج. متوفر بإصدارين Pro و Lite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
