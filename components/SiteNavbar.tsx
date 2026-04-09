"use client";

import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem,
  NavbarMenuToggle, NavbarMenu, NavbarMenuItem,
  Button, Link,
} from "@heroui/react";
import { useState } from "react";

export function SiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to content
      </a>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="xl"
        classNames={{
          base: "bg-background/60 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/5 fixed top-0 z-50 transition-all duration-300",
          wrapper: "max-w-7xl px-6",
        }}
      >
        <NavbarContent>
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden text-foreground" />
          <NavbarBrand>
            <Link href="/" className="flex items-center gap-3 no-underline group">
              <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=226,fit=crop,q=95/YZ9Wyx0bjvt63wZg/364196773_854821369552145_8061232822857158430_n-removebg-preview-mjEPOV09ryS2k7r4.png" alt="Architektai" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <span className="font-bold text-lg text-foreground tracking-tight">Architektai</span>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className="text-sm font-medium">Pradžia</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/konsultacijos" className="text-sm font-medium">MB Moderni architektūra - Konsultacijos</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/teritoriju-planavimas" className="text-sm font-medium">MB Moderni architektūra - Teritorijų Planavimas</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/statiniu-projektavimas" className="text-sm font-medium">MB Moderni architektūra - Statinių Projektavimas</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/namo-pridavimas" className="text-sm font-medium">MB Moderni architektūra - Namo Pridavimas</Link>
        </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <Button
              as={Link}
              href="/kontaktai"
              radius="full"
              size="sm"
              className="font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              style={{background: "linear-gradient(135deg, var(--heroui-primary), var(--heroui-secondary))"}}
            >
              Kontaktai
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="pt-8 bg-background/95 backdrop-blur-2xl">
        <NavbarMenuItem key="0">
          <Link className="w-full text-foreground" href="/" size="lg">Pradžia</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="1">
          <Link className="w-full text-foreground" href="/konsultacijos" size="lg">MB Moderni architektūra - Konsultacijos</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="2">
          <Link className="w-full text-foreground" href="/teritoriju-planavimas" size="lg">MB Moderni architektūra - Teritorijų Planavimas</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="3">
          <Link className="w-full text-foreground" href="/statiniu-projektavimas" size="lg">MB Moderni architektūra - Statinių Projektavimas</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="4">
          <Link className="w-full text-foreground" href="/namo-pridavimas" size="lg">MB Moderni architektūra - Namo Pridavimas</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="5">
          <Link className="w-full text-foreground" href="/kontaktai" size="lg">Kontaktai</Link>
        </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
