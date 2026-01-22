/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  RocketLaunchIcon,
  HomeIcon,
  BoltIcon,
  InformationCircleIcon,
  FolderIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.98)"],
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(14, 165, 233, 0)", "rgba(14, 165, 233, 0.2)"],
  );

  // Device detection
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Scroll & active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: HomeIcon },
    { name: "Services", href: "#services", id: "services", icon: BoltIcon },
    { name: "About", href: "#about", id: "about", icon: InformationCircleIcon },
    {
      name: "Portfolio",
      href: "#portfolio",
      id: "portfolio",
      icon: FolderIcon,
    },
    { name: "Contact", href: "#contact", id: "contact", icon: UserGroupIcon },
  ];

  const handleNavigation = (e: any, href: any, id: any) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.header
        className="fixed w-full z-40 bg-slate-900/90 backdrop-blur-sm shadow-md"
        style={{ backgroundColor }}
      >
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => handleNavigation(e, "#home", "home")}
              className="flex items-center"
            >
              <img
                src={"/images/logo.png"}
                alt="Tecso Logo"
                className={`object-contain ${
                  isMobile ? "w-32 h-8" : isTablet ? "w-36 h-9" : "w-40 h-10"
                }`}
              />
              {!isMobile && (
                <div className="ml-2 px-2 py-1 rounded-lg flex items-center backdrop-blur-sm bg-white/10 border border-white/20">
                  <HiOutlineLightningBolt className="h-4 w-4 text-cyan-300 mr-1" />
                  <span className="text-xs text-cyan-100 font-semibold">
                    {isTablet ? "Digital" : "Digital Excellence"}
                  </span>
                </div>
              )}
            </a>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href, link.id)}
                  className={`flex items-center px-3 py-2 rounded-lg ${
                    activeSection === link.id
                      ? "bg-blue-500/10 text-cyan-300"
                      : "text-cyan-100/80 hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    className={`h-5 w-5 mr-2 ${
                      activeSection === link.id
                        ? "text-cyan-300"
                        : "text-cyan-200/70"
                    }`}
                  />
                  <span className="text-sm font-medium">{link.name}</span>
                </motion.a>
              );
            })}

            {/* CTA Button */}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavigation(e, "#contact", "contact")}
              className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold flex items-center bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RocketLaunchIcon className="h-5 w-5 mr-2" />
              Start Project
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg border border-cyan-500 text-cyan-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Border effect */}
        <motion.div
          className="border-b border-cyan-500/20"
          style={{ borderBottomColor: borderColor }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-slate-900 shadow-2xl z-50 p-4 overflow-y-auto border-l border-cyan-500/20"
            >
              <div className="flex justify-between items-center mb-4">
                <a
                  href="#home"
                  onClick={(e) => {
                    handleNavigation(e, "#home", "home");
                    setMobileMenuOpen(false);
                  }}
                >
                  <img
                    src={"/images/logo.png"}
                    alt="Logo"
                    className="w-32 h-8 object-contain"
                  />
                </a>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg border border-cyan-500 text-cyan-300"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavigation(e, link.href, link.id)}
                      className={`flex items-center px-3 py-2 rounded-lg ${
                        activeSection === link.id
                          ? "bg-blue-500/10 text-cyan-300"
                          : "text-cyan-100/80 hover:bg-white/5"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-5 w-5 mr-2" />
                      {link.name}
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  handleNavigation(e, "#contact", "contact");
                  setMobileMenuOpen(false);
                }}
                className="mt-4 px-4 py-2 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white font-semibold shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RocketLaunchIcon className="h-5 w-5 mr-2" />
                Start Project
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/255712343287"
        className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-green-500 shadow-lg text-white flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="h-5 w-5" />
      </motion.a>
    </>
  );
}
