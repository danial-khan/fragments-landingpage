import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth bg-white">
      <Navbar />
      <main className="flex-1 pb-28 sm:pb-24">{children}</main>
      <Footer />
    </div>
  );
}
