"use client";
import { Button, Card, CardBody, CardHeader, CardFooter, Input, Textarea, Divider, Link, Chip } from "@heroui/react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";
import { Apie, Architektai, ArrowRight, Baigtas, Building2, Check, ChevronRight, Clock, Dirbame, Dokumentacija, El, FileCheck, Galutinis, Home, Individualus, Kiekvienas, Klasikinis, Kompleksiniai, Laiko, Lietuvoje, MB, Mail, MapPin, Moderni, Namo, NamoPridavimasPage, Nemokama, Nuo, Optimalu, Paslaugos, Patirtis, PenTool, Phone, Pilnas, Pridavimas, Profesionalios, Projektavimas, Ruler, Sklandus, Statyba, Statybos, Supratimas, Susisiekite, Telefono, Users, Vardas, Visoje, Visos, Vykdomas, XXXXX, YZ9Wyx0bjvt63wZg } from "lucide-react";

export default function NamoPridavimasPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  return (
    <div ref={containerRef}>
      <section className="relative min-h-screen flex items-center bg-background overflow-hidden" data-hero-bg>
        <div className="absolute inset-0 bg-gradient-to-br from-content1 via-background to-content2 opacity-50" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8" data-hero-sub>
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <Chip 
                size="sm" 
                className="bg-tertiary/20 text-tertiary border border-tertiary/30"
              >
                MB Moderni architektūra
              </Chip>
            </div>
            
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none tracking-tight mb-8"
              data-hero-title
            >
              Namo
              <br />
              <span className="text-primary">Pridavimas</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-default-400 max-w-2xl mb-12 leading-relaxed" data-hero-sub>
              Profesionalios namo pridavimo paslaugos visoje Lietuvoje. 
              Kompleksiniai sprendimai nuo projektavimo iki galutinio pridavimo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4" data-hero-sub>
              <Button 
                size="lg"
                className="font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #cac829, #545428)" }}
                endContent={<ArrowRight className="w-5 h-5" />}
              >
                Nemokama konsultacija
              </Button>
              <Button 
                size="lg"
                variant="bordered"
                className="border-default-300 text-default-400 hover:border-primary hover:text-primary"
              >
                Mūsų darbai
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>

      <section className="py-24 bg-content1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-reveal-heading>
              <div className="inline-flex items-center gap-2 mb-6">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-medium tracking-wider uppercase">Apie paslaugą</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Kodėl rinktis<br />
                <span className="text-primary">profesionalų pridavimą?</span>
              </h2>
              <p className="text-lg text-default-400 mb-8 leading-relaxed">
                Namo pridavimas – tai atsakingas procesas, reikalaujantis išsamių žinių statybos srityje. 
                Mūsų specialistai užtikrina sklandų ir greitą visų procedūrų atlikimą, 
                kad jūsų svajonių namas būtų priduotas laiku ir be rūpesčių.
              </p>
              <div className="flex flex-wrap gap-4">
                <Chip 
                  startContent={<Check className="w-4 h-4 text-primary" />}
                  className="bg-content2 text-default-300 border border-default-200"
                >
                  Pilnas dokumentų paruošimas
                </Chip>
                <Chip 
                  startContent={<Check className="w-4 h-4 text-primary" />}
                  className="bg-content2 text-default-300 border border-default-200"
                >
                  Statybos priežiūra
                </Chip>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4" data-reveal-stagger>
              <Card 
                className="bg-content1/60 backdrop-blur-xl border border-white/10 data-[hover-lift]:hover:-translate-y-2"
                data-hover-lift
              >
                <CardBody className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">100%</h3>
                  <p className="text-default-400 text-sm">Dokumentų atitiktis</p>
                </CardBody>
              </Card>
              
              <Card 
                className="bg-content1/60 backdrop-blur-xl border border-white/10 data-[hover-lift]:hover:-translate-y-2"
                data-hover-lift
              >
                <CardBody className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-tertiary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Optimalu</h3>
                  <p className="text-default-400 text-sm">Laiko planavimas</p>
                </CardBody>
              </Card>
              
              <Card 
                className="bg-content1/60 backdrop-blur-xl border border-white/10 data-[hover-lift]:hover:-translate-y-2 col-span-2"
                data-hover-lift
              >
                <CardBody className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-secondary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Visoje Lietuvoje</h3>
                      <p className="text-default-400 text-sm">Dirbame su klientais visuose regionuose</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" data-reveal-heading>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Paslaugos</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Namo pridavimo etapai
            </h2>
            <p className="text-lg text-default-400 max-w-2xl mx-auto">
              Nuo pradinio projekto iki galutinio pridavimo – lydime jus kiekviename žingsnyje
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal-stagger>
            {[
              { icon: PenTool, num: "01", title: "Projektavimas", desc: "Architektūriniai sprendimai ir dokumentacija" },
              { icon: Ruler, num: "02", title: "Statyba", desc: "Statybos darbų priežiūra ir koordinavimas" },
              { icon: FileCheck, num: "03", title: "Dokumentacija", desc: "Visų reikalingų dokumentų paruošimas" },
              { icon: Home, num: "04", title: "Pridavimas", desc: "Galutinis namo perdavimas su visais formalumais" },
            ].map((item, i) => (
              <Card 
                key={i}
                className="bg-content1/60 backdrop-blur-xl border border-white/10 data-[hover-lift]:hover:-translate-y-2"
                data-hover-lift
              >
                <CardBody className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-5xl font-bold text-default-200/50">{item.num}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-default-400 text-sm leading-relaxed">{item.desc}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-content1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16" data-reveal-heading>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Įgyvendinti projektai</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mūsų darbai
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8" data-reveal-stagger>
            <Card 
              className="bg-content2/80 backdrop-blur-xl border border-white/10 overflow-hidden data-[hover-lift]:hover:-translate-y-2"
              data-hover-lift
            >
              <CardBody className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-vksycsyf04gplwilb4dp7-m6LrzxJp5Lt10O17.png"
                    alt="Šiuolaikiškas individualus namas"
                    className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    data-parallax
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <Chip size="sm" className="bg-primary/20 text-primary mb-4">
                      Baigtas projektas
                    </Chip>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Šiuolaikiškas individualus namas</h3>
                    <p className="text-default-400 text-sm">Moderni architektūra su erdviu interjeru</p>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card 
              className="bg-content2/80 backdrop-blur-xl border border-white/10 overflow-hidden data-[hover-lift]:hover:-translate-y-2"
              data-hover-lift
            >
              <CardBody className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-bj10d5297sgvhgrytbtcq-mnl50yvwpGF4xk5y.png"
                    alt="Klasikinis svečių namas"
                    className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    data-parallax
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <Chip size="sm" className="bg-tertiary/20 text-tertiary mb-4">
                      Vykdomas projektas
                    </Chip>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Klasikinis svečių namas</h3>
                    <p className="text-default-400 text-sm">Jaukūs erdves su tradicine estetika</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-reveal>
              <div className="inline-flex items-center gap-2 mb-6">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-medium tracking-wider uppercase">Kodėl mes</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Patirtis ir<br />
                <span className="text-primary">profesionalumas</span>
              </h2>
              <p className="text-lg text-default-400 mb-8 leading-relaxed">
                MB Moderni architektūra – tai komanda, kuri veržiasi kurti erdves, 
                kuriose žmonės nori gyventi, dirbti ir ilsėtis. Kiekvienas projektas 
                pradedamas išklausant kliento poreikius ir baigiamas tik tada, 
                kai rezultatas viršija lūkesčius.
              </p>
              
              <div className="space-y-4" data-reveal-stagger>
                {[
                  "Individualus požiūris į kiekvieną projektą",
                  "Ilgametė patirtis statybų srityje",
                  "Supratimas vietos konteksto ir aplinkos",
                  "Sklandus bendravimas visu projekto etapu"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-default-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card 
              className="bg-content1/60 backdrop-blur-xl border border-white/10 p-8"
              data-hover-lift
            >
              <CardHeader className="p-0 mb-6">
                <h3 className="text-2xl font-bold text-foreground">Susisiekite su mumis</h3>
              </CardHeader>
              <CardBody className="p-0">
                <p className="text-default-400 mb-8">
                  Užpildykite formą ir mes susisieksime su jumis per 24 valandas
                </p>
                <div className="space-y-4">
                  <Input
                    label="Vardas ir pavardė"
                    placeholder="Įveskite savo vardą"
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-default-300 hover:border-secondary-400 focus-within:border-primary transition-colors",
                      label: "text-default-400"
                    }}
                  />
                  <Input
                    label="El. paštas"
                    placeholder="jūsų@email.lt"
                    type="email"
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-default-300 hover:border-secondary-400 focus-within:border-primary transition-colors",
                      label: "text-default-400"
                    }}
                  />
                  <Input
                    label="Telefono numeris"
                    placeholder="+370 6XX XXXXX"
                    type="tel"
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-default-300 hover:border-secondary-400 focus-within:border-primary transition-colors",
                      label: "text-default-400"
                    }}
                  />
                  <Textarea
                    label="Jūsų žinutė"
                    placeholder="Aprašykite savo projektą..."
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-default-300 hover:border-secondary-400 focus-within:border-primary transition-colors",
                      label: "text-default-400"
                    }}
                  />
                  <Button 
                    className="w-full font-semibold text-white mt-2"
                    style={{ background: "linear-gradient(135deg, #cac829, #545428)" }}
                    size="lg"
                  >
                    Siųsti užklausą
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-content1 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-bold text-foreground">Architektai</span>
                <p className="text-xs text-default-500">MB Moderni architektūra</p>
              </div>
            </div>
            
            <div className="h-px w-full md:w-px md:h-12 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-default-200/20 to-transparent" />
            
            <p className="text-default-500 text-sm text-center">
              © 2024 MB Moderni architektūra. Visos teisės saugomos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}