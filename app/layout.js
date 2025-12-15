import './globals.css';
export const metadata = {
  title: "Prashanna Pudasaini | Junior Web Developer",
  description: "Junior Web Developer skilled in React, Next.js & Node.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
