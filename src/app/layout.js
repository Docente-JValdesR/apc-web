import "./globals.css";
import {
  Cookie,
  Roboto_Slab,
  Roboto,
  Lato,
  Open_Sans,
  Montserrat,
  Oswald,
  Source_Sans_3,
  Slabo_27px,
  Raleway,
} from "next/font/google";
import { Providers } from "./provider";
import Navbar from "@/components/main-navbar";
import Footer from "@/components/main-footer";
const cookie = Cookie({ subsets: ["latin"], weight: "400" });
const roboto_slab = Roboto_Slab({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "400" });
const open_sans = Open_Sans({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const source_sans_3 = Source_Sans_3({ subsets: ["latin"], weight: "400" });
const slabo_27px = Slabo_27px({ subsets: ["latin"], weight: "400" });
const raleway = Raleway({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "APC - Centro educacional Héroe Arturo Pérez Canto",
  description: "Impulsando una educación integral para un futuro brillante.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={raleway.className}>
        <Providers>
          <div className="flex min-h-screen flex-col items-center justify-between  gradient-bg-animation">
            <Navbar />
            <main className="max-w-screen-lg">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
