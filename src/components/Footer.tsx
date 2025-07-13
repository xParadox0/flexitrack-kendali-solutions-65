import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { label: "Beranda", href: "#home" },
    { label: "Solusi", href: "#solutions" },
    { label: "Produk", href: "#products" },
    { label: "Tentang Kami", href: "#about" },
  ];

  const products = [
    { label: "Tracking-Only (TO)", href: "#products" },
    { label: "Portable (PT)", href: "#products" },
    { label: "Cut-Off Control (CO)", href: "#products" },
    { label: "Full Feature (FF)", href: "#products" },
  ];

  const industries = [
    { label: "Logistics", href: "#industries" },
    { label: "Construction", href: "#industries" },
    { label: "Plantation", href: "#industries" },
    { label: "Fleet Rental", href: "#industries" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">FlexiTrack</span>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Solusi GPS tracking terdepan yang memberdayakan bisnis untuk mengambil keputusan lebih cepat dan cerdas.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-background/70">info@flexitrack.id</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-background/70">+62 21 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produk</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.label}>
                  <a
                    href={product.href}
                    className="text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {product.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-background/70 mb-4">
              Dapatkan update terbaru tentang fitur dan tips optimasi fleet management.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded-md text-background placeholder-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="cta" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-background/70 text-sm">
              © 2024 FlexiTrack. Seluruh hak cipta dilindungi.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-background/70 text-sm">Ikuti kami:</span>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;