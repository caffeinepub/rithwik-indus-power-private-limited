import { Leaf, Droplets, Wind, TreePine } from 'lucide-react';

export function Sustainability() {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Carbon Reduction',
      description: 'Our solar installations offset thousands of tons of CO₂ emissions annually, equivalent to planting thousands of trees.',
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Solar energy requires minimal water compared to conventional power generation, preserving precious water resources.',
    },
    {
      icon: Wind,
      title: 'Clean Air',
      description: 'Zero emissions during operation means cleaner air and healthier communities for generations to come.',
    },
    {
      icon: TreePine,
      title: 'Land Stewardship',
      description: 'Responsible land use practices that maintain ecological balance while generating renewable energy.',
    },
  ];

  return (
    <section id="sustainability" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            <span>Go Green Initiative</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Committed to Sustainability
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our 5-acre solar project in Madurai represents more than just energy generation—it's a 
            commitment to environmental stewardship and a sustainable future for Tamil Nadu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {initiatives.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl overflow-hidden shadow-soft">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-3 p-8 md:p-12 text-primary-foreground">
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
                Our Environmental Commitment
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                At Rithwik Indus Power, sustainability isn't just a buzzword—it's the foundation of everything we do. 
                Our Madurai project exemplifies our dedication to creating a cleaner, greener future.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <p className="text-primary-foreground/90">100% renewable energy generation</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <p className="text-primary-foreground/90">Zero greenhouse gas emissions during operation</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <p className="text-primary-foreground/90">Minimal environmental footprint</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <p className="text-primary-foreground/90">Contributing to India's climate goals</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-primary-foreground/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Leaf className="w-32 h-32 text-primary-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
