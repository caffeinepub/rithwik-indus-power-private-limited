import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Project } from './components/Project';
import { Sustainability } from './components/Sustainability';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Project />
        <Sustainability />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
