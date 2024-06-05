import "../globals.css";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Background/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
