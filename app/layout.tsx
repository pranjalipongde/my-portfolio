import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pranjali | Personal Portfolio",
  description: "Pranjali is a Frontend developer with 1 year of experience ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#F79540] text-gray-950 relative  pt-28 sm:pt-36`}
      >
        <div className="bg-[#FB923C] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[40rem] sm:w-[68.75rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
