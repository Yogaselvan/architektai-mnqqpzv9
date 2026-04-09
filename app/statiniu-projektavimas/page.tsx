"use client";
import { Button, Card, CardBody, CardHeader, CardFooter, Input, Textarea, Divider, Link, Chip } from "@heroui/react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";

export default function StatiniuProjektavimasPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  return (
    <div ref={containerRef}>
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-content1/50 via-background to-content2/30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
          <div className="max-w-4xl">
            <div className="mb-8" data-reveal>
              <Chip 
                className="bg-tertiary/20 text-tertiary border border-tertiary/30"
                size="sm"
              >
                Statinių projektavimas
              </Chip>
            </div>
            
            <h1 
              data-hero-title
              className="text-foreground font-bold mb-8 leading-[1.05]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
            >
              MB Moderni<br />
              <span className="text-primary">architektūra</span>
            </h1>
            
            <div className="h-px w-48 bg-gradient-to-r from-primary to-tertiary mb-8" data-hero-sub />
            
            <p 
              data-hero-sub
              className="text-default-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
            >
              Kokybiškas statinių projektavimas visoje Lietuvoje. Kiekvienas projektas — unikalus sprendimas, derinantis funkcines poreikius su estetiniais principais.
            </p>
            
            <div className="flex flex-wrap gap-4" data-hero-sub>
              <Button
                as={Link}
                href="#paslaugos"
                className="font-medium text-white"
                size="lg"
                style={{ background: 'linear-gradient(135deg, #cac829, #545428)' }}
                endContent={<span>{"→"}</span>}
              >
                Sužinoti daugiau
              </Button>
              <Button
                as={Link}
                href="#kontaktai"
                variant="bordered"
                className="border-primary/50 text-primary hover:bg-primary/10"
                size="lg"
              >
                Susisiekti
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </section>

      <section id="paslaugos" className="py-24 bg-content1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-reveal>
              <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                Paslaugos
              </span>
              <h2 
                data-reveal-heading
                className="text-foreground font-bold mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Statinių projektavimas
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-primary to-tertiary mb-8" />
              <p className="text-default-400 leading-relaxed mb-6">
                Teikiame visas statinių projektavimo paslaugas — nuo pradinės idėjos iki galutinės techninės dokumentacijos. Mūsų komanda užtikrina aukščiausius kokybės standartus ir laikomasi visų statybos normų.
              </p>
              <p className="text-default-400 leading-relaxed mb-8">
                Projektuojame įvairios paskirties statinius: gyvenamuosius namus, komercines bei pramonines patalpas. Kiekvienas projektas kuriamas atsižvelgiant į užsakovo poreikius ir vietos ypatumus.
              </p>
              <Button
                as={Link}
                href="#kontaktai"
                className="font-medium text-white"
                style={{ background: 'linear-gradient(135deg, #cac829, #545428)' }}
              >
                Gauti konsultaciją
              </Button>
            </div>
            
            <div className="relative" data-reveal>
              <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 rounded-2xl" />
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-wh7nnsjdrs4yjtuurq70d-mP4NGv2xR0cDbV7e.png"
                alt="Statinių projektavimas"
                className="w-full h-96 object-cover rounded-2xl"
                data-parallax
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" data-reveal>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Mūsų kompetencija
            </span>
            <h2 
              data-reveal-heading
              className="text-foreground font-bold"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              Kokybė ir profesionalumas
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
            <Card
              className="bg-content1/60 backdrop-blur-xl border border-white/10"
              data-hover-lift
            >
              <CardBody className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <span>{"→"}</span>
                </div>
                <h3 className="text-foreground font-semibold text-xl mb-3">
                  Gyvenamųjų namų projektavimas
                </h3>
                <p className="text-default-400 leading-relaxed">
                  Individualūs gyvenamųjų namų projektai, atitinkantys šiuolaikinius energijos efektyvumo reikalavimus ir statybos normas.
                </p>
              </CardBody>
            </Card>

            <Card
              className="bg-content1/60 backdrop-blur-xl border border-white/10"
              data-hover-lift
            >
              <CardBody className="p-8">
                <div className="w-14 h-14 rounded-xl bg-tertiary/20 flex items-center justify-center mb-6">
                  <span>{"→"}</span>
                </div>
                <h3 className="text-foreground font-semibold text-xl mb-3">
                  Komercinių objektų sprendimai
                </h3>
                <p className="text-default-400 leading-relaxed">
                  Verslo objektų projektavimas, kuriant funkcines ir estetiškas erdves verslo poreikiams.
                </p>
              </CardBody>
            </Card>

            <Card
              className="bg-content1/60 backdrop-blur-xl border border-white/10"
              data-hover-lift
            >
              <CardBody className="p-8">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                  <span>{"→"}</span>
                </div>
                <h3 className="text-foreground font-semibold text-xl mb-3">
                  Vidaus erdvių projektavimas
                </h3>
                <p className="text-default-400 leading-relaxed">
                  Interjero sprendimai, derinantys ergonomiką, estetiką ir praktiškumą kasdienėje aplinkoje.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-content2/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative" data-reveal>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-tertiary/30 rounded-2xl" />
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-567jjnpd2htgmeyemikxf-YBgyJ5ZQ8zTNxjRo.png"
                alt="Projektavimo procesas"
                className="w-full h-96 object-cover rounded-2xl"
                data-parallax
                loading="lazy"
              />
            </div>
            
            <div className="order-1 lg:order-2" data-reveal>
              <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                Mūsų procesas
              </span>
              <h2 
                data-reveal-heading
                className="text-foreground font-bold mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Kaip mes dirbame
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-primary to-tertiary mb-8" />
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <span className="text-primary font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Konsultacija</h4>
                    <p className="text-default-400">Išsiaiškiname Jūsų poreikius ir lūkesčius pradiniame susitikime.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tertiary/20 border border-tertiary/30 flex items-center justify-center">
                    <span className="text-tertiary font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Projektavimas</h4>
                    <p className="text-default-400">Kuriame techninę dokumentaciją pagal suderintus sprendimus.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                    <span className="text-secondary-400 font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Derinimas</h4>
                    <p className="text-default-400">Teikiame projektą derinti su atsakingomis institucijomis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontaktai" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div data-reveal>
              <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                Susisiekite
              </span>
              <h2 
                data-reveal-heading
                className="text-foreground font-bold mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Pradėkime bendradarbiavimą
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-primary to-tertiary mb-8" />
              <p className="text-default-400 leading-relaxed mb-8">
                Turite klausimų apie statinių projektavimą? Susisiekite su mumis ir gaukite nemokamą konsultaciją dėl Jūsų projekto.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span>{"→"}</span>
                  </div>
                  <span className="text-foreground">info@architektai.lt</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-tertiary/20 flex items-center justify-center">
                    <span>{"→"}</span>
                  </div>
                  <span className="text-foreground">+370 600 00000</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <span>{"→"}</span>
                  </div>
                  <span className="text-foreground">Lietuva</span>
                </div>
              </div>
            </div>
            
            <div data-reveal>
              <Card
                className="bg-content1/60 backdrop-blur-xl border border-white/10"
                data-hover-lift
              >
                <CardBody className="p-8">
                  <form className="space-y-6">
                    <Input
                      label="Vardas"
                      placeholder="Įveskite savo vardą"
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-default-300 focus-within:border-primary bg-content2/50",
                        label: "text-default-400"
                      }}
                    />
                    <Input
                      label="El. paštas"
                      placeholder="jūsų@email.lt"
                      type="email"
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-default-300 focus-within:border-primary bg-content2/50",
                        label: "text-default-400"
                      }}
                    />
                    <Input
                      label="Telefonas"
                      placeholder="+370 000 00000"
                      type="tel"
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-default-300 focus-within:border-primary bg-content2/50",
                        label: "text-default-400"
                      }}
                    />
                    <Textarea
                      label=" žinutė"
                      placeholder="Aprašykite savo projektą..."
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-default-300 focus-within:border-primary bg-content2/50",
                        label: "text-default-400"
                      }}
                      minRows={4}
                    />
                    <Button
                      type="submit"
                      className="w-full font-medium text-white"
                      size="lg"
                      style={{ background: 'linear-gradient(135deg, #cac829, #545428)' }}
                    >
                      Siųsti užklausą
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-content1 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-foreground font-bold text-xl">
                <span className="text-primary">Arch</span>itektai
              </span>
            </div>
            <p className="text-default-500 text-sm">
              © 2024 MB Moderni architektūra. Visos teisės saugomos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}