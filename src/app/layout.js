import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mouldy Potato Website",
  description: "The official website of Mouldy Potato",
  keywords: [
    "Minecraft server",
    "Minecraft",
    "Games",
    "Play",
    "Documentation",
    "Mouldy Potato",
  ] /* SEO */,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock"></meta>
        {/* disable dark reader assuming your page is already dark or has dark mode support */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
