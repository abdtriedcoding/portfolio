import "@/app/globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import gradientImg from "@/public/gradient.webp";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/misc/(theme)/theme-provider";

const inter = Inter({ subsets: ["latin"] });

interface ChildrenProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
