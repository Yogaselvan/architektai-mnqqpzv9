"use client";
import { Button, Card, CardBody, CardHeader, CardFooter, Input, Textarea, Divider, Link, Chip } from "@heroui/react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";
import { Apie, Architektai, ArrowRight, Baigtas, Building2, Check, Compass, Detali, Efektyvus, El, FileText, Grotesk, Individualus, Kaip, Kaune, Kiekviena, Kiekvienam, Konsultacijos, KonsultacijosPage, Kontaktai, Lanksti, Lietuvoje, MB, Moderni, Nepriklausomas, Nurodome, Nustatome, Padedame, Paslaugos, Pateikiame, Patirtis, Profesionalios, Ruler, Scale, Space, Statybos, Sujungiami, Suprantame, Susisiekti, Telefono, Users, Vardas, XX, XXX, YKbN7wElv1h9Xgbj, YZ9Wyx0bjvt63wZg } from "lucide-react";

export default function KonsultacijosPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  return (
    <div ref={containerRef}>
      <section className="min-h-screen bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-content2/50 via-background to-background" />
        
        <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-8" data-reveal>
              <Chip 
                className="bg-tertiary/20 text-tertiary border border-tertiary/30"
                variant="flat"
                size="sm"
              >
                Konsultacijos
              </Chip>
            </div>
            
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none tracking-tight mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-hero-title
            >
              Architektų
              <br />
              <span className="text-primary">konsultacijos</span>
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-secondary-400 max-w-2xl mb-12 leading-relaxed"
              data-hero-sub
            >
              Profesionalios architektūros konsultacijos Kaune bei visoje Lietuvoje. 
              Kiekvienam projektui – individualus požiūris ir kokybiški sprendimai.
            </p>
            
            <div className="flex flex-wrap gap-4" data-hero-sub>
              <Button 
                size="lg"
                className="text-white font-semibold"
                style={{ background: "linear-gradient(135deg, #cac829, #545428)" }}
                endContent={<ArrowRight className="w-5 h-5" />}
              >
                Užsakyti konsultaciją
              </Button>
              <Button 
                size="lg"
                variant="bordered"
                className="border-primary text-primary"
              >
                Peržiūrėti paslaugas
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border border-primary/30 rounded-full" />
          <div className="absolute top-40 right-40 w-48 h-48 border border-secondary/20 rounded-full" />
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" data-reveal />

      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16" data-reveal-heading>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Konsultacijų <span className="text-primary">paslaugos</span>
            </h2>
            <p className="text-secondary-400 text-lg max-w-xl">
              Siūlome platų architektūros konsultacijų spektrą – nuo pradinio projekto vertinimo iki galutinės techninės priežiūros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal-stagger>
            <Card 
              className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              data-hover-lift
            >
              <CardBody className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Compass className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Pradinė konsultacija</h3>
                <p className="text-secondary-400 leading-relaxed">
                  Įvertiname jūsų idėjas, pageidavimus ir biudžetą. Nustatome projekto galimybes ir ribas dar projekto pradžioje.
                </p>
              </CardBody>
            </Card>

            <Card 
              className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              data-hover-lift
            >
              <CardBody className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Techninė konsultacija</h3>
                <p className="text-secondary-400 leading-relaxed">
                  Detali statybos techninių sprendimų analizė. Padedame išvengti brangių klaidų statybų eigoje.
                </p>
              </CardBody>
            </Card>

            <Card 
              className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              data-hover-lift
            >
              <CardBody className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Ruler className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Erdvės planavimas</h3>
                <p className="text-secondary-400 leading-relaxed">
                  Efektyvus patalpų išplanavimas atsižvelgiant į funkcinius poreikius, ergonomiką ir estetiką.
                </p>
              </CardBody>
            </Card>

            <Card 
              className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              data-hover-lift
            >
              <CardBody className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Brėžinių peržiūra</h3>
                <p className="text-secondary-400 leading-relaxed">
                  Esamų projektų dokumentacijos ekspertizė. Nurodome trūkumus ir siūlome patobulinimus.
                </p>
              </CardBody>
            </Card>

            <Card 
              className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              data-hover-lift
            >
              <CardBody className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Projektų koordinavimas</h3>
                <p className="text-secondary-400 leading-relaxed">
                  Sujungiami įvairių sričių specialistai. Užtikrinamas sklandus projekto įgyvendinimas.
                </p>
              </CardBody>
            </Card>

            <Card 
              className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              data-hover-lift
            >
              <CardBody className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Scale className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Ekspertinė nuomonė</h3>
                <p className="text-secondary-400 leading-relaxed">
                  Nepriklausomas architektūros sprendimų vertinimas. Statybos defektų analizė ir dokumentacija.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-content1">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-reveal>
              <div className="relative">
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-cx1ahxe3lncldqf13wbsl-YKbN7wElv1h9Xgbj.png"
                  alt="Architektūros projektavimo procesas"
                  className="w-full h-96 object-cover rounded-3xl"
                  data-parallax
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/20 rounded-3xl -z-10" />
              </div>
            </div>
            
            <div data-reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Kaip vyksta <span className="text-primary">konsultacija</span>
              </h2>
              <p className="text-secondary-400 text-lg mb-10 leading-relaxed">
                Kiekviena konsultacija pradedama išsamia jūsų poreikių analize. Suprantame, ko ieškote ir kokie yra jūsų lūkesčiai.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Susipažinimas su projektu</h4>
                    <p className="text-secondary-400">Įsigiliname į jūsų viziją ir išklausome pageidavimus</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Analizė ir variantai</h4>
                    <p className="text-secondary-400">Paruošiame keletą sprendimo variantų su brėžiniais</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Baigtas sprendimas</h4>
                    <p className="text-secondary-400">Pateikiame galutinę dokumentaciją su sąmata</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1" data-reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                <span className="text-primary">Patirtis</span> ir kompetencija
              </h2>
              <p className="text-secondary-400 text-lg mb-8 leading-relaxed">
                Architektai komanda turi ilgametę patirtį įvairių mastų projektuose – nuo nedidelės paskirties patalpų iki visų pastato dalių projektavimo.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-6 rounded-2xl bg-content1/60 backdrop-blur-xl border border-white/10">
                  <Check className="w-6 h-6 text-primary mb-3" />
                  <p className="text-foreground font-medium">Individualus požiūris</p>
                </div>
                <div className="p-6 rounded-2xl bg-content1/60 backdrop-blur-xl border border-white/10">
                  <Check className="w-6 h-6 text-primary mb-3" />
                  <p className="text-foreground font-medium">Lanksti sistema</p>
                </div>
                <div className="p-6 rounded-2xl bg-content1/60 backdrop-blur-xl border border-white/10">
                  <Check className="w-6 h-6 text-primary mb-3" />
                  <p className="text-foreground font-medium">Aiški komunikacija</p>
                </div>
                <div className="p-6 rounded-2xl bg-content1/60 backdrop-blur-xl border border-white/10">
                  <Check className="w-6 h-6 text-primary mb-3" />
                  <p className="text-foreground font-medium">Kokybiški brėžiniai</p>
                </div>
              </div>
              
              <Link 
                href="#" 
                className="text-primary inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Sužinoti daugiau apie mus <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="order-1 lg:order-2" data-reveal>
              <div className="relative">
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-dlyv8uafat7se6cx1ezb7-dWx0qaBDEQhz7Dej.png"
                  alt="Architektūros sprendimų vizualizacija"
                  className="w-full h-96 object-cover rounded-3xl"
                  data-parallax
                  loading="lazy"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-tertiary/30 rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-content2">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16" data-reveal-heading>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Susisiekti dėl <span className="text-primary">konsultacijos</span>
            </h2>
            <p className="text-secondary-400 text-lg">
              Užpildykite formą ir susisieksime su jumis artimiausiu metu
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card 
              className="bg-content1/60 backdrop-blur-xl border border-white/10"
              data-reveal
            >
              <CardBody className="p-8 lg:p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      label="Vardas"
                      labelPlacement="outside"
                      placeholder="Įveskite vardą"
                      classNames={{
                        inputWrapper: "border-default-300 focus-within:border-primary bg-background/50 data-[focus=true]:border-primary transition-all duration-300"
                      }}
                    />
                    <Input
                      type="email"
                      label="El. paštas"
                      labelPlacement="outside"
                      placeholder="info@pavyzdys.lt"
                      classNames={{
                        inputWrapper: "border-default-300 focus-within:border-primary bg-background/50 data-[focus=true]:border-primary transition-all duration-300"
                      }}
                    />
                  </div>
                  
                  <Input
                    type="tel"
                    label="Telefono numeris"
                    labelPlacement="outside"
                    placeholder="+370 6XX XXX XX"
                    classNames={{
                      inputWrapper: "border-default-300 focus-within:border-primary bg-background/50 data-[focus=true]:border-primary transition-all duration-300"
                    }}
                  />
                  
                  <Textarea
                    label="Jūsų užklausa"
                    labelPlacement="outside"
                    placeholder="Aprašykite savo projektą ar klausimą..."
                    classNames={{
                      inputWrapper: "border-default-300 focus-within:border-primary bg-background/50 data-[focus=true]:border-primary transition-all duration-300"
                    }}
                  />
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full text-white font-semibold"
                    style={{ background: "linear-gradient(135deg, #cac829, #545428)" }}
                    endContent={<ArrowRight className="w-5 h-5" />}
                  >
                    Siųsti užklausą
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-background border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">Architektai</h3>
              <p className="text-secondary-400 text-sm">MB Moderni architektūra</p>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="#" className="text-secondary-400 hover:text-primary transition-colors text-sm">
                Paslaugos
              </Link>
              <Link href="#" className="text-secondary-400 hover:text-primary transition-colors text-sm">
                Apie mus
              </Link>
              <Link href="#" className="text-secondary-400 hover:text-primary transition-colors text-sm">
                Kontaktai
              </Link>
            </div>
            
            <p className="text-default-500 text-sm">
              © 2024 MB Moderni architektūra
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}