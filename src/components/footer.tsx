import React from "react";
import { Divider } from "@heroui/react";
import { HashLink } from "react-router-hash-link";
import { Icon } from "@iconify/react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Custom Software", href: "#services" },
        { name: "Mobile Apps", href: "#services" },
        { name: "Web Applications", href: "#services" },
        { name: "Cloud Solutions", href: "#services" },
        { name: "Data & AI", href: "#services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Whitepapers", href: "#" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Documentation", href: "#" },
        { name: "FAQs", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR Compliance", href: "#" },
        { name: "Security", href: "#" },
      ],
    },
  ];

  const smoothScrollWithOffset = (el: HTMLElement) => {
    const yOffset = -80; 
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="bg-background pt-0 pb-8">
      <div className="container mx-auto px-4">
        
        
        <Divider className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-500 text-sm">
            © {currentYear} DevSphere. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-foreground-500 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground-500 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-foreground-500 hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};