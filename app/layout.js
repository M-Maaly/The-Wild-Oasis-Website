import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>© 2026 The Wild Oasis, All Copyright is Keep up Policy Inc.</footer>
      </body>
    </html>
  );
}
