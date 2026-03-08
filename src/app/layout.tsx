import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "스마택트 자격증 | 디지털을 가르치는 것이 아니라 사람을 살리는 교육전문가를",
  description: "스마택트 민간자격증은 AI·디지털 기술을 '잘 쓰는 사람'이 아니라 현장에서 사람을 돕는 교육전문가·활동가를 양성합니다.",
  metadataBase: new URL("https://cert.smartact.co.kr"),
  openGraph: {
    title: "스마택트 자격증 | 사람을 살리는 교육전문가 양성",
    description: "에듀테크, 디지털미디어, AI윤리, 스마트디바이스, AI에이전트 - 5단계 자격증 과정",
    url: "https://cert.smartact.co.kr",
    siteName: "스마택트 자격증",
    locale: "ko_KR",
    type: "website",
  },
  keywords: [
    "스마택트", "민간자격증", "에듀테크", "디지털미디어교육",
    "AI윤리", "스마트디바이스", "AI에이전트", "교육전문가",
    "지도전문가", "평생교육", "디지털교육", "교육자격증",
  ],
  verification: {
    google: "vCXPai8n7mZo-kVqsTqfUAqHg2zuGIvFnMZ9ORxKH0c",
    other: {
      "naver-site-verification": process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
