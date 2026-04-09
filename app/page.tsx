"use client";
import { Button, Card, CardBody, Input, Textarea } from "@heroui/react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";
import { ArrowRight, Building2, Check, ChevronRight } from "lucide-react";

const projects = [
  { id: 1, image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-vksycsyf04gplwilb4dp7-m6LrzxJp5Lt10O17.png", title: "Šiuolaikinis biuras", description: "Minimalistinės biuro erdvės su atviro plano sprendimais" },
  { id: 2, image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-bj10d5297sgvhgrytbtcq-mnl50yvwpGF4xk5y.png", title: "Privačiai namai", description: "Atspindintys šeimos vertybes ir modernų gyvenimo būdą" },
  { id: 3, image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-cx1ahxe3lncldqf13wbsl-YKbN7wElv1h9Xgbj.png", title: "Komerci nis kompleksas", description: "Daugiafunkcinis centras su prekybos ir paslaugų zonomis" },
  { id: 4, image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-dlyv8uafat7se6cx1ezb7-dWx0qaBDEQhz7Dej.png", title: "Restoranas", description: "Unikali erdvė su integralios apšvietimo sistema" },
  { id: 5, image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-gry3fk0nfivgry9lqk4fi-Yyv2aQZL3rUa6ZJg.png", title: "Sveikatos centras", description: "Jaukios ir šiuolaikiškos gydymo įstaigos erdvės" },
  { id: 6, image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-thz83zqpkjpyr9uxyslf0-dWx0qaygrWC8JWaV.png", title: "butų kompleksas", description: "Modernūs gyvenamieji bokštai su dangoraižio panorama" },
];

export default function ArchitektaiHome() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  return (
    <div ref={containerRef}>
      <div data-hero-bg className="relative min-h-screen overflow-hidden" style={{backgroundImage: "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YZ9Wyx0bjvt63wZg/dizainas-be-pavadinimo-42-Yyv2eW77k0uw110b.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/70 to-primary/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-40 flex items-center min-h-screen">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8" data-hero-sub>
              <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
              <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase">Architektai</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] tracking-tight mb-8" data-hero-title>
              <span className="block">Moderni</span>
              <span className="block">architektūra</span>
              <span className="block text-primary">ateičiai</span>
            </h1>
            <p className="text-default-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed" data-hero-sub>
              Kuriami tvarius ir inovatyvius architektūros sprendimus, formuojančius ateities miestus
            </p>
            <div className="flex flex-wrap gap-4" data-hero-sub>
              <Button size="lg" className="text-white font-semibold px-8" style={{background: "linear-gradient(135deg, #cac829, #545428)"}} endContent={<ArrowRight className="w-5 h-5" />}>
                Žiūrėti projektus
              </Button>
              <Button size="lg" variant="bordered" className="border-default-300 text-foreground hover:border-primary" endContent={<ChevronRight className="w-5 h-5" />}>
                Susisiekti
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-32 bg-content1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-reveal-heading>
              <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-6 block">Apie mus</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Architektūra,<br /><span className="text-primary">kuri kuria</span><br />vertę
              </h2>
              <p className="text-default-400 text-lg leading-relaxed mb-8">
                Esame aistringi architektūros profesionalai, kuriantys šiuolaikiškus, funkcinius ir estetiškus statinius. Mūsų komanda siekia sukurti erdves, kurios ne tik tenkina funkcinius poreikius, bet ir įkvepia žmones kiekvieną dieną.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-default-300 text-sm">Tvari statyba</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-tertiary" />
                  <span className="text-default-300 text-sm">Inovacijos</span>
                </div>
              </div>
              <Button size="lg" className="text-white font-semibold px-8" style={{background: "linear-gradient(135deg, #cac829, #545428)"}} endContent={<ArrowRight className="w-5 h-5" />}>
                Sužinoti daugiau
              </Button>
            </div>
            <div className="relative" data-reveal>
              <div className="relative">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/YZ9Wyx0bjvt63wZg/img-wh7nnsjdrs4yjtuurq70d-mP4NGv2xR0cDbV7e.png" alt="Architektūros vizualizacija" className="w-full h-[500px] object-cover rounded-3xl" data-parallax />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-content1/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">A+</div>
                    <div className="text-default-400 text-xs">Energinio efektyvumo klasė</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20" data-reveal-heading>
            <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-4 block">Paslaugos</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Ką mes siūlome</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
            <Card className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300" data-hover-lift>
              <CardBody className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Gyvenamųjų namų projektavimas</h3>
                <p className="text-default-400 leading-relaxed">Individualūs namų projektai, pritaikyti jūsų gyvenimo būdui ir poreikiams</p>
              </CardBody>
            </Card>
            <Card className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300" data-hover-lift>
              <CardBody className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Komerci nės paskirties objektai</h3>
                <p className="text-default-400 leading-relaxed">Biurai, prekybos centrai ir kiti komerciniai sprendimai verslui</p>
              </CardBody>
            </Card>
            <Card className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300" data-hover-lift>
              <CardBody className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Interjero dizainas</h3>
                <p className="text-default-400 leading-relaxed">Funkcionalūs ir estetiški interjero sprendimai kiekvienai erdvei</p>
              </CardBody>
            </Card>
            <Card className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300" data-hover-lift>
              <CardBody className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Teritorijų planavimas</h3>
                <p className="text-default-400 leading-relaxed">Kraštovaizdžio ir aplinkos projektavimas darniai su aplinka</p>
              </CardBody>
            </Card>
            <Card className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300" data-hover-lift>
              <CardBody className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Statybos priežiūra</h3>
                <p className="text-default-400 leading-relaxed">Kokybės kontrolė ir statybos proceso priežiūra iki projekto užbaigimo</p>
              </CardBody>
            </Card>
            <Card className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300" data-hover-lift>
              <CardBody className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Konsultacijos</h3>
                <p className="text-default-400 leading-relaxed">Profesionalios konsultacijos architektūros ir statybos klausimais</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 bg-content1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6" data-reveal-heading>
            <div>
              <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-4 block">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Mūsų projektai</h2>
            </div>
            <Button variant="bordered" className="border-primary text-primary self-start md:self-auto" endContent={<ArrowRight className="w-4 h-4" />}>
              Visi projektai
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
            {projects.map((project, index) => (
              <Card key={project.id} className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300 overflow-hidden" data-hover-lift>
                <CardBody className="p-0">
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-72 object-cover rounded-t-2xl transition-transform duration-500 hover:scale-105" data-parallax loading="lazy" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-tertiary/20 text-tertiary border border-tertiary/30 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">Projektas {index + 1}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-default-400 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-reveal-heading>
              <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-6 block">Metodas</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Kaip mes dirbame</h2>
              <p className="text-default-400 text-lg leading-relaxed mb-10">Kiekvienas projektas pradedamas nuo išsamaus poreikių išklausymo ir analizės. Mūsų komanda dirba glaudžiai su klientu, užtikrinant, kad kiekvienas sprendimas atitiktų viziją ir funkcinius reikalavimus.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">01</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Konsultacija</h4>
                    <p className="text-default-400 text-sm">Išsamus poreikių išklausymas ir pirminė analizė</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">02</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Projektavimas</h4>
                    <p className="text-default-400 text-sm">Detalių sprendimų kūrimas ir vizualizavimas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">03</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Realizacija</h4>
                    <p className="text-default-400 text-sm">Projekto įgyvendinimas ir priežiūra</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative" data-reveal>
              <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/YZ9Wyx0bjvt63wZg/img-567jjnpd2htgmeyemikxf-YBgyJ5ZQ8zTNxjRo.png" alt="Projektavimo procesas" className="w-full h-[500px] object-cover rounded-3xl" data-parallax />
              <div className="absolute -top-6 -left-6 bg-content1/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-foreground font-semibold"> Kokybės</div>
                    <div className="text-default-400 text-xs">Užtikrinimas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-content2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-reveal>
              <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-6 block">Susisiekti</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Pradėkime pokalbį</h2>
              <p className="text-default-400 text-lg leading-relaxed mb-8">Turite idėją ar projektą? Susisiekite su mumis ir pradėkime kurti kartu. Užpildykite formą ir mes su jumis susisieksime artimiausiu metu.</p>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8" />
              <p className="text-default-500 text-sm">Susisiekti galite užpildę formą dešinėje arba rašydami mums el. paštu.</p>
            </div>
            <Card className="bg-content1/60 backdrop-blur-xl border border-white/10" data-reveal data-hover-lift>
              <CardBody className="p-8">
                <form className="space-y-6">
                  <Input label="Vardas" variant="bordered" classNames={{ inputWrapper: "border-default-300 bg-transparent focus-within:border-primary bg-content2/50", label: "text-default-400", input: "text-foreground" }} />
                  <Input label="El. paštas" type="email" variant="bordered" classNames={{ inputWrapper: "border-default-300 bg-transparent focus-within:border-primary bg-content2/50", label: "text-default-400", input: "text-foreground" }} />
                  <Textarea label="Žinutė" variant="bordered" minRows={4} classNames={{ inputWrapper: "border-default-300 bg-transparent focus-within:border-primary bg-content2/50", label: "text-default-400", input: "text-foreground" }} />
                  <Button type="submit" size="lg" className="w-full text-white font-semibold" style={{background: "linear-gradient(135deg, #cac829, #545428)"}} endContent={<ArrowRight className="w-5 h-5" />}>
                    Siųsti žinutę
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-content1 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">Architektai</h3>
              <p className="text-default-500 text-sm mt-1">Moderni architektūra ateičiai</p>
            </div>
            <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
            <p className="text-default-500 text-sm">© 2024 MB Moderni architektūra</p>
          </div>
        </div>
      </footer>
    </div>
  );
}