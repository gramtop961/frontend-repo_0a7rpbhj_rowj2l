import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <section id="home" className="pt-24 sm:pt-28">
          <Hero />
        </section>
        <section id="projects" className="pt-24">
          <Projects />
        </section>
        <section id="contact" className="pt-24 pb-16">
          <Contact />
        </section>
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
