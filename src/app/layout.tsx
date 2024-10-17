import "@/styles/globals.css";
import Head from "next/head";

export const metadata = {
  title: "Reddit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/reddit.png"></link>
      </Head>
      <body>{children}</body>
    </html>
  );
}
