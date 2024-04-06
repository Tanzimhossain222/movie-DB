import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cine Rental",
  description: "Cine Rental is a platform for renting movies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-body bg-white font-[Sora] dark:text-white text-dark`} >
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
