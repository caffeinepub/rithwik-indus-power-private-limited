import { ArrowRight, Zap } from 'lucide-react';

export function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/solar-hero.dim_1920x1080.png"
          alt="Expansive solar farm with rows of photovoltaic panels under bright sunlight"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20 pb-16">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Powering a Sustainable Future</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
            Clean Energy for a
            <span className="block text-primary mt-2">Greener Tomorrow</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Rithwik Indus Power Private Limited is committed to delivering sustainable solar energy solutions across Tamil Nadu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#project"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#project')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Explore Our Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-background/80 backdrop-blur-sm text-foreground border-2 border-border rounded-lg font-semibold hover:bg-accent hover:border-accent transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
