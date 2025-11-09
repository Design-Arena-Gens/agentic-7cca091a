import "./globals.css";
import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "Monochrome Bungo Log",
  description: "A stark black and white reflection on every literary soul in Bungo Stray Dogs."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={specialElite.className}>{children}</body>
    </html>
  );
}
