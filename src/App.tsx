import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Technologies } from "./components/technologies";
import { Projects } from "./components/projects";
import { Testimonials } from "./components/testimonials";
import { ContactUs } from "./components/contact-us";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
  
        <Services />
        <Technologies />
        <Projects />
        
        {/* <Testimonials /> */}
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;