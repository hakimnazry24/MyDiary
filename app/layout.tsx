import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simple My Diary",
  description: "This is just a simple diary website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <div className="grid md:lg:grid-cols-7 bg-green-500/80">
          <div className="col-span-2">
            <SideBar></SideBar>
          </div>
          <div className="col-span-5">{children}</div>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
