import { ReactNode, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import WhatsAppButton from "@/components/WhatsAppButton";

const Layout = ({ children }: { children: ReactNode }) => {
  const [loaded, setLoaded] = useState(false);

  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <div className="min-h-screen flex flex-col">
      {!loaded && <Preloader onComplete={handleComplete} />}
      <CustomCursor />
      <Navbar />
      <main className={`flex-1 ${loaded ? "page-enter" : ""}`}>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
