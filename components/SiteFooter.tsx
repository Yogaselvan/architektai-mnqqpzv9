"use client";

import { Link } from "@heroui/react";


export function SiteFooter() {
  return (
    <footer className="relative bg-content1 overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand + Address */}
          <div className="lg:col-span-1">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=226,fit=crop,q=95/YZ9Wyx0bjvt63wZg/364196773_854821369552145_8061232822857158430_n-removebg-preview-mjEPOV09ryS2k7r4.png" alt="Architektai" className="h-12 w-auto mb-5 object-contain opacity-90" onError={(e: any) => { e.target.style.display = 'none'; }} />
            <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">Architektai</h3>
            
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-5">Navigacija</h4>
            <Link href="/" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-3">Pradžia</Link>
            <Link href="/konsultacijos" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-3">MB Moderni architektūra - Konsultacijos</Link>
            <Link href="/teritoriju-planavimas" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-3">MB Moderni architektūra - Teritorijų Planavimas</Link>
            <Link href="/statiniu-projektavimas" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-3">MB Moderni architektūra - Statinių Projektavimas</Link>
            <Link href="/namo-pridavimas" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-3">MB Moderni architektūra - Namo Pridavimas</Link>
            <Link href="/kontaktai" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-3">Kontaktai</Link>
          </div>

          {/* Contact Info */}
          

          {/* Social Links */}
          <div>
            <h4 className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-5">Socialiniai tinklai</h4>
              <Link href="https://www.facebook.com/profile.php?id=100066856404463" isExternal className="text-default-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 mb-2" aria-label="Facebook">Facebook</Link>
              <Link href="https://www.instagram.com/moderni_architektura/" isExternal className="text-default-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 mb-2" aria-label="Instagram">Instagram</Link>
              <Link href="https://www.linkedin.com/company/moderni-architekt%C5%ABra/about/" isExternal className="text-default-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 mb-2" aria-label="LinkedIn">LinkedIn</Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-center text-xs text-default-500">&copy; 2026 Architektai. Visos teisės saugomos.</p>
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
    </footer>
  );
}
