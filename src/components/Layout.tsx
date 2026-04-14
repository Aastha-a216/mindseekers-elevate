import { ReactNode, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Chatbot from "@/components/Chatbot";
import SocialSidebar from "@/components/SocialSidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  const [loaded, setLoaded] = useState(false);

  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <div className="min-h-screen flex flex-col">
      {!loaded && <Preloader onComplete={handleComplete} />}
      <Navbar />
      <SocialSidebar />
      <main className={`flex-1 ${loaded ? "page-enter" : ""}`}>{children}</main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;
