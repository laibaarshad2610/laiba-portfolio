import "./globals.css";

export const metadata = {
  title: "Laiba Arshad | Full-Stack Engineer",
  description:
    "Portfolio of Laiba Arshad — Full-Stack Engineer specializing in React, Next.js, Node.js, Express, MongoDB and WordPress.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
