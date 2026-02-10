import { Building2, MapPin, Award, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Building2,
      title: 'Established Excellence',
      description: 'A trusted name in renewable energy infrastructure development',
    },
    {
      icon: MapPin,
      title: 'Strategic Locations',
      description: 'Registered office in Chennai with projects across Tamil Nadu',
    },
    {
      icon: Award,
      title: 'Quality Commitment',
      description: 'Delivering world-class solar installations with proven reliability',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to sustainable energy solutions',
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            About Rithwik Indus Power
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a forward-thinking renewable energy company specializing in large-scale solar power projects. 
            Based in Chennai, we're transforming the energy landscape of Tamil Nadu through innovative solar solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-soft"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To accelerate India's transition to clean energy by developing and operating high-efficiency solar power plants 
                that deliver reliable, sustainable electricity while minimizing environmental impact.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-muted-foreground">Reduce carbon emissions through renewable energy</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-muted-foreground">Create sustainable energy infrastructure for future generations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-muted-foreground">Support local communities with clean power solutions</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="/assets/generated/solar-panels-closeup.dim_1600x900.png"
                alt="Close-up view of solar panels with sunlight reflection showing clean technology"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
