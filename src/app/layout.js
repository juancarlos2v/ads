"use client";
import { Open_Sans, Nunito } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@gcba/obelisco-v2/dist/styles.css";
import "boxicons/css/boxicons.min.css";
import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { metadata } from "@/app/metadata";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

// export const metadata = {
//   title: "Administrador de sitios",
//   description: "ADS - Gobierno de la Ciudad de Buenos Aires",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLogin = pathname.startsWith("/login");
  return (
    <html lang="en">
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <body className={`${openSans.variable} ${nunito.variable}`}>
        {!isLogin && <Header />}
        {children}
        {!isLogin && <Footer />}

        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
