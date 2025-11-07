import React from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

function Hero() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10 p-6 sm:p-10">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -right-10 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <Rocket size={14} className="text-indigo-400" />
            Available for freelance
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Your Name</span>
          </h1>
          <p className="mt-3 text-slate-300 leading-relaxed">
            I build modern web experiences with a focus on performance, accessibility, and delightful UI. Below are a few projects and ways to reach me.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Contact Me
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10">
              <Github size={16} /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="aspect-video md:aspect-square rounded-xl border border-white/10 bg-slate-950/60 flex items-center justify-center">
          <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 p-1">
            <img src="https://avatars.githubusercontent.com/u/9919?v=4" alt="Avatar" className="h-full w-full rounded-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
