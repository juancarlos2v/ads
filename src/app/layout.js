import { Open_Sans, Nunito } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@gcba/obelisco-v2/dist/styles.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata = {
  title: "Administrador de sitios",
  description: "ADS - Gobierno de la Ciudad de Buenos Aires",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
