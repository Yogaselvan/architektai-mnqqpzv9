"use client";
import { ChevronRight } from "lucide-react";
import { Button, Card, CardBody, CardHeader, CardFooter, Input, Textarea, Divider, Link, Chip } from "@heroui/react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";

export default function TeritorijuPlanavimas() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-content1 via-background to-content2" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-tertiary/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
          <div className="max-w-4xl">
            <div className="mb-8" data-reveal>
              <Chip 
                className="bg-tertiary/20 text-primary border border-primary/30"
                variant="flat"
                size="sm"
              >
                Architektai
              </Chip>
            </div>
            
            <h1 
              data-hero-title
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8"
              style={{ color: '#cac829' }}
            >
              Teritorijų<br />
              <span style={{ color: '#ffffff' }}>Planavimas</span>
            </h1>
            
            <p 
              data-hero-sub
              className="text-xl md:text-2xl text-default-500 max-w-xl mb-12 leading-relaxed"
            >
              Kuriami tvarkingi ir funkcionali sprendimai gyvenamosioms bei visuomeninėms teritorijoms visoje Lietuvoje
            </p>
            
            <div data-hero-sub className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #cac829, #545428)" }}
                endContent={"→"}
              >
                Konsultuotis
              </Button>
              <Button
                variant="bordered"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                Peržiūrėti projektus
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[60%] opacity-20">
          <div className="w-full h-full bg-gradient-to-l from-primary/30 to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-content1 py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-reveal-stagger>
            <div className="text-center" data-reveal>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">15+</p>
              <p className="text-default-500">Metų patirtis</p>
            </div>
            <div className="text-center" data-reveal>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">200+</p>
              <p className="text-default-500">Projektų</p>
            </div>
            <div className="text-center" data-reveal>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">50+</p>
              <p className="text-default-500">Komandų narių</p>
            </div>
            <div className="text-center" data-reveal>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">100%</p>
              <p className="text-default-500"> kokybės garantija</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Content Block */}
      <section className="bg-background py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7" data-reveal>
              <h2 
                data-reveal-heading
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              >
                Teritorijų planavimo <span className="text-primary">paslaugos</span>
              </h2>
              <div className="space-y-6 text-lg text-default-500 leading-relaxed">
                <p>
                  MB Moderni architektūra teikia kompleksines teritorijų planavimo paslaugas gyvenamosioms, visuomeninėms ir pramoninėms teritorijoms. Mūsų specialistai užtikrina aukščiausius kokybės standartus ir atsižvelgia į kiekvieno projekto individualius poreikius.
                </p>
                <p>
                  Planavimo procesas apima detalią teritorijos analizę, funkcinių zonų nustatymą, infrastruktūros projektavimą ir derinimą su statybos įstatymų reikalavimais. Dirbame su savivaldybėmis, verslo objektais ir privačiais užsakovais.
                </p>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-3" data-reveal>
                <Chip className="bg-primary/10 text-primary border border-primary/30" variant="flat">Detalus planavimas</Chip>
                <Chip className="bg-tertiary/20 text-tertiary" variant="flat">Teritorijos analizė</Chip>
                <Chip className="bg-secondary/20 text-secondary-400" variant="flat">Infrastruktūra</Chip>
              </div>
            </div>
            
            <div className="lg:col-span-5" data-reveal>
              <Card 
                className="bg-content1/60 backdrop-blur-xl border border-white/10"
                data-hover-lift
              >
                <CardBody className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #cac829, #545428)" }}>
                      →
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Konsultacija</h3>
                      <p className="text-default-500 text-sm nemokama">Nemokama</p>
                    </div>
                  </div>
                  <p className="text-default-400 mb-6">
                    Susisiekite su mumis dėl asmeninės konsultacijos Jūsų teritorijos planavimo klausimais.
                  </p>
                  <Button
                    className="w-full font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #cac829, #545428)" }}
                    endContent={"→"}
                  >
                    Užsakyti konsultaciją
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-content1 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16" data-reveal>
            <h2 
              data-reveal-heading
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Kaip mes <span className="text-primary">dirbame</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-md" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-reveal-stagger>
            {[
              { num: "01", title: "Analizė", desc: "Detali teritorijos ir Jūsų poreikių analizė" },
              { num: "02", title: "Planavimas", desc: "Funkcinių zonų ir sprendimų parengimas" },
              { num: "03", title: "Projektavimas", desc: "Techninės dokumentacijos rengimas" },
              { num: "04", title: "Derinimas", desc: "Projekto suderinimas su institucijomis" }
            ].map((step, i) => (
              <div key={i} data-reveal className="relative">
                <Card 
                  className="bg-content2/60 backdrop-blur-xl border border-white/10 h-full"
                  data-hover-lift
                >
                  <CardBody className="p-6">
                    <p className="text-6xl font-black text-primary/20 mb-4">{step.num}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-default-500">{step.desc}</p>
                  </CardBody>
                </Card>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <Icon name="ChevronRight" className="text-primary/50" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-background py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16" data-reveal>
            <h2 
              data-reveal-heading
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Įgyvendinti <span className="text-primary">projektai</span>
            </h2>
            <p className="text-xl text-default-500 max-w-2xl">
              Kiekvienas projektas – tai unikalus sprendimas, derinantis funkcionalumą su estetika
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8" data-reveal-stagger>
            <Card 
              className="bg-content1/60 backdrop-blur-xl border border-white/10 overflow-hidden"
              data-hover-lift
              data-reveal
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-gry3fk0nfivgry9lqk4fi-Yyv2aQZL3rUa6ZJg.png"
                  alt="Gyvenamosios teritorijos planavimo projektas"
                  className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                  data-parallax
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-content1 via-transparent to-transparent" />
              </div>
              <CardBody className="p-8">
                <Chip className="mb-4 bg-primary/10 text-primary border border-primary/30" variant="flat" size="sm">
                  Gyvenamosios teritorijos
                </Chip>
                <h3 className="text-2xl font-bold text-white mb-3">Naujamiesčio teritorijos planavimas</h3>
                <p className="text-default-500 mb-6">
                  Gyvenamųjų kvartalų infrastruktūros planavimas su aukštųjų standartų reikalavimais. Projekte numatytos žaliosios zonos, automobilių stovėjimo aikštelės ir pėsčiųjų takai.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-default-400">
                  <span className="flex items-center gap-2">
                    →
                    Vilnius
                  </span>
                  <span className="flex items-center gap-2">
                    →
                    2023 m.
                  </span>
                </div>
              </CardBody>
            </Card>
            
            <Card 
              className="bg-content1/60 backdrop-blur-xl border border-white/10 overflow-hidden"
              data-hover-lift
              data-reveal
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-thz83zqpkjpyr9uxyslf0-dWx0qaygrWC8JWaV.png"
                  alt="Visuomeninės teritorijos planavimo projektas"
                  className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                  data-parallax
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-content1 via-transparent to-transparent" />
              </div>
              <CardBody className="p-8">
                <Chip className="mb-4 bg-tertiary/20 text-tertiary" variant="flat" size="sm">
                  Visuomeninės teritorijos
                </Chip>
                <h3 className="text-2xl font-bold text-white mb-3">Verslo parko teritorijos sutvarkymas</h3>
                <p className="text-default-500 mb-6">
                  Komercinės teritorijos užstatymo ir tvarkymo planavimas. Įrengtos rekreacinės zonos darbuotojams ir svečiams, taip pat moderni automobilių stovėjimo infrastruktūra.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-default-400">
                  <span className="flex items-center gap-2">
                    →
                    Kaunas
                  </span>
                  <span className="flex items-center gap-2">
                    →
                    2024 m.
                  </span>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Block */}
      <section className="bg-content2 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16" data-reveal>
            <h2 
              data-reveal-heading
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Kodėl <span className="text-primary">rinktis mus</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-xs mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal-stagger>
            {[
              { icon: "Check", title: "Patirtis ir profesionalumas", desc: "Mūsų komanda turi daugiau nei 15 metų patirtį teritorijų planavimo srityje" },
              { icon: "Users", title: "Individualus požiūris", desc: "Kiekvienam projektui taikome asmeninį dėmesį ir pritaikome sprendimus pagal užsakovo poreikius" },
              { icon: "Building2", title: "Kompleksinės paslaugos", desc: "Teikiame visas teritorijų planavimo paslaugas nuo analizės iki galutinio suderinimo" }
            ].map((feature, i) => (
              <Card 
                key={i}
                className="bg-content1/60 backdrop-blur-xl border border-white/10"
                data-hover-lift
                data-reveal
              >
                <CardBody className="p-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #cac829, #545428)" }}>
                    →
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-default-500 text-sm">{feature.desc}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="bg-background py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div data-reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pasikalbėkime apie <span className="text-primary">projektą</span>
              </h2>
              <p className="text-xl text-default-500 mb-8">
                Turite klausimų ar norite pradėti projektą? Susisiekite su mumis ir gaukite nemokamą konsultaciją.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-default-400">
                  →
                  <span>Vilnius, Lietuva</span>
                </div>
                <div className="flex items-center gap-3 text-default-400">
                  →
                  <span>+370 600 00000</span>
                </div>
                <div className="flex items-center gap-3 text-default-400">
                  →
                  <span>info@architektai.lt</span>
                </div>
              </div>
            </div>
            
            <Card 
              className="bg-content1/60 backdrop-blur-xl border border-white/10"
              data-hover-lift
              data-reveal
            >
              <CardBody className="p-8">
                <form className="space-y-6">
                  <Input
                    label="Vardas"
                    placeholder="Įveskite savo vardą"
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-default-300 focus-within:border-primary bg-transparent"
                    }}
                  />
                  <Input
                    label="El. paštas"
                    placeholder="jūsų@email.lt"
                    type="email"
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-default-300 focus-within:border-primary bg-transparent"
                    }}
                  />
                  <Textarea
                    label="Žinutė"
                    placeholder="Aprašykite savo projektą..."
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-default-300 focus-within:border-primary bg-transparent"
                    }}
                  />
                  <Button
                    type="submit"
                    className="w-full font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #cac829, #545428)" }}
                    endContent={"→"}
                  >
                    Siųsti užklausą
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom Gradient Bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
}