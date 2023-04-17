import "./globals.css";

export const metadata = {
  title: "Dreamhome Finder",
  description: "Find your dream home with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
