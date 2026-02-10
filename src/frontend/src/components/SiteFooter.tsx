import { Heart } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'rithwik-indus-power'
  );

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/assets/rithwik.png" 
                alt="Rithwik Indus Power logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-display font-bold text-lg text-foreground">
                Rithwik Indus Power
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading the renewable energy revolution in Tamil Nadu with sustainable solar power solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Project', 'Sustainability', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Locations</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Registered Office</p>
                <p>RR tower III, Thiruvika Industrial Estate, Guindy, Chennai - 600032</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Project Site</p>
                <p>Madurai, Tamil Nadu</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <a 
                  href="tel:04442888111"
                  className="hover:text-primary transition-colors"
                >
                  044 42888111
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Rithwik Indus Power Private Limited. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Built with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
