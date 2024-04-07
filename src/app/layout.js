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
      <body className={`${inter.className} `} >
        <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
          {children}
        </div>
        <div id="modal-root-content" />
      </body>
    </html>
  );
}
