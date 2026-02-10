import { MapPin, Building2, Phone } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Building2,
      label: 'Company Name',
      value: 'Rithwik Indus Power Private Limited',
    },
    {
      icon: MapPin,
      label: 'Registered Office',
      value: 'RR tower III, Thiruvika Industrial Estate, Guindy, Chennai - 600032',
    },
    {
      icon: MapPin,
      label: 'Project Location',
      value: 'Madurai, Tamil Nadu (~5 Acres)',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '044 42888111',
      href: 'tel:04442888111',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Interested in learning more about our solar projects or exploring partnership opportunities? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Contact Information */}
              <div className="p-8 md:p-10 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="font-display font-bold text-xl text-foreground mb-6">
                  Company Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                          {item.href ? (
                            <a 
                              href={item.href}
                              className="font-medium text-foreground hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For business inquiries, partnership opportunities, or general information about our 
                    solar energy projects, please reach out to us.
                  </p>
                </div>
              </div>

              {/* Contact Form Placeholder */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-display font-bold text-xl text-foreground mb-6">
                  Connect With Us
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
                    Send Message
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    This is a display form. For actual inquiries, please contact us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
