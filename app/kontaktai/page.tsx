"use client";
import { Button, Input, Textarea } from "@heroui/react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";
import { ArrowRight, Mail } from "lucide-react";

export default function KontaktaiPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  return (
    <div ref={containerRef}>
      <section className="relative min-h-[70vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-content2/50 via-background to-background" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-tertiary/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="mb-6" data-reveal>
              <span className="inline-block px-4 py-1.5 bg-tertiary/20 text-tertiary text-sm font-medium rounded-full">
                Architektai
              </span>
            </div>
            <h1 
              data-hero-title
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] tracking-tight mb-8"
            >
              Susisiekite<br />
              <span className="text-primary">su mumis</span>
            </h1>
            <p 
              data-hero-sub
              className="text-xl md:text-2xl text-default-500 max-w-xl leading-relaxed"
            >
              Turite klausimų apie mūsų architektūros paslaugas? Susisiekite ir pradėkite pokalbį jau šiandien.
            </p>
          </div>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block">
          <div className="relative w-full h-full opacity-20">
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-cx1ahxe3lncldqf13wbsl-YKbN7wElv1h9Xgbj.png"
              alt=""
              className="absolute top-20 right-10 w-64 h-80 object-cover rounded-2xl"
              data-parallax
              loading="lazy"
            />
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-dlyv8uafat7se6cx1ezb7-dWx0qaBDEQhz7Dej.png"
              alt=""
              className="absolute bottom-32 right-32 w-48 h-64 object-cover rounded-2xl"
              data-parallax
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="relative" data-reveal>
              <div className="sticky top-24">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Rašykite mums
                  </h2>
                  <p className="text-default-500 text-lg">
                    Užpildykite formą ir mes susisieksime su jumis per artimiausias 24 valandas.
                  </p>
                </div>
                
                <div className="h-px bg-gradient-to-r from-primary via-tertiary to-transparent mb-12" />
                
                <div className="bg-content1/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8" data-hover-lift>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">El. paštas</p>
                      <p className="text-default-500 text-sm">Atsakome per 24 valandas</p>
                    </div>
                  </div>
                  
                  <img 
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-dlyv8uafat7se6cx1ezb7-dWx0qaBDEQhz7Dej.png"
                    alt="Architektūros brėžiniai"
                    className="w-full h-48 object-cover rounded-2xl mb-6"
                    data-parallax
                    loading="lazy"
                  />
                  
                  <p className="text-default-400 text-sm italic">
                    Kiekvienas projektas prasideda pokalbiu. Pasidalinkite savo vizijomis ir kartu sukursime kažką ypatingo.
                  </p>
                </div>
              </div>
            </div>
            
            <div data-reveal-stagger>
              <form className="space-y-6">
                <div className="bg-content1/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Kontaktinė informacija
                  </h3>
                  
                  <div className="space-y-5">
                    <Input 
                      type="text" 
                      label="Vardas" 
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-default-300 focus-within:border-primary bg-content2/50 transition-colors duration-300",
                        label: "text-default-400",
                        input: "text-foreground"
                      }}
                    />
                    
                    <Input 
                      type="email" 
                      label="El. paštas" 
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-default-300 focus-within:border-primary bg-content2/50 transition-colors duration-300",
                        label: "text-default-400",
                        input: "text-foreground"
                      }}
                    />
                    
                    <Input 
                      type="tel" 
                      label="Telefonas" 
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-default-300 focus-within:border-primary bg-content2/50 transition-colors duration-300",
                        label: "text-default-400",
                        input: "text-foreground"
                      }}
                    />
                  </div>
                </div>
                
                <div className="bg-content1/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Jūsų žinutė
                  </h3>
                  
                  <Textarea 
                    label="Žinutė" 
                    variant="bordered"
                    minRows={6}
                    classNames={{
                      inputWrapper: "border-default-300 focus-within:border-primary bg-content2/50 transition-colors duration-300",
                      label: "text-default-400",
                      input: "text-foreground"
                    }}
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
                  style={{
                    background: "linear-gradient(135deg, #cac829, #545428)"
                  }}
                  endContent={<ArrowRight className="w-5 h-5" />}
                >
                  Siųsti
                </Button>
                
                <p className="text-center text-default-500 text-sm">
                    Spausdami „Siųsti" sutinkate su mūsų privatumo politika.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-content1">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-content2/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-primary/30 transition-all duration-300"
              data-hover-lift
              data-reveal
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Konsultacijos
                  </h3>
                  <p className="text-default-500 leading-relaxed">
                    Nemokamos pradinės konsultacijos kiekvienam naujam projektui. Aptarsime jūsų poreikius ir galimybes.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              className="bg-content2/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-primary/30 transition-all duration-300"
              data-hover-lift
              data-reveal
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-tertiary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Kokybės garantija
                  </h3>
                  <p className="text-default-500 leading-relaxed">
                    Kiekvienas mūsų projektas atitinka aukščiausius kokybės standartus ir architektūros reikalavimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </section>
    </div>
  );
}