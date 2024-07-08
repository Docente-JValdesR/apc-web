import Providers from "@/app/provider";
import Navbar from "@/components/main-navbar";
import Footer from "@/components/main-footer";
import { roboto, oswald, montserrat, lato, source_code_pro } from "@/font/font";
import "@/styles/globals.css";
import "@/styles/embla.css";
import { GlobalProvider } from "@/context/globalContext";

export const metadata = {
  title: "APC - Centro educacional Héroe Arturo Pérez Canto",
  description: "Impulsando una educación integral para un futuro brillante.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${oswald.variable} ${lato.variable} ${montserrat.variable} ${source_code_pro.variable}`}
      >
        <GlobalProvider>
          <Providers>
            <div className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
              <Navbar />
              <main className="max-w-screen-xl">{children}</main>
              <Footer />
            </div>
          </Providers>
        </GlobalProvider>
      </body>
    </html>
  );
}
