import React from "react";
import { Button, Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import { HashLink } from "react-router-hash-link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import img from '../Assests/logo.png'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    // { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    // { name: "Case Studies", href: "#case-studies" },
    { name: "Testimonials", href: "#testimonials" },
    // { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  const smoothScrollWithOffset = (el: HTMLElement) => {
    const yOffset = -80; 
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <HeroNavbar
      isBlurred={scrolled}
      isBordered={scrolled}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <img src={img} alt="Logo" width={35} height={20} className="text-primary text-2xl" />
            <p className="font-bold text-inherit text-xl">OpenNest</p>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <HashLink
              smooth
              to={item.href}
              scroll={el => smoothScrollWithOffset(el)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-foreground"
              }`}
            >
              {item.name}
            </HashLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={HashLink} 
            to="#contact"
            color="primary" 
            variant="flat" 
            radius="full"
            className="font-medium"
          >
            Get in Touch
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <HashLink
              smooth
              to={item.href}
              scroll={el => smoothScrollWithOffset(el)}
              className="w-full text-foreground-700 hover:text-primary py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </HashLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
};