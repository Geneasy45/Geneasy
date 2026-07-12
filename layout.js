export const metadata = {
  title: "Geneasy",
  description: "Affiliate shopping website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
