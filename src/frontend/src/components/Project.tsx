import { MapPin, Maximize2, Zap, Calendar } from 'lucide-react';

export function Project() {
  const projectStats = [
    { icon: MapPin, label: 'Location', value: 'Madurai, Tamil Nadu' },
    { icon: Maximize2, label: 'Project Area', value: '~5 Acres' },
    { icon: Zap, label: 'Energy Type', value: 'Solar Photovoltaic' },
    { icon: Calendar, label: 'Status', value: 'Operational' },
  ];

  return (
    <section id="project" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Our Madurai Solar Project
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A state-of-the-art solar power installation spanning approximately 5 acres, 
            generating clean energy for the region while contributing to India's renewable energy goals.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {projectStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="font-display font-semibold text-foreground">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Project Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-soft group">
            <img
              src="/assets/generated/solar-aerial.dim_1600x900.png"
              alt="Aerial view of the Madurai solar plant showing extensive photovoltaic panel arrays"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
              <p className="text-primary-foreground font-semibold">Aerial View - Solar Array</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-soft group">
            <img
              src="/assets/generated/solar-infrastructure.dim_1600x900.png"
              alt="Solar infrastructure including inverters and control equipment at the Madurai facility"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
              <p className="text-primary-foreground font-semibold">Infrastructure & Equipment</p>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">
            Project Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Advanced Technology</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Utilizing high-efficiency photovoltaic panels with optimized mounting systems 
                  to maximize energy capture throughout the day.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Environmental Impact</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Significantly reducing carbon emissions while providing clean, renewable energy 
                  to power thousands of homes and businesses.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Grid Integration</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Seamlessly connected to the regional power grid with advanced monitoring 
                  and control systems ensuring reliable energy delivery.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Local Benefits</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Creating employment opportunities and supporting the local economy while 
                  contributing to Madurai's sustainable development goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
