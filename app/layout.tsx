import "@/app/globals.css";
import Image from "next/image";
import { Manrope } from "next/font/google";
import PlausibleProvider from "next-plausible";
import gradientImg from "@/public/gradient.webp";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { constructMetadata } from "@/lib/utils";
import { ThemeProvider } from "@/components/misc/(theme)/theme-provider";

const font = Manrope({
  weight: "400",
  subsets: ["latin"],
});

interface ChildrenProps {
  readonly children: React.ReactNode;
}

export const metadata = constructMetadata();

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PlausibleProvider enabled domain="abdullahsidd.vercel.app" />
      </head>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container max-w-2xl mx-auto min-h-screen flex flex-col px-4 py-5">
            <div className="flex-1">
              <Header />
              {children}
            </div>
            <Footer />
            <Image
              className="absolute left-0 md:left-1/2 top-0 -z-10 -translate-x-1/2 lg:scale-100 object-cover w-full"
              src={gradientImg}
              role="presenation"
              alt="Gradient background"
              priority
            />
          </div>
          <noscript>
            <p className="bg-yellow-100 mx-auto text-center p-2">
              JavaScript is disabled. Some functionalities might not work
              properly.
            </p>
          </noscript>
        </ThemeProvider>
      </body>
    </html>
  );
}
