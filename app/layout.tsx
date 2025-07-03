import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <Script
          src="https://rybbit.pandadev.net/api/script.js"
          defer
          data-site-id="2"
          data-session-replay="true"
          data-track-errors="true"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            options: {
              type: "static",
            },
          }}
          theme={{ defaultTheme: "dark" }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
