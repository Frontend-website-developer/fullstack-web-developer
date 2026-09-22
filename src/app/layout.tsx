import type { Metadata } from "next";
import { Lato, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"]
});

const bricolagegrotesque = Bricolage_Grotesque({
  variable: "--font-bricolate-grotesque",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"]
});

export const metadata: Metadata = {
  title: "Syed Sajid Ali — Senior Full-Stack Developer | MERN & Next.js",
  description: "Senior Full-Stack Developer with 12+ years experience in MERN, Next.js, and WordPress. Based in Doha, Qatar. Available for freelance and full-time roles.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${bricolagegrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="max-w-[1500px] mx-auto px-[15px]">
          {children}
        </div>  
          </body>
    </html>
  );
}
