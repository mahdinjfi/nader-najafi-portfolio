import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "نادر نجفی | استادکار نصب اسلب، کاشی و سنگ در تهران",
  description:
    "معرفی حرفه‌ای نادر نجفی، استادکار نصب اسلب، کاشی، سنگ، پرسلان، کانتر و روشویی با بیش از ۲۰ سال تجربه در تهران.",
  keywords: [
    "نادر نجفی",
    "نصب اسلب",
    "کاشی کاری تهران",
    "سنگ کاری تهران",
    "نصب پرسلان",
    "اجرای کانتر",
    "نصب روشویی",
    "استادکار کاشی",
    "استادکار سنگ",
  ],
  openGraph: {
    title: "نادر نجفی | استادکار نصب اسلب، کاشی و سنگ در تهران",
    description:
      "نمونه‌کارها و معرفی خدمات حرفه‌ای نصب اسلب، کاشی، سنگ، پرسلان، کانتر و روشویی در تهران.",
    locale: "fa_IR",
    type: "website",
    siteName: "نادر نجفی",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className="bg-ink font-sans text-marble antialiased">{children}</body>
    </html>
  );
}
